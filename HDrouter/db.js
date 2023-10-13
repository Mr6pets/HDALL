  const mock =require('mockjs');
const Random = mock.Random
  

module.export = () => {
  
  let data = { article: [] }
  for (let i = 0; i < 10 i++) {
    data.article.push({
      id: i,
      title:Random.cword(10.20)
    })
  }

  return data

}
