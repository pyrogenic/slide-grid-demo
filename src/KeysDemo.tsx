import SlideGrid from '@pyrogenic/slide-grid/lib/SlideGrid';
import range from 'lodash/range';
import * as React from 'react';
import Demo, { IDemoState, ITile } from './Demo';

class KeysDemo extends Demo {
  protected title = "Keys Demo";

  protected getDefaultState(): Readonly<IDemoState> {
    return { tiles: this.newDemo() };
  }

  protected renderDemo() {
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
    </>;
  }

  protected renderTileContent(tile: ITile) {
    return <div>{tile.title}</div>;
  }
}

export default KeysDemo;
