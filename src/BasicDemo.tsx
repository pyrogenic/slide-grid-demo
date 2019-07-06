import React from 'react';
import SlideGrid from '@pyrogenic/slide-grid/lib/SlideGrid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Demo from './Demo';

class BasicDemo extends Demo {
  protected title = "Basic Demo";

  constructor(props: {}) {
    super(props);
    const tiles: string[] = [];//["_"];
    for (let i = 1; i <= 16; ++i) {
      tiles.push(i.toString());
    }
    this.state = { tiles };
  }

  public render() {
    return <Container>
        <h1>
          <SlideGridLink/>
        </h1>
        <h2>Overview</h2>
        <p>
          <SlideGridLink/> is a hybrid React/DOM component that supports lightweight, touch-aware reordering of children.
        </p>
        <h2>Demos</h2>
      <Row>
        <Col/>
        <Col md={"auto"}>
          <h3>Basic Grid</h3>
          <SlideGrid exchange={this.exchange}>
            {this.state.tiles.map((tile) => <div className="tile" key={tile} id={tile}>
              <div>{tile}</div>
            </div>)}
          </SlideGrid>
        </Col>
        <Col/>
      </Row>
    </Container>;
  }
}

export default BasicDemo;
