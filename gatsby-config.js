const path = require('path')
const process = require('process')
const nodeSass = require('node-sass')

let config = {
  siteMetadata: {
    title: 'Title',
    charset: 'UTF-8',
    author: 'T. Matsudate.',
    description: 'Description',
    generator: 'Gatsby.js',
    keywords: [
      'github',
      'pages',
      'github pages',
      'react',
      'gatsby',
      'gatsby.js',
      'typescript',
      'matsudate',
      't.matsudate'
    ],
    themeColor: 'rgb(33,150,243)',
    creator: 'T. Matsudate.',
    publisher: 'T. Matsudate.',
    viewport: {
      width: 'device-width',
      initialScale: 1.0
    },
    htmlAttributes: {
      prefix: 'og: https://ogp.me/ns#'
    },
    openGraphs: [
      {
        property: 'title',
        content: 'Title'
      },
      {
        property: 'type',
        content: 'website'
      },
      {
        property: 'url',
        content: 'https://t-matsudate.github.io/'
      },
      {
        property: 'description',
        content: 'Description'
      },
      {
        property: 'locale',
        content: 'ja_JP'
      }
    ],
    XUACompatible: 'IE=edge',
    tableOfContents: {
      index: [
        {
          key: "profile",
          to: "#profile",
          text: "プロフィール"
        },
        {
          key: "repositories",
          to: "#repositories",
          text: "リポジトリ概観"
        },
        {
          key: "articles",
          to: "#articles",
          text: "ブログ概観"
        },
        {
          key: "tools",
          to: "#tools",
          text: "使用したツール"
        },
        {
          key: "reasons",
          to: "#reasons",
          text: "ツールを選んだ理由"
        },
        {
          key: "motivations",
          to: "#motivations",
          text: "サイトを作った動機"
        },
        {
          key: "goals",
          to: "#goals",
          text: "目標"
        },
        {
          key: "recent-states",
          to: "#recent-states",
          text: "最近の状態"
        },
        {
          key: "donation",
          to: "#donation",
          text: "寄付"
        },
      ]
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: nodeSass
      }
    },
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true
      }
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        graphqlTypes: path.join(__dirname, 'graphql-types.ts'),
        src: path.join(__dirname, 'src'),
        contexts: path.join(__dirname, 'src/contexts'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        templates: path.join(__dirname, 'src/templates'),
        styles: path.join(__dirname, 'src/styles')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {}
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {}
          },
          "gatsby-remark-graphviz",
          {
            resolve: "gatsby-remark-katex",
            options: {}
          },
          "gatsby-remark-inline-links",
          "gatsby-remark-gemoji",
          {
            resolve: "gatsby-remark-github",
            options: {}
          },
          "gatsby-remark-images",
          {
            resolve: "gatsby-remark-plantuml",
            options: {}
          },
          {
            resolve: "gatsby-remark-highlight.js",
            options: {}
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-styled-jsx`,
      options: {
        jsxPlugins: ["styled-jsx-plugin-sass"]
      }
    }
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      }
    }
  )
}

module.exports = config
