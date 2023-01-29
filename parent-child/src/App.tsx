import React from 'react';
import Card from '@mui/material/Card';
import './App.css';
import { Box} from '@mui/system';
import Box1 from './Components/Box1';
import Box2 from './Components/Box2';
import Box3 from './Components/Box3';

function App() {
  return (
  <>
  <Card sx={{
    height:646,
    width:527,
  }}>
     <div className='style' style={{ width: '100%' }}>
      <Box1/>
      <div className="box2"><Box2/></div>
    
      <div className="box3">
      <Box3/>
      </div>
      
    </div>

  </Card>
  </>
  );
}

export default App;
