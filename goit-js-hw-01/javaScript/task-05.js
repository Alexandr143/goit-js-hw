'use strict';

const CHINA = 'china';

const CHILE = 'chile';

const AUSTRALIA = 'australia';

const INDIA = 'india';

const JAMAICA = 'jamaica'; 

const creditsChina = 100;

const creditsChili = 250;

const creditsAustralia = 170;

const creditsIndia = 80;

const creditsJamaica = 120;

let message;

let countryOfDelivery = prompt('Can you please input country of delivering ?');


if (countryOfDelivery === null) { 
 
  message = `See you later`;
  

} else { 
  
  switch (countryOfDelivery.toLowerCase()) {

  case CHINA :
    message =` Delivery to ${CHINA[0].toUpperCase() + CHINA.slice(1)} will be priced ${creditsChina} credits`;
    break;

  case CHILE:
     message =` Delivery to ${CHILE[0].toUpperCase() + CHILE.slice(1)} will be priced ${creditsChili} credits`;
    break;

  case AUSTRALIA:
    message =` Delivery to ${AUSTRALIA[0].toUpperCase() + AUSTRALIA.slice(1)} will be priced ${creditsAustralia} credits`;
    break;

  case INDIA:
    message =` Delivery to ${INDIA[0].toUpperCase() + INDIA.slice(1)} will be priced ${creditsIndia} credits`;
    break;

  case JAMAICA:
      message =` Delivery to ${JAMAICA[0].toUpperCase() + JAMAICA.slice(1)} will be priced ${creditsJamaica} credits`;
      break;

  default:

      message = `Delivery to your country unavailable`;
}
};
console.log(message); 