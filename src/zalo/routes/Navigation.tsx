import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const tabs = {
  "/": {
    label: "Trang chủ",
    icon: "calendar-alt",
  },
  "/notification": {
    label: "Thông báo",
    icon: "calendar-alt",
  },
  "/cart": {
    label: "Giỏ hàng",
    icon: "calendar-alt",
    activeIcon: "calendar-alt",
  },
  "/profile": {
    label: "Cá nhân",
    icon: "calendar-alt",
  },
};

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/category"];

const BottomNavigation = () => {
  const location = useLocation();
  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

  if (noBottomNav) {
    return <></>;
  }

  return (
    <nav className={classNames("bottom-navigation")}>
      {Object.entries(tabs).map(([path, tab]) => (
        <Link
          key={path}
          to={path}
          className={classNames("tab", { active: location.pathname === path })}
        >
          <FontAwesomeIcon icon={tab.icon} />
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
