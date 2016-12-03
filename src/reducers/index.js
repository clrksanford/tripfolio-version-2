const setInfoToState = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'SET_FIREBASE':
      return { ...state, firebase: action.firebase };
    case 'SET_CURRENT_TRIP_ID':
      return Object.assign({}, state, {
        tripId: action.tripId
      });
    case 'SET_CURRENT_TRIP_OWNER':
      return Object.assign({}, state, {
        ownerId: action.ownerId
      });
    case 'SET_CURRENT_TRIP_DESINATION':
      return Object.assign({}, state, {
        destination: action.destination
      });
    case 'SET_OWNER':
      return { ...state, owner: action.owner };
    case 'SET_USER_TRIPS':
      return { ...state, userTrips: action.userTrips };
    case 'SET_TRIPS_BY_DESTINATION':
      return { ...state, trips: action.trips };
    default:
      return state;
  }
}

export default setInfoToState;
