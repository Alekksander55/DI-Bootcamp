import { useDispatch, useSelector } from "react-redux";
import {connect} from 'react-redux'
import { decrement, increment } from "../redux/action";

const Counter = (props) => {
//   const myCount = useSelector((state) => state.counterReducer.count);
//   const myText = useSelector((state) => state.counterReducer.text);
//   const { count, text } = useSelector((state) => state.counterReducer);

//   const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => props.myDecrement(10)}>Decrement</button> 
      <h2>Count : {props.myCount} </h2>
      {props.text}
      <button onClick={() => props.myIncrement(1)}>Increment</button>
      {/* <button onClick={() => dispatch(decrement(100,'by 1'))}>Decrement</button>
      <h2>
        Count : {count} {myCount}
      </h2>
      {text} {myText}
      <button onClick={() => dispatch({type:'increment', payload: 100, text: ' moncul'})}>Increment</button> */}
    </>
  );
};
// export default Counter;
const mapStateToProps = (state) => {
    console.log(state)
  return {
    myCount: state.counterReducer.count,
    text: state.counterReducer.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myIncrement: (val, text) => dispatch(increment(val, "Increment by " + val)),
    myDecrement: (val, text) => dispatch(decrement(val, "Decrement by " + val)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
