import axios from 'axios';
import { setTripsByDestination } from '.';

const getTripsByDestination = (cityName) => {
  return (dispatch, getState) => {
    axios.get(`https://lit-garden-98394.herokuapp.com/destinations/${cityName}`)
      .then((response) => {
        let trips = response.data;

        return dispatch(setTripsByDestination(trips));
      })
  }
}

export default getTripsByDestination;
