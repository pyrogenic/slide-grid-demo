import React from 'react';
import SlideGrid from '@pyrogenic/slide-grid/lib/SlideGrid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './App.css';

interface IDemoState {
  tiles: string[];
}

function SlideGridLink() {
  return <a href="https://github.com/pyrogenic/slide-grid"><code>slide-grid</code></a>;
}

export default abstract class Demo extends React.Component<{}, IDemoState> {
  constructor(props: {}) {
    super(props);
    this.state = { tiles: this.newDemo() };
  }

  public render() {
    return <Row>
        <Col/>
        <Col md={"auto"}>
          <h3>{this.title}</h3>
          {this.renderDemo()}
        </Col>
        <Col/>
      </Row>;
  }

  protected abstract get title(): string;

  protected renderDemo() {
    return <SlideGrid exchange={this.exchange}>
    {this.state.tiles.map((tile) => <div className="tile" key={tile} id={tile}>
      <div>{tile}</div>
    </div>)}
    </SlideGrid>
  }

  private newDemo() {
    const tiles: string[] = []
    for (let i = 1; i <= 16; ++i) {
      tiles.push(i.toString());
    }
    return tiles;
  }

  protected exchange = (a: string, b: string) => {
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
