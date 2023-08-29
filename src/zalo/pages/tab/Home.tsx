import React from 'react'
import { Image } from 'react-bootstrap';
import logo from '@assets/images/logo/logo.png'
import Flex from '@shared/Flex';

const Home = () => {
  return (
    <div>
        <Flex alignContent={'center'} className="" >
            <Image src={logo} height={60} width={70} className='object-fit-cover' />
            <div className="text-4-medium text-color-primary">PSTAY</div>
        </Flex>
    </div>
  )
}

export default Home;