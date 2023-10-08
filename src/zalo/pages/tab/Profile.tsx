import React from "react";
import NavbarTop from "@components/navbar/top/NavbarTop";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "@shared/text/Text";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const listComponent = [
    {
      name: "Products",
      href: "/components/products",
    },
    {
      name: "Category",
      href: "/components/categories",
    },
  ];

  return (
    <div className="px-3">
      <NavbarTop />
      {listComponent.map((item, index) => (
        <div key={index} onClick={() => navigate(item.href)} className="py-1">
          <Card className="p-3">
            <div className="d-flex justify-content-between align-items-center">
            <Text className="text-5-medium color-base">
              {item.name}
            </Text>
            <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
            </div>
            
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Profile;
