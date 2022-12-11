import SlideGrid, { ISlideGridTuning } from '@pyrogenic/slide-grid/lib/SlideGrid';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

let NEXT_TILE_ID = 0;

export interface ITile {
  id: string;
  title: string;
}

export interface IDemoState {
  tiles: ITile[];
}

export interface IDemoProps {
  tuning: ISlideGridTuning;
};

export default abstract class Demo<TState extends IDemoState = IDemoState> extends React.Component<IDemoProps, TState> {
  protected tap?: ((key: string) => void);
  protected done?: ((key: string) => void);
  protected smear?: ((key: string) => void);

  constructor(props: Readonly<IDemoProps>) {
    super(props);
    this.state = this.getDefaultState();
  }

  public render() {
    return <Row className="demo">
      <Col />
      <Col md={"auto"}>
        <h3>{this.title}</h3>
        {this.renderDemo()}
      </Col>
      <Col />
    </Row>;
  }

  protected abstract get title(): string;

  protected abstract getDefaultState(): Readonly<TState>;

  protected canExchange?(a: string, b?: string): boolean | number;

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
    const { tuning } = this.props;
    return <>
    {this.renderHeader()}
      <SlideGrid tuning={tuning} exchange={this.exchange} canExchange={this.canExchange} tap={this.tap} done={this.done} smear={this.smear}>
      {this.state.tiles.map((tile) => <div className="tile" key={tile.id} id={tile.id}>
        {this.renderTileContent(tile)}
      </div>)}
    </SlideGrid>
    </>;
  }
  
  protected renderHeader(): any {
    return false;
  }

  protected renderTileContent(tile: ITile) {
    return <div>{tile.title}</div>;
  }

  protected createTile(title: string) {
    return { id: `tile-${NEXT_TILE_ID++}`, title };
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


