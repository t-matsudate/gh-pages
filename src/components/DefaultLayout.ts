import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Site} from 'graphqlTypes';
import MenuBarContext from 'contexts/MenuBarContext';
import {Helmet} from 'react-helmet';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Main from 'components/Main';
import Toc from 'components/Toc';
import 'styles/defaultLayout.scss';

interface DefaultLayoutProps {
  page: string;
  toc: Array<Toc>;
  children: React.ReactNode[];
}

export default (props: DefaultLayoutProps): React.FC => {
  const data: Maybe<Site> = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          charset,
          author,
          description,
          generator,
          keywords,
          themeColor,
          creator,
          publisher,
          viewport {
            width,
            initialScale
          },
          htmlAttributes {
            prefix
          },
          openGraphs {
            property,
            content
          },
          XUACompatible
        }
      }
    }`);
  const {
    title,
    charset,
    author,
    description,
    generator,
    keywords,
    themeColor,
    creator,
    publisher,
    viewport,
    htmlAttributes,
    openGraphs,
    XUACompatible
  } = data.site.siteMetadata;
  const openGraphElements = openGraphs.map(({property, content}) => <meta property={property} content={content}/>);
  const [isMenuBarOpened, switchMenuBar]: [boolean, (boolean) => void] = React.useState(false);

  return (
    <MenuBarContext.Provider value={isMenuBarOpened}>
    <div id="grids">
    <Helmet>
    <html prefix={htmlAttributes.prefix} />
    <title>{title}</title>
    <meta charset={charset}/>
    <meta name="author" content={author}/>
    <meta name="description" content={description}/>
    <meta name="generator" content={generator}/>
    <meta name="keywords" content={keywords.join()}/>
    <meta name="theme-color" content={themeColor}/>
    <meta name="creator" content={creator}/>
    <meta name="publisher" content={publisher}/>
    <meta name="viewport" content={'width=' + viewport.width + ',' + 'initial-scale=' + viewport.initialScale}/>
    {openGraphElements}
    <meta httpEquiv="X-UA-Compatible" content={XUACompatible}/>
    </Helmet>
    <Header menuBarSwitcher={() => switchMenuBar(!isMenuBarOpened)}/>
    <Menu menuBarSwitcher={() => switchMenuBar(!isMenuBarOpened)} toc={props.toc}/>
    <Main>
    <article id={props.page}>
    {props.children}
    </article>
    </Main>
    </div>
    </MenuBarContext.Provider>
  );
};
