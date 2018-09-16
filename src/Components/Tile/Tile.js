import React from "react";
import { Col, Row } from "../Grid";

const Tile = props => (
  <Row>
    {props.beaches.map(beaches => (
      <Col size="lg-3" key={beaches.key}>
        <img alt={props.name} src={"./img/" + beaches.img + ".jpg"}
          className="img"
          id={beaches.id}
          onClick={() => props.selectCard(beaches.id)}
        />
      </Col>
    ))}
  </Row>
);

export default Tile;