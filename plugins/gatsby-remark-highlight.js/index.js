const remark = require('remark')
const parse = require('remark-parse')
const highlight = require('remark-highlight.js')
const html = require('remark-html')

module.exports = ({ markdownAST }, { include, exclude, prefix }) => {
  return remark()
    .use(parse)
    .use(highlight, { include, exclude, prefix })
    .use(html)
    .runSync(markdownAST)
}
