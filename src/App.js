// // App.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './redux/action/action';

// const App = () => {
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// };

// export default App;


import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Counterfile from './Counterfile';

function App() {

  return (
 <Provider store={store}>
     <div>
      <Counterfile/>
     </div>
 </Provider>
  )
}

export default App