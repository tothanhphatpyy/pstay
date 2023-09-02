import { useLocation } from "@atom/location/useLocation";
import Avatar from "@shared/Avatar";
import Flex from "@shared/Flex";
import React from "react";
import { Col } from "react-bootstrap";
import "./styles.scss";

const LocationCategory = () => {
  const { location } = useLocation();
  return (
    // <div className="scrollbar ps-3 d-flex">
    //     {location.map((item, index) => (
    //       <Col className="mr-4" key={index}>
    //         <Avatar src={item.image} className="img-category" />
    //         <div className="text-5-medium">{item.name}</div>
    //       </Col>
    //     ))}
    //   </div>
    <div className="scrollbar px-3 d-flex">
      {location.map((item, index) => (
        <Col className={index === (location?.length -1) ? '' : 'mr-4'} key={index}>
          <div className="list-category">
            <Avatar src={item.image} className="img-category ms-2" />
            <div className="text-5-medium">{item.name.length > 9 ? `${item.name.slice(0, 9)}..` : item.name}</div>
          </div>
        </Col>
      ))}
    </div>
  );
};

export default LocationCategory;
