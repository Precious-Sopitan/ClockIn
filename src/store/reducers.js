
const initialState = {
  count: 0
}

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return (state = {
        ...state,
        count: state.count + 1,
      });
    case "DECREMENT":
      return (state = {
        ...state,
        count: state.count - 1,
      });
    default:
      return state;
  }
}