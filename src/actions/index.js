export const setUser = (user) => ({
  type: 'SET_USER',
  user
});

export const setFirebase = (firebase) => ({
  type: 'SET_FIREBASE',
  firebase
});

export const setCurrentTripId = (tripId) => ({
  type: 'SET_TRIP_ID',
  tripId
});

export const setCurrentTripOwner = (ownerId) => ({
  type: 'SET_TRIP_OWNER',
  ownerId
});

export const setCurrentTripDestination = (destination) => ({
  type: 'SET_TRIP_DESTINATION',
  destination
});
