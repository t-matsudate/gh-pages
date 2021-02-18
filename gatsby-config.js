const path = require('path')
const process = require('process')
const test = require(path.resolve('src', 'components', 'Test'))

let config = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass")
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
        src: path.join(__dirname, 'src'),
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
