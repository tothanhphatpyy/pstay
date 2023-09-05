import React from "react";
import { Image } from "react-bootstrap";
import logo from "@assets/images/logo/logo_app.png";
import Flex from "@shared/Flex";
import LocationCategory from "@zalo/components/category/LocationCategory";

const Home = () => {
  return (
    <>
      <Flex alignItems={'center'} className='container'>
        <Image src={logo} height={60} width={65} className="object-fit-contain" />
        <span className="heading-4-medium text-color-primary text-primary-cl">PSTAY</span>
      </Flex>
      <LocationCategory />
    </>
  );
};

export default Home;
