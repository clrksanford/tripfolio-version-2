const setInfoToState = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'SET_FIREBASE':
      return { ...state, firebase: action.firebase };
    case 'SET_TRIP_ID':
      return { ...state, tripId: action.tripId };
    case 'SET_OWNER':
      return { ...state, owner: action.owner };
    case 'SET_USER_TRIPS':
      return { ...state, userTrips: action.userTrips };
    default:
      return state;
  }
}

export default setInfoToState;
