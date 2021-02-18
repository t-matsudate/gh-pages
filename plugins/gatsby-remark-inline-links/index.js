const remark = require('remark')
const inlineLinks = require('remark-inline-links')

module.exports = ({ markdownAST }, pluginOptions) => {
  return remark()
    .use(inlineLinks)
    .runSync(markdownAST)
}
