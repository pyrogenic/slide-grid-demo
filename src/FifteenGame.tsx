import compact from 'lodash/compact';
import shuffle from 'lodash/shuffle';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Demo from './Demo';
import SlideGrid from './SlideGrid';

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
    return <>
      <Row className="mb-1">
        <Button onClick={() => this.setState({ tiles: this.newDemo() })}>Reset</Button>
        &nbsp;
    <Button onClick={() => this.setState({ tiles: shuffle(this.state.tiles) })}>Shuffle</Button>
      </Row>
      <Row>
        <SlideGrid exchange={this.exchange} canExchange={this.canExchange} tap={this.tap}>
          {this.state.tiles.map((tile) => <div className={compact(["tile", tile.title === "_" && "blank"]).join(" ")} key={tile.id} id={tile.id}>
            <div>{tile.title}</div>
          </div>)}
        </SlideGrid>
      </Row>
    </>;
  }

  private tap = (id: string) => {
    const blank = this.getTileByTitle("_");
    if (this.canExchange(id, blank.id)) {
      this.exchange(id, blank.id);
    }
  }

  private canExchange = (a: string, b?: string): boolean => {
    const aBlank = this.getTileById(a).title === "_";
    if (!b) {
      b = this.getTileByTitle("_").id;
    }
    const bBlank = this.getTileById(b).title === "_";
    if (!(aBlank || bBlank)) {
      return false;
    }

    const aIndex = this.getTileIndexById(a);
    const bIndex = this.getTileIndexById(b);
    const aRow = Math.floor(aIndex / 4);
    const aCol = aIndex % 4
    const bRow = Math.floor(bIndex / 4);
    const bCol = bIndex % 4
    return (aRow === bRow && Math.abs(aCol - bCol) === 1)
      || (aCol === bCol && Math.abs(aRow - bRow) === 1);
  };
}

export default FifteenGame;

