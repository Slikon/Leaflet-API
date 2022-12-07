function transformRouteResponse(rawResponse) {
  const coordinates = rawResponse &&
    rawResponse.data &&
    rawResponse.data.features &&
    rawResponse.data.features[0] &&
    rawResponse.data.features[0].geometry &&
    rawResponse.data.features[0].geometry.coordinates &&
    rawResponse.data.features[0].geometry.coordinates[0]
    ? rawResponse.data.features[0].geometry.coordinates.map(pair => [pair[1], pair[0]])
    : [];
  const distance = rawResponse &&
    rawResponse.data &&
    rawResponse.data.features &&
    rawResponse.data.features[0] &&
    rawResponse.data.features[0].properties &&
    rawResponse.data.features[0].properties.summary &&
    rawResponse.data.features[0].properties.summary.distance || null;
  const duration = rawResponse &&
    rawResponse.data &&
    rawResponse.data.features &&
    rawResponse.data.features[0] &&
    rawResponse.data.features[0].properties &&
    rawResponse.data.features[0].properties.summary &&
    rawResponse.data.features[0].properties.summary.duration || null;
    
  return { coordinates, distance, duration };
}

module.exports = { transformRouteResponse };