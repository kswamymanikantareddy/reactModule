import React from 'react'
import Icons from '../Atoms/Icons'
import { T4 } from '../Topography/Topography'
import styled from 'styled-components'

const Wrapper = styled.div`
position: relative;

`
const Wrapper1 = styled.div`
margin:15px
`
const Wrapper2 = styled.div`
position: absolute;
top:0px
`
const DivThree = () => {
  return (
    <>
    <Wrapper>
      <Wrapper2>
      <T4> Commute routes available : </T4>
      </Wrapper2>
      <Wrapper1>
      <Icons/>
      </Wrapper1>
   
    </Wrapper>

    </>
  )
}

export default DivThree