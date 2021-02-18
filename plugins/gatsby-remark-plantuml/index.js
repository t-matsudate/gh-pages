const remark = require('remark')
const plantuml = require('@akebifiky/remark-simple-plantuml')

module.exports = ({ markdownAST }) => {
  return remark()
    .use(plantuml)
    .runSync(markdownAST)
}
