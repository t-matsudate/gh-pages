const path = require('path')
const process = require('process')

let graphqlPlugin = null

if (process.env.NODE_ENV === 'production') {
  graphqlPlugin = {
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
}

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `rtmp-reports`,
        path: `${__dirname}/src/articles/rtmp-reports`
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
            resolve: "@akebifiky/remark-simple-plantuml",
            options: {
              baseUrl: "https://www.plantuml.com/plantuml/svg"
            }
          },
          "@fec/remark-a11y-emoji",
          {
            resolve: "remark-attr",
            options: {}
          },
          {
            resolve: "remark-autolink-headings",
            options: {}
          },
          "remark-breaks",
          {
            resolve: "remark-code-extra",
            options: {}
          },
          "remark-code-frontmatter",
          {
            resolve: "remark-code-import/gatsby",
            options: {}
          },
          {
            resolve: "remark-emoji",
            options: {}
          },
          {
            resolve: "remark-footnotes",
            options: {
              inlineNotes: true
            }
          },
          {
            resolve: "remark-frontmatter",
            options: {}
          },
          "remark-gemoji",
          {
            resolve: "remark-gfm",
            options: {}
          },
          {
            resolve: "remark-github",
            options: {}
          },
          "remark-heading-id",
          {
            resolve: "remark-highlight.js",
            options: {}
          },
          {
            resolve: "remark-html",
            options: {}
          },
          {
            resolve: "remark-html-katex",
            options: {}
          },
          "remark-images",
          "remark-inline-links",
          "remark-numbered-footnote-labels",
          {
            resolve: "remark-oembed",
            options: {}
          },
          {
            resolve: "remark-react",
            options: {}
          },
          {
            resolve: "remark-rehype",
            options: {}
          },
          {
            resolve: "remark-toc",
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
    },
    graphqlPlugin
  ]
}
