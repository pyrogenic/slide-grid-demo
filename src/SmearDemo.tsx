import * as React from 'react';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Demo, { IDemoState, ITile } from './Demo';

interface ISmearState extends IDemoState {
  selected?: ITile[];
  last?: ITile[];
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
    </>;
  }

  protected renderTileContent(tile: ITile) {
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
