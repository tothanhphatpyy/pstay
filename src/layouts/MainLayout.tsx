import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import NavbarTop from '@components/navbar/top/NavbarTop';
import NavbarVertical from '@components/navbar/vertical/NavbarVertical';
import Footer from '@components/footer/Footer';
import ProductProvider from '@components/app/e-commerce/ProductProvider';
import CourseProvider from '@components/app/e-learning/CourseProvider';
import { useConfig } from '@atom/config/useConfig';

const MainLayout = () => {
  const { hash, pathname } = useLocation();
  const isKanban = pathname.includes('kanban');
  // const isChat = pathname.includes('chat');

  const { config } = useConfig();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={config.isFluid ? 'container-fluid' : 'container'}>
      <ProductProvider>
          <div className={classNames('content', { 'pb-0': isKanban })}>
            <NavbarTop />
          </div>
      </ProductProvider>
    </div>
  );
};

export default MainLayout;
