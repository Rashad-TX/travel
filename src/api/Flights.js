import axios from 'axios';

const URL = 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/calendar'

const options = {
  params: {
    calendar_type: 'departure_date', // equal to either departuredate or returndate, REQUIRED
    destination: 'BCN', //airport code of destination city, REQUIRED
    origin: 'MOW', //airport code of departure city, REQUIRED
    depart_date: '2022-06-01', //date of departure, YYYY-MM-DD REQUIRED
    currency: 'USD', //currency, OPTIONAL
    return_date: '2022-06-09', // date of return, YYYY-MM-DD OPTIONAL (one way trips)
  },
  headers: {
    'X-Access-Token': '6ab8e3534d1ef1993954320904772632', //created project at travelpayouts.com (free)
    'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '970f20df64msh44deb057a99fb3ap1139f3jsn589af40e1a4d'
  }
};

const getFlightsData = async () => {
    try {
        const response = await axios.get(URL, options); //request data

        return response;
    } catch (error) {
        console.log(error)
    }
}

export default getFlightsData;