import * as React from 'react';
import Demo, {ITile, IDemoState} from './Demo';

class BasicDemo extends Demo {
  protected title = "Basic Demo";
  
  protected getDefaultState(): Readonly<IDemoState> {
    return { tiles: this.newDemo() };
  }
  
  protected renderTileContent(tile: ITile) {
    return <div>{tile.title}</div>;
  }
}

export default BasicDemo;
