import React, { forwardRef } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ProfileUser = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="profile" ref={ref}>
      <Card.Body>
        <Row>
          <Col lg={6}>
            <h5 className="mb-0">Hồ sơ</h5>
          </Col>
          
          <Col lg={6}>
            <h5 className="mb-0">Báo cáo</h5>
          </Col>
        </Row>
        <hr className="my-4" />
      </Card.Body>
    </Card>
  );
});

export default ProfileUser;
