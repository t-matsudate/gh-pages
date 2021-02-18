const remark = require('remark')
const images = require('remark-images')

module.exports = ({ markdownAST }, pluginOptions) => {
  return remark()
    .use(images)
    .runSync(markdownAST)
}
