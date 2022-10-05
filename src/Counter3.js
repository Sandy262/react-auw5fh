import React from 'react';
import useCounter from './useCounter';
function Counter3() {
  const [cnt, incCnt, decCnt] = useCounter();
  return (
    <div className="betterview">
      <h3>Counter3:{cnt}</h3>
      <button onClick={incCnt}>Incr</button>
      <button onClick={decCnt}>decr</button>
    </div>
  );
}
export default Counter3;
