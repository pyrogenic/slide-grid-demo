import React from 'react';
import SlideGrid from '@pyrogenic/slide-grid/lib/SlideGrid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './App.css';
import BasicDemo from './BasicDemo';
import FifteenGame from './FifteenGame';

function SlideGridLink() {
  return <a href="https://github.com/pyrogenic/slide-grid"><code>slide-grid</code></a>;
}

class App extends React.Component {
  public render() {
    return <Container>
      <h1>
        <SlideGridLink />
      </h1>
      <h2>Overview</h2>
      <p>
        <SlideGridLink /> is a hybrid React/DOM component that supports lightweight, touch-aware reordering of children.
        </p>
      <h2>Demos</h2>
      <BasicDemo />
      <FifteenGame />
    </Container>;
  }
}

export default App;
