var router = require('express').Router()

let axios = require('axios')

var api = axios.default.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=',
  timeout: 3000,
  withCredentials: true
})

router.get('/api/locations/:query', (req, res) => {
  api.get('' + req.params.query + '&key=AIzaSyCb7mDvm7G1Aa7Pu3LklOArn99tbDJZj00')
    .then(place => {
      place
      res.status(200).send(place.data)
    })
})

module.exports = {
  router
}
