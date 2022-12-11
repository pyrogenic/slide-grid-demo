import * as React from 'react';
import Demo, { ITile, IDemoState } from './Demo';
import "./StrictDemo.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

enum Mode {
  lock = "Lock",
  costUp = "Cost Up",
  costDown = "Cost Down",
}

type ModeKey = keyof typeof Mode;

interface IState extends IDemoState {
  mode: Mode;
  locked: string[];
  costs: { [key: string]: number | undefined };
}

class StrictDemo extends Demo<IState> {
  protected title = "Strict Demo";

  protected getDefaultState() {
    return { tiles: this.newDemo(), mode: Mode.lock, locked: [], costs: {} };
  }

  protected renderHeader() {
    return <Row>
      <Col>
        <Form>
      <Form.Group>
        <Form.Label>Click tiles to</Form.Label>
            <Form.Select value={this.state.mode.toString()} onChange={(e) => this.setState({ mode: e.currentTarget.value as Mode })}>
              {Object.getOwnPropertyNames(Mode).map((key) => <option key={key} value={key}>{Mode[key as ModeKey]}</option>)}
            </Form.Select>
      </Form.Group>
        </Form>
      </Col></Row>;
  }

  protected renderTileContent(tile: ITile) {
    const classes = [];
    if (this.state.locked.includes(tile.id)) {
      classes.push("locked");
    } else {
      const cost = this.state.costs[tile.id] || 1;
      classes.push(`cost-${cost}`);
    }
    return <div className={classes.join(" ")}>
      <div>{tile.title}</div>
    </div>;
  }

  protected canExchange = (a: string, b?: string): boolean | number => {
    if (this.state.locked.includes(a)) {
      return false;
    }
    if (b === undefined) {
      return true;
    }
    if (this.state.locked.includes(b)) {
      return false;
    }
    const aIndex = this.getTileIndexById(a);
    const bIndex = this.getTileIndexById(b);
    const aRow = Math.floor(aIndex / 4);
    const aCol = aIndex % 4
    const bRow = Math.floor(bIndex / 4);
    const bCol = bIndex % 4
    const adjacent = (aRow === bRow && Math.abs(aCol - bCol) === 1)
      || (aCol === bCol && Math.abs(aRow - bRow) === 1);
    if (!adjacent) {
      return false;
    }
    return this.state.costs[b] || true;
  }

  protected tap = (key: string) => {
    console.log(`tap: ${key}`);
    this.setState((state) => {
      const { mode, locked, costs } = state;
      if (mode === Mode.lock) {
        const i = locked.indexOf(key);
        if (i >= 0) {
          locked.splice(i, 1);
        } else {
          locked.push(key);
        }
      } else {
        let cost = costs[key];
        const delta = mode === Mode.costDown ? -1 : 1;
        cost = (cost || 1) + delta;
        if (cost < 2) {
          cost = 5;
        } else if (cost > 5) {
          cost = 1;
        }
        costs[key] = cost;
      }
      return { costs, locked };
    });
  }
}

export default StrictDemo;
