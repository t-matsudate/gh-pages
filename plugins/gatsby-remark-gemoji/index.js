const remark = require('remark')
const parse = require('remark-parse')
const gemoji = require('remark-gemoji')
const stringify = require('remark-stringify')

module.exports = ({ markdownAST }, pluginOptions) => {
  return remark()
    .use(parse)
    .use(gemoji)
    .use(stringify)
    .runSync(markdownAST)
}
