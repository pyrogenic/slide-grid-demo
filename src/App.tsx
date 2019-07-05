import React from 'react';
import SlideGrid from '@pyrogenic/slide-grid/lib/SlideGrid';

import './App.css';

interface IAppState {
  tiles: string[];
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    const tiles = [" "];
    for (let i = 1; i <= 15; ++i) {
      tiles.push(i.toString());
    }
    this.state = { tiles };
  }

  public render = () => <SlideGrid exchange={this.exchange}>
    {this.state.tiles.map((tile) => <div key={tile} id={tile}>{tile}</div>)}
  </SlideGrid>;

  private exchange = (a: string, b: string) => {
    this.setState((state) => {
      const ai = state.tiles.indexOf(a);
      const bi = state.tiles.indexOf(b);
      const tiles: string[] = [];
      console.log({a, ai, b, bi});
      state.tiles.forEach((tile, i) => {
        if (i === ai) {
          tiles[bi] = tile;
        } else if (i === bi) {
          tiles[ai] = tile;
        } else {
          tiles[i] = tile;
        }
      });
      return { tiles };
    })
  }

}

export default App;
