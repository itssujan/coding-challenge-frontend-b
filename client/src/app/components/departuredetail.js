import React from "react";
import { render } from "react-dom";

import { Panel, Row, Col } from "react-bootstrap";
import OperatorLogo from "./operatorlogo";

class DepartureDetail extends React.Component {
  render() {
    return (
      <Panel>
        <Panel.Body>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <OperatorLogo />
            </Col>
            <Col xs={6} md={4}>
              <code>&lt;{"Col xs={6} md={4}"} /&gt;</code>
            </Col>
            <Col xsHidden md={4}>
              <code>&lt;{"Col xsHidden md={4}"} /&gt;</code>
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    );
  }
}

export default DepartureDetail;
