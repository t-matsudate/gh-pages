import React, {useContext} from 'react';
import {useStaticQuery, Link as GatsbyLink} from 'gatsby';
import Reach, {Link as ReachLink} from '@gatsbyjs/reach-router';
import MenuBarContext, {MenuBarSwitcher} from 'contexts/MenuBarContext';
import MenuButton from 'components/MenuButton';
import Toc from 'components/Toc';

interface MenuProps extends MenuBarSwitcher {
  toc: Array<Toc>;
}

export default (props: MenuProps): React.FC => {
  let context: boolean = useContext(MenuBarContext);
  let tocs: Array<React.ReactElement> = props.toc.map(toc => <li key={'section-' + toc.key}><ReachLink to={toc.to}>{toc.text}</ReachLink></li>);
  let sections: Maybe<React.ReactElement>;

  if (tocs.length > 0) {
    sections = <ol id="sections">{tocs}</ol>;
  } else {
    sections = null;
  }

  let menu: Maybe<React.ReactElement>;

  if (context) {
    menu = (
      <div id="menu">
      <MenuButton menuBarSwitcher={props.menuBarSwitcher}/>
      <ol id="menu-list">
      <li key="index"><GatsbyLink to="/" activeClassName="here" partiallyActive={true}>プロフィール</GatsbyLink></li>
      <li key="repositories"><GatsbyLink to="/repositories" activeClassName="here" partiallyActive={true}>リポジトリ</GatsbyLink></li>
      <li key="articles"><GatsbyLink to="/articles" activeClassName="here" partiallyActive={true}>ブログ</GatsbyLink></li>
      </ol>
      {sections}
      </div>
    );
  } else {
    menu = null;
  }

  return menu;
};
