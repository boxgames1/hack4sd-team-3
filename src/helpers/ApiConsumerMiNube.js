const MINUBE_ENDPOINT = "http://papi.minube.com:80/";
const API_KEY = "V8p7DUAN3G3mwh5H";
/* Funcion que ejecuta la request */
export function sendRequest(postData, url, requestType, callback) {
  let requestBody;
  /* Forma el cuerpo de la request segun el tipo */
  switch (requestType) {
    case "POST":
    case "PUT":
      requestBody = {
        method: requestType,
        headers: {
          Accept: "application/json"
        },
        body: JSON.stringify(postData)
      };
      break;
    default:
      /* GET/DELETE */
      requestBody = {
        method: requestType,

        headers: {
          Accept: "application/json"
        }
      };
      break;
  }

  /* Ejecutamos el fetch y le pasamos la respuesta al callback */
  fetch(url, requestBody)
    .then(response => response.json())
    .then(response => callback(response));
}

export function getPOI(lat, lng, distance, callback) {
  const url = `${MINUBE_ENDPOINT}pois?lang=en&latitude=${lat}&longitude=${lng}&max_distance=${distance}&api_key=${API_KEY}`;
  sendRequest(null, url, "GET", callback);
}
