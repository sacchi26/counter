import React from "react";
function App(){
  const [Count,setCount]=React.useState(100);
  const inc=function(){

   setCount(Count+1)
  }
  const dec=function(){
    setCount(Count-1)
  }
  return(
    <>
    <h1>Count:{Count}</h1>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>Decrease</button>
    </>
  )
}


export default App