import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../Home/Cards/index";
import MemmoryUsage from "../Home/MemoryUsage/Index";
import Processes from "./Processes/Index";
import Latency from "./Latency/Index";

const Home = () => (
  <>
    <Container fluid>
      <Cards />
      <Row>
        <Col xs={12} md={8} lg={8}>
          <MemmoryUsage className="custom-Card" height="150px" width="300px" />
        </Col>
        <Col xs={12} md={4} lg={4}>
          <Row className="custom-Card">
            <Col xs={8} md={8} lg={8}>
              <Processes/>
            </Col>
            <Col xs={4} md={4} lg={4}>
              <h4 className="text-secondary">Processes</h4>
              <h4 className="text-secondary">1590</h4>
            </Col>
          </Row>

          <Latency className="custom-Card"/>
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;
