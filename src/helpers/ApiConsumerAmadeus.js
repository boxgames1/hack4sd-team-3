const Amadeus = require("amadeus");

export function getHotels(latitude, longitude, funcionCallback) {
    var amadeus = new Amadeus({
        clientId:    'h7OKnUPFoyUlZdsHV2102IwScl6aCArv',
        clientSecret: 'Nly8bTQQwRpYgrsd'
    });
    
    amadeus.shopping.hotelOffers.get({
        latitude: latitude,
        longitude: longitude
      }).then(function(response){
        funcionCallback(response.data);
      }).then(function(nextPage){
        console.log(nextPage);
      });
}