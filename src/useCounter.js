import React from 'react';
function useCounter(initialValue=0) {
  var [count, setCount] = React.useState(initialValue);
  function incCounter() {
    setCount(count + 1);
  }
  function decCounter() {
    setCount(count - 1);
  }
  function reset(){
    setCount(0)
  }
  return [count, incCounter, decCounter,reset];
}

export default useCounter;