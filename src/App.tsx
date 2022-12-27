import { DEFAULT_TUNING, ISlideGridTuning } from '@pyrogenic/slide-grid/lib/SlideGrid';
import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import BasicDemo from './BasicDemo';
import FifteenGame from './FifteenGame';
import KeysDemo from './KeysDemo';
import SlideGridTuningComponent from './SlideGridTuningComponent';
import SmearDemo from './SmearDemo';
import StrictDemo from './StrictDemo';

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
      <KeysDemo tuning={tuning}/>
      <SmearDemo tuning={tuning} />
      <StrictDemo tuning={tuning}/>
      <FifteenGame tuning={tuning}/>
    </Container>;
  }
}

export default App;
