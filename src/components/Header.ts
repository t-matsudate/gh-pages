import React from 'react';
import MenuButton from 'components/MenuButton';
import {MenuBarSwitcher} from 'contexts/MenuBarContext';

export default (props: MenuBarSwitcher): React.FC<MenuBarSwitcher> => {
  return (
    <div id="header">
    <header>
    <MenuButton menuBarSwitcher={props.menuBarSwitcher} />
    <h1 id="app-title">Title</h1>
    </header>
    </div>
  );
};
