import axios from 'axios';
import { setSelectedTrip } from '.';

const getSelectedTrip = (tripId) => {
  return (dispatch, getState) => {
    axios.get(`https://lit-garden-98394.herokuapp.com/trips/${tripId}`)
      .then((response) => {
        let trip = response.data;

        return dispatch(setSelectedTrip(trip));
      })
  }
}

export default getSelectedTrip;
