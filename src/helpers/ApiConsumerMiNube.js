const MINUBE_ENDPOINT = "http://papi.minube.com/";
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      };
      break;
    default:
      /* GET/DELETE */
      requestBody = {
        method: requestType,
        headers: {
          "Content-Type": "application/json"
        }
      };
      break;
  }

  /* Ejecutamos el fetch y le pasamos la respuesta al callback */
  fetch(url, requestBody)
    .then(response => response.json())
    .then(response => callback(response));
}

export function getCountries() {
  const url = MINUBE_ENDPOINT + "countries?lang=en&api_key=" + API_KEY;
  sendRequest(null, url, "GET", callback);
}
