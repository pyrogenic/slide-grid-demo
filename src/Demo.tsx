import React from 'react';
import SlideGrid from '@pyrogenic/slide-grid/lib/SlideGrid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

let NEXT_TILE_ID = 0;

interface ITile {
  id: string;
  title: string;
}

interface IDemoState {
  tiles: ITile[];
}

export default abstract class Demo extends React.Component<{}, IDemoState> {
  constructor(props: {}) {
    super(props);
    this.state = { tiles: this.newDemo() };
  }

  public render() {
    return <Row className="demo">
        <Col/>
        <Col md={"auto"}>
          <h3>{this.title}</h3>
          {this.renderDemo()}
        </Col>
        <Col/>
      </Row>;
  }

  protected abstract get title(): string;

  protected getTileById(id: string) {
    return this.state.tiles.find((e) => e.id === id)!;
  }

  protected getTileIndexById(id: string) {
    return this.state.tiles.findIndex((e) => e.id === id)!;
  }

  protected getTileByTitle(title: string) {
    return this.state.tiles.find((e) => e.title === title)!;
  }

  protected getTileIndexByTitle(title: string) {
    return this.state.tiles.findIndex((e) => e.title === title)!;
  }

  protected renderDemo() {
    return <SlideGrid exchange={this.exchange}>
    {this.state.tiles.map((tile) => <div className="tile" key={tile.id} id={tile.id}>
      <div>{tile.title}</div>
    </div>)}
    </SlideGrid>
  }

  protected createTile(title: string) {
    return {id: `tile-${NEXT_TILE_ID++}`, title};
  }

  protected newDemo() {
    const tiles: ITile[] = []
    for (let i = 1; i <= 16; ++i) {
      tiles.push(this.createTile(i.toString()));
    }
    return tiles;
  }

  protected exchange = (a: string, b: string) => {
    this.setState((state) => {
      const ai = state.tiles.findIndex((e) => e.id === a);
      const bi = state.tiles.findIndex((e) => e.id === b);
      const tiles: ITile[] = [];
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
