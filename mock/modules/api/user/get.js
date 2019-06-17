module.exports = (req, res) => {
  res.send({
    code: 0,
    msg: 'ok',
    data: {
      name: '阿福宁',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
  })
}