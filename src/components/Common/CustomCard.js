import React from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const CustomCard = (props) => {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0, margin: 10 }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
            <Row>
                <Col>
                <i className={`fa fa-${props.cardIcon} text-${props.iconColor}`} style={{fontSize: 40, margin: '7%'}} aria-hidden="true"></i></Col>
                <Col>
                <Card.Title className="mb-2 text-secondary">
            {props.cardName}
          </Card.Title>
          <div className="font-weight-bold" style={{fontSize: 30}}>{props.cardCount}</div></Col>
            </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomCard;
