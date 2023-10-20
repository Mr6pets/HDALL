const Mock = require('mockjs');

const Random = Mock.Random
  
module.exports = () => {

  let data = { article: [] }

  for (let i = 0; i < 10; i++) {
    data.article.push({
      id: 1,
      title:Random.cword(10.20)
    })
  }

  return data

}
