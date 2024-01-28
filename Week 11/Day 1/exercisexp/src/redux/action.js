export const addTodo = (task) => {
  return {
    type: "ADD_TODO",
    task,
  };
};

export const delTodo = (id) => {
  return {
    type: "DEL_TODO",
    id,
  };
};

export const completeTodo = (id, isChecked) => {
  return {
    type: "COMPLETE_TODO",
    id,
    isChecked,
  };
};

export const editTodo = (id, task) => {
    return {
      type: "EDIT_TODO",
      id,
      task,
    };
  };

