export const version = '4.2.0';
export const navbarBreakPoint = 'xl'; // Vertical navbar breakpoint
export const topNavbarBreakpoint = 'lg';
export const settings = {
  isFluid: true,
  isRTL: false,
  isDark: localStorage.getItem('isDark') ?? true,
  navbarPosition: 'vertical',
  showBurgerMenu: false, // controls showing vertical nav on mobile
  currency: '$',
  isNavbarVerticalCollapsed: false, // toggle vertical navbar collapse
  navbarStyle: 'transparent'
};

export default { version, navbarBreakPoint, topNavbarBreakpoint, settings };
