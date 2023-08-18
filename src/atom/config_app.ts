import { useRequest } from "ahooks";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const CONFIG_STATE = atom({
  key: "CONFIG_STATE", // unique ID (with respect to other atoms/selectors)
  default: {
    version: "4.2.0",
    navbarBreakPoint: "xl", // Vertical navbar breakpoint
    topNavbarBreakpoint: "lg",
    isFluid: true,
    isRTL: false,
    isDark: localStorage.getItem("isDark") ?? true,
    navbarPosition: "vertical",
    disabledNavbarPosition: [],
    isNavbarVerticalCollapsed: false,
    navbarStyle: "transparent",
    currency: "$",
    showBurgerMenu: false,
    showSettingPanel: false,
    navbarCollapsed: false
  },
});
export const useConfigState = () => useRecoilState(CONFIG_STATE);

export const useConfigValue = () => useRecoilValue(CONFIG_STATE);

export const useConfigSetValue = () => useSetRecoilState(CONFIG_STATE);
