import React from 'react';
import './App.css';



function App() {
  const[counter,setCounter] = React.useState(0);
  const [number,setNumber] = React.useState(5);
  const Factorial = React.useMemo(()=>fact(number),[number]);
  
  return (
   <center>
  Counter : {counter}
    <button onClick={()=>setCounter(counter+1)}>
      Increment
    </button> <br/>
    <button onClick={()=>setNumber(number+1)}>
     Increment
    </button>
    Factorial : {Factorial}
   </center>
  );
}
const fact = (n)=>{
  let ans=1;
  for(var i =n ; i>=1;i--){
ans = ans * i;
  }
  console.log('Factorial function calling');
  return ans;
}

export default App;
