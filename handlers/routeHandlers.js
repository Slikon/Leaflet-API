const { makeAxiosRequest } = require('../clients/axiosClient');
const { transformRouteResponse } = require('./utils');

async function routeHandler(request, response, next) {
  const rawResponse = await makeAxiosRequest(request.body)
  const formattedRes = transformRouteResponse(rawResponse);

  response.send(formattedRes)
  return next();
}

module.exports = { routeHandler }