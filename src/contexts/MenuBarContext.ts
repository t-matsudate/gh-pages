import React from 'react';

export interface MenuBarSwitcher {
  menuBarSwitcher: () => void;
};
const MenuBarContext: React.Context<boolean> = React.createContext(false);
export default MenuBarContext;
