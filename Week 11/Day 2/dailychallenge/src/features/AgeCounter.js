import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../features/ageCounterSlice';
import LoadingMessage from './LoadingMessage';

const AgeCounter = () => {
  const dispatch = useDispatch();
  const { age, status } = useSelector((state) => state.counter);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(ageUpAsync(1));
    }
  }, []);

  const handleAgeUp = () => {
    dispatch(ageUpAsync(1));
  };

  const handleAgeDown = () => {
    dispatch(ageDownAsync(1));
  };

  return (
    <div>
      <h1>Counter: {age}</h1>
      <button onClick={handleAgeUp}>Increment</button>
      <button onClick={handleAgeDown}>Decrement</button>
      <LoadingMessage loading={status === 'loading'} />
    </div>
  );
};

export default AgeCounter;