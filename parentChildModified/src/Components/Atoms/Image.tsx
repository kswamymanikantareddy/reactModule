import styled from 'styled-components'

export const Image = styled.div`

width: 526px;
height: 0px;
border: 1px solid #E8E8F7;
flex: none;
order: 1;
flex-grow: 0;
`

interface Props{
    url:string,
}

export const Img = ({url}:Props) =>{
  return (
   <img src={url} alt="" />
  )
}
