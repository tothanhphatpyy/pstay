import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tabs = {
  "/": {
    label: "Trang chủ",
    icon: "house",
  },
  "/favorite": {
    label: "Yêu thích",
    icon: "heart",
  },
  "/order": {
    label: "Đặt chỗ của tôi",
    icon: "calendar-days",
  },
  "/chat": {
    label: "Tin nhắn",
    icon: "message",
  },
  "/profile": {
    label: "Cá nhân",
    icon: "face-grin",
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
    <nav className="bottom-navigation dark__bg-1000 bg-light">
      {Object.entries(tabs).map(([path, tab]) => (
        <Link
          key={path}
          to={path}
          className={classNames("tab", { active: location.pathname === path })}
        >
          <FontAwesomeIcon icon={tab.icon as any} />
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
