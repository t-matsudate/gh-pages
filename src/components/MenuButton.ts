import React from 'react';
import MenuBarContext, {MenuBarSwitcher} from 'contexts/MenuBarContext';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default (props: MenuBarSwitcher): React.FC<MenuBarSwitcher> => {
  return (
    <div className="menu-button">
    <a onClick={props.menuBarSwitcher}><FontAwesomeIcon icon={faBars} size="2x" className="fa-bars"/></a>
    </div>
  );
};
