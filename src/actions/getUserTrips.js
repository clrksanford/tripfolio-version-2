import axios from 'axios';
import { setUserTrips } from '.';

const getUserTrips = (user) => {
  console.log('getting the trips of user', user);
  return (dispatch, getState) => {
    let userId = user.uid;

    axios.get(`https://lit-garden-98394.herokuapp.com/${userId}`)
      .then((response) => {
        let userTrips = response.data;
        
        return dispatch(setUserTrips(userTrips));
      })
  }
}

export default getUserTrips;
