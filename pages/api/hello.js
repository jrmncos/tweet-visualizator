// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var Twit = require('twit')

var T = new Twit({
    consumer_key:         'pm8f9AozM1xZ8K4zxkEIGXIYK',
    consumer_secret:      'orNaulJgc2sF0Ttj1Zfg8EypmngEyrLX4XI8AzcEJPa3Vayskp',
    access_token:         '1295591170060451841-9tn1XkrYkFWwBlv1gMOns363Rl6Cx4',
    access_token_secret:  'nXUyJmiL6EQT7ZEmbHTxAH2CQqVGDS5avs1iNoz0gymZG',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })

function gotData(err, data, response){
    console.log(data)
}


export default (req, res) => {
  T.get('statuses/show', {id: req.query.id} , gotData)
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
