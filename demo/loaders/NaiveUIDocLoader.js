const convertMd2Doc = require('./convertMd2Doc')

module.exports = function (content) {
  const env = process.env.NODE_ENV
  return convertMd2Doc(content, env)
}
