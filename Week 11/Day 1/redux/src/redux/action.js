export const increment = (val, text) => {
  return {
    type: "increment",
    payload: val,
    text,
  };
};

export const decrement = (val, text) => {
  return {
    type: "decrement",
    payload: val,
    text,
  };
};
