import React from 'react';
import { ISlideGridTuning, DEFAULT_TUNING } from '@pyrogenic/slide-grid/lib/SlideGrid';
import Container from 'react-bootstrap/Container';
import './App.css';
import BasicDemo from './BasicDemo';
import StrictDemo from './StrictDemo';
import FifteenGame from './FifteenGame';
import SlideGridTuningComponent from './SlideGridTuningComponent';

function SlideGridLink() {
  return <a href="https://github.com/pyrogenic/slide-grid"><code>slide-grid</code></a>;
}

class App extends React.Component<{}, { tuning: ISlideGridTuning }> {
  constructor(props: {}) {
    super(props);
    this.state = { tuning: DEFAULT_TUNING };
  }
  public render() {
    const {tuning} = this.state;
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
            return { tuning: {...state.tuning, ...tuning} } as any;
        });
      }} />
      <h2>Demos</h2>
      <BasicDemo tuning={tuning}/>
      <StrictDemo tuning={tuning}/>
      <FifteenGame tuning={tuning}/>
    </Container>;
  }
}

export default App;
