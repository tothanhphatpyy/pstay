import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartNotification from '@components/navbar/top/CartNotification';
import NotificationDropdown from '@components/navbar/top/NotificationDropdown';
import ProfileDropdown from '@components/navbar/top/ProfileDropdown';
import AppContext from '@context/Context';
import React, { useContext, useState } from 'react';
import { Nav, OverlayTrigger, Tooltip, NavDropdown } from 'react-bootstrap';
import NineDotMenu from './NineDotMenu';
import { handleLocale, localeDefault } from '@helpers/config/locale';

const TopNavRightSideNavItem = () => {
  const {
    config: { isDark, isRTL },
    setConfig
  } = useContext(AppContext);
  const [locale, setLocale] = useState(localeDefault());
  return (
    <Nav
      navbar
      className="navbar-nav-icons ms-auto flex-row align-items-center"
      as="ul"
    >
      <NavDropdown title={`${locale}`} id="navbarScrollingDropdown">
        <div className='py-2 bg-light rounded-3'>
          <NavDropdown.Item onClick={() => {handleLocale('vi'); setLocale('Tiếng Việt')}}>Tiếng Việt</NavDropdown.Item>
          <NavDropdown.Item onClick={() => {handleLocale('en'); setLocale('English')}}>English</NavDropdown.Item>
        </div>
      </NavDropdown>
      <Nav.Item as={'li'}>
        <Nav.Link
          className="px-2 theme-control-toggle"
          onClick={() => setConfig('isDark', !isDark)}
        >
          <OverlayTrigger
            key="left"
            placement={isRTL ? 'bottom' : 'left'}
            overlay={
              <Tooltip style={{ position: 'fixed' }} id="ThemeColor">
                {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              </Tooltip>
            }
          >
            <div className="theme-control-toggle-label">
              <FontAwesomeIcon
                icon={isDark ? 'sun' : 'moon'}
                className="fs-0"
              />
            </div>
          </OverlayTrigger>
        </Nav.Link>
      </Nav.Item>

      <CartNotification />
      <NotificationDropdown />
      <NineDotMenu />
      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
