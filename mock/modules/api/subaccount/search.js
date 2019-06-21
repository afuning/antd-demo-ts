module.exports = (req, res) => {
  res.send({
    code: 0,
    msg: 'ok',
    data: {
      list: [
        {
          name: '阿福宁',
          id: 1111
        },
        {
          name: '阿福宁',
          id: 111
        }
      ],
      pagination: {
        current: 1,
        pageSize: 1,
        total: 10
      }
    }
  })
}