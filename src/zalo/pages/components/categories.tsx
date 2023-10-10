import Avatar from "@shared/Avatar";
import Text from "@shared/text/Text";
import React from "react";
import { Col } from "react-bootstrap";
import { useLocation } from "@atom/location/useLocation";
import { useParams } from "react-router-dom";

function Categories() {
  const { location } = useLocation();
  const { categoryLayout } = useParams();

  const listCategoryScroll = (
    <div className="py-2 mt-5">
      <Text className="text-4-medium text-black ms-n1">
        Category List Slide
      </Text>
      <div className="scrollbar d-flex mt-3 hide-scrollbar">
        {location.map((item, index) => (
          <Col
            className={index === location?.length - 1 ? "" : "mr-4"}
            key={index}
          >
            <div className="list-category">
              <div style={{}} className="rounded-pill border">
                <Text className="text-5-medium mt-1 text-center p-2">
                  {item.name.length > 9
                    ? `${item.name.slice(0, 9)}..`
                    : item.name}
                </Text>
              </div>
            </div>
          </Col>
        ))}
      </div>
    </div>
  );

  const listCategoryImgScroll = (
    <div className="py-2">
      <Text className="text-4-medium text-black ms-n1">
        Category Image List Slide
      </Text>
      <div className="scrollbar d-flex mt-3 hide-scrollbar">
        {location.map((item, index) => (
          <Col
            className={index === location?.length - 1 ? "" : "mr-4"}
            key={index}
          >
            <div className="list-category">
              <Avatar src={item.image} className="img-category ms-2" />
              <Text className="text-5-medium mt-1 text-center">
                {item.name.length > 9
                  ? `${item.name.slice(0, 9)}..`
                  : item.name}
              </Text>
            </div>
          </Col>
        ))}
      </div>
      {listCategoryScroll}
    </div>
  );

  return (
    <div className="px-4 mt-2">
      {categoryLayout == "category-list-scroll" && listCategoryImgScroll}
    </div>
  );
}

export default Categories;
