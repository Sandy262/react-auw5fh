import React from 'react';
import useCounter from './useCounter';
function Counter2() {
  const [cnt, incCnt, decCnt] = useCounter(10);
  return (
    <div className="betterview">
      <h3>Counter2:{cnt}</h3>
      <button onClick={incCnt}>Incr</button>
      <button onClick={decCnt}>decr</button>
    </div>
  );
}
export default Counter2;
