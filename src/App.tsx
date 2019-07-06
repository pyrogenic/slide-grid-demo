import React from 'react';
import SlideGrid from '@pyrogenic/slide-grid/lib/SlideGrid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './App.css';

interface IAppState {
  tiles: string[];
}

function SlideGridLink() {
  return <a href="https://github.com/pyrogenic/slide-grid"><code>slide-grid</code></a>;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    const tiles: string[] = [];//["_"];
    for (let i = 1; i <= 16; ++i) {
      tiles.push(i.toString());
    }
    this.state = { tiles };
  }

  public render() {
    return <Container>
        <h1>
          <SlideGridLink/>
        </h1>
        <h2>Overview</h2>
        <p>
          <SlideGridLink/> is a hybrid React/DOM component that supports lightweight, touch-aware reordering of children.
        </p>
        <h2>Demos</h2>
      <Row>
        <Col/>
        <Col md={"auto"}>
          <h3>Basic Grid</h3>
          <SlideGrid exchange={this.exchange}>
            {this.state.tiles.map((tile) => <div className="tile" key={tile} id={tile}>
              <div>{tile}</div>
            </div>)}
          </SlideGrid>
        </Col>
        <Col/>
      </Row>
    </Container>;
  }

  private exchange = (a: string, b: string) => {
    this.setState((state) => {
      const ai = state.tiles.indexOf(a);
      const bi = state.tiles.indexOf(b);
      const tiles: string[] = [];
      console.log({ a, ai, b, bi });
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
