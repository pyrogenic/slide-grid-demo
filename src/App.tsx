import React from 'react';
import SlideGrid, { ISlideGridTuning } from '@pyrogenic/slide-grid/lib/SlideGrid';
import Container from 'react-bootstrap/Container';
import './App.css';
import BasicDemo from './BasicDemo';
import FifteenGame from './FifteenGame';
import SlideGridTuningComponent from './SlideGridTuningComponent';
import { DEFAULT_TUNING } from '@pyrogenic/slide-grid/lib/SlideGrid';

function SlideGridLink() {
  return <a href="https://github.com/pyrogenic/slide-grid"><code>slide-grid</code></a>;
}

class App extends React.Component<{}, { tuning: ISlideGridTuning }> {
  constructor(props: {}) {
    super(props);
    this.state = { tuning: DEFAULT_TUNING };
  }
  public render() {
    return <Container>
      <h1>
        <SlideGridLink />
      </h1>
      <h2>Overview</h2>
      <p>
        <SlideGridLink /> is a hybrid React/DOM component that supports lightweight, touch-aware reordering of children.
      </p>
      <h2>Tuning</h2>
      <SlideGridTuningComponent tuning={this.state.tuning}
        change={(tuning) => {
          this.setState((state) => {
            return { ...state.tuning, ...tuning } as any;
        });
      }} />
      <h2>Demos</h2>
      <BasicDemo />
      <FifteenGame />
    </Container>;
  }
}

export default App;
