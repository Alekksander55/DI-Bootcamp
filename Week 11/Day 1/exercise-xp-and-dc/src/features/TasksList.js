import { useDispatch, useSelector } from "react-redux";
import { addTask, delTask, toggleTask, editTask } from "./tasksSlice";
import { useRef, useState } from "react";

const TasksList = (props) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const inputAddTaskRef = useRef();
  const datetimeRef = useRef();
  const datetimeFilterRef = useRef()
  const inputEditTaskRef = useRef();
  const [filter, setFilter] = useState("ALL");

  const filterTasks = tasks.filter((task) => {
    if (filter === "ALL") return task;
    if (filter === "COMPLETED") return task.completed;
    if (filter === "UNCOMPLETED") return !task.completed;
    if (filter === datetimeFilterRef.current.value.slice(0,10)) return task.datetime === datetimeFilterRef.current.value.slice(0,10)
  });

  const handleEdit = (task) => {
    inputEditTaskRef.current.style.display === "none"
      ? (inputEditTaskRef.current.style.display = "")
      : (inputEditTaskRef.current.style.display = "none");
    if (inputEditTaskRef.current.value) {
      dispatch(editTask({ id: task.id, text: inputEditTaskRef.current.value }));
      inputEditTaskRef.current.value = "";
    }
  };
  return (
    <>
      <div>
        <h2>Tasks List</h2>
        <p>
          To edit a task, click on edit, write your task and click again on edit
        </p>
        <div>Filter Task :
          <button onClick={() => setFilter("ALL")}>All</button>
          <button onClick={() => setFilter("COMPLETED")}>Completed</button>
          <button onClick={() => setFilter("UNCOMPLETED")}>Uncompleted</button>
          <input type="datetime-local" ref={datetimeFilterRef} />
          <button onClick={() => setFilter(datetimeFilterRef.current.value.slice(0,10))}>Filter by date</button>
        </div>
        <input type="datetime-local" ref={datetimeRef} />
        <input type="text" ref={inputAddTaskRef} placeholder="Add your task" />
        <button
          onClick={() =>
            dispatch(
              addTask({
                text: inputAddTaskRef.current?.value,
                datetime: datetimeRef.current?.value.slice(0,10),
              })
            )
          }
        >
          Add
        </button>
      </div>
      <div>
        {filterTasks.map((task) => {
          return (
            <div key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
              />
              <span
                style={{ textDecoration: task.completed ? "line-through" : "" }}
              >
                {task.text} {new Date(task.datetime).toLocaleString().slice(0,10)}
              </span>
              <button onClick={() => dispatch(delTask(task.id))}>-</button>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <input
                type="text"
                ref={inputEditTaskRef}
                style={{ display: "none" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TasksList;
