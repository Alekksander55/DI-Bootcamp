const initialToDo = [
  {
    id: 1,
    task: "Laundry",
    complete: false,
  },
  {
    id: 2,
    task: "Dishes",
    complete: false,
  },
];

export const toDoReducer = (state = initialToDo, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat({
        id: state.length + 1,
        task: action.task,
        complete: false,
      });
    case "DEL_TODO":
      return state.filter((item) => item.id !== action.id);
    case "COMPLETE_TODO":
      return state.map((item) => {
        if (item.id === action.id && item.complete === false) {
          console.log(item.complete);
          return { ...item, complete: true };
        } else if (item.id === action.id && item.complete === true) {
          console.log(item.complete);
          return { ...item, complete: false };
        } else {
          return item;
        }
      });
    case "EDIT_TODO":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, task: action.task };
        } else {
          return item;
        }
      });
    default:
      return [...state];
  }
};
