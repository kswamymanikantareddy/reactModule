import React from 'react'
import "./App.css";
import {incNumber} from "./actions/index";
import {decNumber} from "./actions/index";

import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
    <>
  
      <h1>counter</h1>
    
        <p  onClick={() => dispatch(decNumber())}>
          <span>
            -
          </span></p>
        <input  type="text" value={changeTheNumber} />
        <p onClick={() => dispatch(incNumber())}>
          <span>
            +
          </span></p>

    

    </>
  )
}

export default App