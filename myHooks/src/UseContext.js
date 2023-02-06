import React from 'react';
import ComponentC from './ComponentC'
import './App.css';

export const UserContext = React.createContext();

function App() {
  return (
    <div>
      <center>
        <UserContext.Provider value={'Props Passed'}> 
           <ComponentC/>
        </UserContext.Provider>
      </center>
      </div>
  );
}

export default App;
