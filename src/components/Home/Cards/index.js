import React from "react";
// import { Row  } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import CustomCard from "../../Common/CustomCard";

export default function Cards() {
  return (
    <Row xs={1} md={3} lg={4}>
      <Col>
        <CustomCard
          cardName="Projects"
          cardIcon="location-arrow"
          cardCount="205"
          iconColor="success"
        />
      </Col>
      <Col>
        <CustomCard
          cardName="Mails"
          cardIcon="envelope-o"
          cardCount="325"
          iconColor="warning"
        />
      </Col>
      <Col>
        <CustomCard
          cardName="Tickets"
          cardIcon="book"
          cardCount="379"
          iconColor="info"
        />
      </Col>
      <Col>
        <CustomCard
          cardName="Customers"
          cardIcon="user"
          cardCount="5984"
          iconColor="danger"
        />
      </Col>
    </Row>
  );
}
