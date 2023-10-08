import { useLocation } from "@atom/location/useLocation";
import Avatar from "@shared/Avatar";
import Flex from "@shared/Flex";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import Text from "@shared/text/Text";

const LocationCategory = () => {
  const { location } = useLocation();
  return (
   
    <div className="scrollbar px-3 d-flex">
      {location.map((item, index) => (
        <Col className={index === (location?.length -1) ? '' : 'mr-4'} key={index}>
          <div className="list-category">
            <Avatar src={item.image} className="img-category ms-2" />
            <Text className="text-5-medium mt-1">{item.name.length > 9 ? `${item.name.slice(0, 9)}..` : item.name}</Text>
          </div>
        </Col>
      ))}
    </div>
/*     <Container>
  <Row xs={2} md={4} lg={12} className="p-2">
    <Col className="p-2 bg-300 border border-400">1 of 2</Col>
    <Col className="p-2 bg-300 border border-400">2 of 2</Col>
    <Col className="p-2 bg-300 border border-400">2 of 2</Col>
    <Col className="p-2 bg-300 border border-400">2 of 2</Col>
    <Col className="p-2 bg-300 border border-400">2 of 2</Col>
    
  </Row>
  <Row xs={1} md={2} className="p-2">
    <Col className="p-2 bg-300 border border-400">1 of 3</Col>
    <Col className="p-2 bg-300 border border-400">2 of 3</Col>
    <Col className="p-2 bg-300 border border-400">3 of 3</Col>
  </Row>
  <Row xs="auto" className="p-2">
    <Col className="p-2 bg-300 border border-400">1 of 3</Col>
    <Col className="p-2 bg-300 border border-400">2 of 3</Col>
    <Col className="p-2 bg-300 border border-400">3 of 3</Col>
  </Row>
</Container> */
  );
};

export default LocationCategory;


