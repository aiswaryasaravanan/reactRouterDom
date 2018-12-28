import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

class Layouts extends Component {
  render() {
    return (
        <Container>
        <br /><br/>
        <Row>
            <Col md="8">
                <h4>Row1 Cloumn1</h4>
                <p>Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you’d update the $grid-breakpoints and $container-max-widths to something like this:</p>
            </Col>
            <Col md="4">
                <h4>Row1Column2</h4>
                <p>Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you’d update the $grid-breakpoints and $container-max-widths to something like this:</p>
            </Col>
        </Row>

        <br/>
        <Row>
            <Col md="4">
                <h4>Row2Column1</h4>
                <p>Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you’d update the $grid-breakpoints and $container-max-widths to something like this:</p>
            </Col>
            <Col md="4">
                <h4>Row2Column2</h4>
                <p>Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you’d update the $grid-breakpoints and $container-max-widths to something like this:</p>
            </Col>
            <Col md="4">
                <h4>Row2Column3</h4>
                <p>Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you’d update the $grid-breakpoints and $container-max-widths to something like this:</p>
            </Col>
        </Row>
     </Container>
    );
  }
}

export default Layouts;
