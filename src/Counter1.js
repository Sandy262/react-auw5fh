import React from 'react';
import useCounter from './useCounter';
function Counter1() {
  const [cnt, incCnt, decCnt,reset] = useCounter(9);
  return (
    <div className="betterview">
      <h3>Counter1:{cnt}</h3>
      <button onClick={incCnt}>Increment</button>
      <button onClick={decCnt}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter1;
