const remark = require('remark')
const github = require('remark-github')

module.exports = ({ markdownAST }, { repository, mentionStrong }) => {
  return remark()
    .use(github, { repository, mentionStrong })
    .runSync(markdownAST)
}
