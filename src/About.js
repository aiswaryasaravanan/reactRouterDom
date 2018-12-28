import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { Container } from 'reactstrap';
import { Col } from 'reactstrap';

class About extends Component {
  render() {
    return (
          <Container>
          <Row>
                <Col>Lorem ipsum is placeholder text commonly used in the graphic, 
                    print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, 
                    print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, 
                    print, and publishing industries for previewing layouts and visual mockups.
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col>Lorem ipsum is placeholder text commonly used in the graphic, 
                    print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, 
                    print, and publishing industries for previewing layouts and visual mockups.
                </Col>
                <Col>Lorem ipsum is placeholder text commonly used in the graphic, 
                    print, and publishing industries for previewing layouts and visual mockups.
                </Col>
          </Row>
      </Container>
    );
  }
}

export default About;
