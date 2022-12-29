import SlideGrid from '@pyrogenic/slide-grid/lib/SlideGrid';
import range from 'lodash/range';
import * as React from 'react';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/Row';
import Demo, { IDemoState, ITile } from './Demo';

interface ISmearState extends IDemoState {
  selected?: ITile[];
  last?: ITile[];
  useKeys?: boolean;
  nestTiles?: boolean;
}

class SmearDemo extends Demo<ISmearState> {
  protected title = "Smear Demo";

  protected getDefaultState() {
    return { tiles: this.newDemo() };
  }

  protected renderHeader() {
    return <>
      <Row className="m-2">
        <Col>
          Selection: {this.state.selected
            ? this.state.selected?.map(({ title }, i) => <Badge bg='secondary' key={i}>{title}</Badge>)
            : <Badge bg='light' text='dark'>None</Badge>
          } <Badge>{this.state.last?.map(({ title }) => title).join("-")}</Badge>
        </Col>
      </Row>
      <Row className="m-2">
        <Col>
          <Form.Check id="useKeys" label="Use Keys" checked={!!this.state.useKeys} onChange={() => this.setState(({useKeys}) => ({useKeys: !useKeys}))}/>
        </Col>
        <Col>
          <Form.Check id="nestTiles" label="Nest Tiles" checked={!!this.state.nestTiles} onChange={() => this.setState(({nestTiles}) => ({nestTiles: !nestTiles}))}/>
        </Col>
      </Row>
    </>;
  }


  protected renderDemo() {
    if (!this.state.useKeys) {
      return super.renderDemo();
    }
    const { tuning } = this.props;
    return <>
      {this.renderHeader()}
      <SlideGrid
        keys={this.state.tiles.map(({id}) => id)}
        tuning={tuning}
        exchange={this.exchange}
        canExchange={this.canExchange}
        tap={this.tap}
        done={this.done}
        smear={this.smear}
      >
        {range(0, 4).map((row) =>
          <div key={row}>
            {range(0, 4).map((col) => {
              const tile = this.state.tiles[row * 4 + col];
              return <div className="tile" key={tile.id} id={tile.id}>
                {this.renderTileContent(tile)}
              </div>;
            })}
          </div>)}
      </SlideGrid>
      <Row>
        {this.state.useKeys && <Form.Text>touch reordering is not supported when using <code>keys</code></Form.Text>}
      </Row>
    </>;
  }

  protected renderTileContent(tile: ITile) {
    if (this.state.nestTiles) {}
    return <div>{tile.title}</div>;
  }

  smear = (key: string) => {
    this.setState(({ selected }) => {
      selected = [...(selected ?? []), this.getTileById(key)];
      return ({ selected });
    })
  }

  tap = (key: string) => {
    console.log({ tap: this.getTileById(key).title });
    this.setState(({ selected }) => ({ selected: [...(selected ?? []), this.getTileById(key)] }));
  }

  done = (key: string) => {
    console.log({ done: this.getTileById(key).title });
    this.setState(({ selected, last }) => ({ selected: undefined, last: selected ?? last }));
  }
}

export default SmearDemo;
