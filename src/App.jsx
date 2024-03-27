import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={increment}>Increment</button>
      <button className="btn btn-warning" onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;