export const setUser = (user) => ({
  type: 'SET_USER',
  user
});

export const setFirebase = (firebase) => ({
  type: 'SET_FIREBASE',
  firebase
});

export const setCurrentlySelectedTrip = (tripId) => ({
  type: 'SET_TRIP_ID',
  tripId
})

export const setOwnerOfCurrentTrip = (owner) => ({
  type: 'SET_OWNER',
  owner
})
