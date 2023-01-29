import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const Box2 = () => {
  return (
 <Stack direction="column" spacing={2}>
    <div className="wrap">
    <Avatar alt="Remy Sharp" src="./avatar/Vector.png" />
    <div className="container">
    <h4>
       Payment method
      </h4>
      <h1>Visa credit ...8845</h1>
    </div>
    </div>
<div className="line"> 
   |<br />
   |<br />
   |<br />
   |<br />
   | <br />
   |<br />
   |<br />
</div>


    <div className="wrap">
    <Avatar alt="Remy Sharp" src="./avatar/1.png" />
    <div className="container">
    <h4>
       delivery fees
      </h4>
      <h1>0.001 BTC</h1>
    </div>
    </div>
    <div className="line"> 
   |<br />
   |<br />
   |<br />
   |<br />
   | <br />
   |<br />
   |<br />
</div>


    <div className="wrap">
    <Avatar alt="Remy Sharp" src="./avatar/3.png" />
    <div className="container">
    <h4>
       Deposit to
      </h4>
      <h1>Bitcoin wallet</h1>
    </div>
    </div>
    
   
    </Stack>
  
  )
}

export default Box2