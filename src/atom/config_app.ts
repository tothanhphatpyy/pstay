import { useRequest } from "ahooks";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

interface ConfigState {
  version: string;
  navbarBreakPoint: string;
  topNavbarBreakpoint: string;
  isFluid: boolean;
  isRTL: boolean;
  isDark: string | null;
  navbarPosition: string;
  disabledNavbarPosition: string[];
  isNavbarVerticalCollapsed: boolean;
  navbarStyle: string;
  currency: string;
  showBurgerMenu: boolean;
  showSettingPanel: boolean;
  navbarCollapsed: boolean;
}

const CONFIG_STATE = atom<ConfigState>({
  key: "CONFIG_STATE", // unique ID (with respect to other atoms/selectors)
  default: {
    version: "4.2.0",
    navbarBreakPoint: "xl", // Vertical navbar breakpoint
    topNavbarBreakpoint: "lg",
    isFluid: true,
    isRTL: false,
    isDark : JSON.parse(localStorage.getItem("isDark")) ?? false,
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
