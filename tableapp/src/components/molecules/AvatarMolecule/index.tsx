import React from 'react'
import Avatar from '../../atoms/Image'
import Typography from '../../atoms/Typography/index'
import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
background-color: #FFFFFF;
`
export const Wrapper = styled.div`
  margin: 0px 9px;

`
export const t1 = styled.div`
font-size:15px ;
margin:5px;
`
export const t2 = styled.div`
font-size: 9px;
margin: 5px;
`
interface Props{
  url:string,
  variant1:any,
  variant2:any,
  children1:string|number,
  children2:string|number
}

const AvatarMolecule = ({url,variant1,variant2,children2,children1}:Props) => {
  return (
    <>
    <Container>
    <Avatar url={url} alt='not found'/>
    <Wrapper>
    <Typography variant={variant1}>{children1}</Typography>
    <Typography  variant={variant2}>{children2}</Typography>
    </Wrapper>
    </Container>
    </>
  )
}

export default AvatarMolecule
