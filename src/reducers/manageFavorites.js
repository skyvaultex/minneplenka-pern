export function manageFavorites(state, action) {
  const { type, projectID } = action
  switch (type) {
    case ("ADD"):
      return state.includes(projectID)
        ? state
        : [...state, projectID];
    case ("REMOVE"):
      return state.filter(id => id !== projectID);
    case ("CLEAR"):
      return [];
    default:
      return state;
  }
}