const initialState = {
  value: 0,
};

export default function feedReducer(state = initialState, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case "decrement": {
      return {
        ...state,
        value: state.value - 1,
      };
    }

    default:
      return state;
  }
}
