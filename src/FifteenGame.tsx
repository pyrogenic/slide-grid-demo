import React from 'react';
import SlideGrid from '@pyrogenic/slide-grid/lib/SlideGrid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Demo from './Demo';
import compact from 'lodash/compact';

class FifteenGame extends Demo {
  protected title = "15 Game";

  protected newDemo() {
    const tiles = [this.createTile("_")];
    for (let i = 1; i <= 15; ++i) {
      tiles.push(this.createTile(i.toString()));
    }
    return tiles;
  }

  protected renderDemo() {
    return <SlideGrid exchange={this.exchange} canExchange={this.canExchange}>
    {this.state.tiles.map((tile) => <div className={compact(["tile", tile.title === "_" && "blank"]).join(" ")} key={tile.id} id={tile.id}>
      <div>{tile}</div>
    </div>)}
    </SlideGrid>
  }

  private canExchange = (a: string, b?: string): boolean => {
    const empty = this.getTileId("_");
    return a === empty || b === empty;
  };
}

export default FifteenGame;
