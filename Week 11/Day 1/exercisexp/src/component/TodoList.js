import { addTodo, delTodo, completeTodo, editTodo } from "../redux/action";
import { useRef } from "react";
import { connect } from "react-redux";

const TodoList = (props) => {
  const inputRef = useRef();
  const inputEdit = useRef();

  return (
    <div>
      <h2>My Todo List</h2>
      {props.todo.map((item) => {
        return (
          <div key={item.id}>
            <button onClick={() => props.delTodo(item.id)}>X</button>
            <button
              onClick={() => props.editTodo(item.id, inputEdit.current.value)}
            >
              Edit
            </button>

            <span>{item.task}</span>

            <input
              type="checkbox"
              onClick={(e) => props.completeTodo(item.id, e.target.checked)}
            />
          </div>
        );
      })}
      <label>
        Add a task : <input type="text" ref={inputRef} />
      </label>{" "}
      <button onClick={() => props.addTodo(inputRef.current.value)}>Add</button>
      <div>
        <label>
        Edit a task<input type="text" ref={inputEdit} style={{ display: "" }} />
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.toDoReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (task) => dispatch(addTodo(task)),
    delTodo: (id) => dispatch(delTodo(id)),
    completeTodo: (id, isChecked) => dispatch(completeTodo(id, isChecked)),
    editTodo: (id, task) => dispatch(editTodo(id, task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
