import React from 'react'
import Card from '../Molecule/IconMolecule'
import DivThree from '../Molecule/CommuteRouts'
import DivTwo from '../Molecule/TopographyMolecule'
import styled from 'styled-components'
import Stack from '@mui/material/Stack';

const CardBox = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
position: relative;
width: 320px;
height: 271px;
background: #FFFFFF;
border-radius: 12px;

`

const Organism = () => {
  return (
   <>
   <CardBox>
   <Stack spacing={8}>
   <Card/>
   <DivTwo/>
   </Stack>
   <DivThree/>
   
   </CardBox>
 
   
   </>
  )
}

export default Organism
