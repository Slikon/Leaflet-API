const axios = require('axios');

async function makeAxiosRequest (body) {
  
  const httpOrsApi = axios.create({
    headers: {
      common: {
        Accept: 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
        Authorization: '5b3ce3597851110001cf6248a8431ce082564cb78681b16409af30f1'
      }
    }
  })

  const carType = body.carType === 'heavy' ? "hgv" : "car";
  let url = `https://api.openrouteservice.org/v2/directions/driving-${carType}/geojson`

  const payload = {
    coordinates: body.coordinates,
    geometry_simplify: body.fragileCargo,
    maximum_speed: body.maxSpeed
  }

  return httpOrsApi.post(url, payload).catch(err => {
    console.log(err.message)
  })
}

module.exports = { makeAxiosRequest }