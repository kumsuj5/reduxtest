// Counterfile.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from  './redux/action/action'

const Counterfile = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count, "this is count")
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counterfile;
