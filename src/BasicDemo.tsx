import * as React from 'react';
import Demo, {ITile} from './Demo';

class BasicDemo extends Demo {
  protected title = "Basic Demo";
  
  protected renderTileContent(tile: ITile) {
    return <div>{tile.title}</div>;
  }
}

export default BasicDemo;
