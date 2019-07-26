import * as React from 'react';
import Demo, {ITile} from './Demo';

class StrictDemo extends Demo {
  protected title = "Strict Demo";
  
  protected renderTileContent(tile: ITile) {
    return <div>{tile.title}</div>;
  }

  protected canExchange = (a: string, b?: string): boolean => {
    if (b === undefined) {
      return true;
    }
    const aIndex = this.getTileIndexById(a);
    const bIndex = this.getTileIndexById(b);
    const aRow = Math.floor(aIndex / 4);
    const aCol = aIndex % 4
    const bRow = Math.floor(bIndex / 4);
    const bCol = bIndex % 4
    return (aRow === bRow && Math.abs(aCol - bCol) === 1)
      || (aCol === bCol && Math.abs(aRow - bRow) === 1);
  }
}

export default StrictDemo;
