const initialState = {
  count: 0,
  text: 'hello',
};

export const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { ...state, count: state.count + action.payload, text: action.text };
  } else if (action.type === "decrement") {
    return { ...state, count: state.count - action.payload, text: action.text };
  }
  return { ...state };
};
