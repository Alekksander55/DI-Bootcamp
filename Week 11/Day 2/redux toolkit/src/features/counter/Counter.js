import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementBy, incrementWithPrepare } from "./counterSlice";

const Counter = (props) => {
  const count = useSelector((state) => state.myCounterReducer.count);
  const dispatch = useDispatch()
  return (
    <>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
      </div>
      <div>
      Number: <input type="number"/>
      <button onClick={()=>{dispatch(incrementBy({a:5, b:2}))}}>Increment by</button>
      <button onClick={()=>{dispatch(incrementWithPrepare(1,2))}}>Increment Prepare</button>
      </div>
    </>
  );
};

export default Counter;
