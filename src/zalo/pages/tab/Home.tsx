import React from "react";
import { Image } from "react-bootstrap";
import logo from "@assets/images/logo/logo_app.png";
import Flex from "@shared/Flex";
import LocationCategory from "@zalo/pages/home/LocationCategory";
import TypeRoom from "../home/TypeRoom";

const Home = () => {
  return (
    <>
      <Flex alignItems={'center'} className='container'>
        <Image src={logo} height={60} width={65} className="object-fit-contain" />
        <span className="heading-4-medium text-color-primary text-primary-cl">Component</span>
      </Flex>
      <LocationCategory />
      <TypeRoom />
    </>
  );
};

export default Home;
