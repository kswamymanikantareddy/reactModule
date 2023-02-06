import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TrainIcon from '@mui/icons-material/Train';
import styled from 'styled-components'

const Wrapper = styled.div`
padding:0px 15px;

`
const Wrapper1 = styled.div`
display:flex;

`
const Wrapper2 = styled.div`
margin-right:15px
`

const Icons = () => {
  return (
 <>
 <Wrapper1>
 <Wrapper2>
 <TwoWheelerIcon/>
 </Wrapper2>
 <Wrapper>
 <DirectionsBusIcon/>
 </Wrapper>
 <Wrapper>
 <DirectionsCarIcon/>
 </Wrapper>
 <Wrapper>
 <TrainIcon/>
 </Wrapper>
 </Wrapper1>
 </>
  )
}

export default Icons