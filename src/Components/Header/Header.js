import React from "react";
import { Col, Row } from "../Grid";

const Header = props => (
  <div>
    <Row>
      <Col size="lg-3">
        <img alt={props.name}  style={{ width: 200, height: 100 }} src="./img/logo.png" className="img center-block" />
      </Col>
      <Col size="lg-4">
        <h2><strong>{props.message}</strong></h2>
      </Col>
      <Col size="lg-2">
        <h2><strong>Score:</strong>  {props.score}</h2>
      </Col>
      <Col size="lg-3">
        <h2><strong>High Score:</strong> {props.hiscore}</h2>
      </Col>
    </Row>
    <Row>
      <Col size="lg-12">
        <p class="text-center">
          Click on a beach to play, but don't choose the same beach twice or you'll have to start again! Exercise your memory to hit 12/12!
        </p>
      </Col>
    </Row>
  </div>
);
export default Header;