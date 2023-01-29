import React, { useState } from 'react'

const Counter= () => {
  const [count,setCount] = useState(0);
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>Add</button>
       <div role='contentinfo'>count is {count}</div>
    </div>
  )
}

export default Counter
