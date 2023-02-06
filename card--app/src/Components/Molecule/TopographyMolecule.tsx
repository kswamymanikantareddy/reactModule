import styled from 'styled-components'
import { T1, T2, T3 } from '../Topography/Topography'

const Molecule2 = styled.div`
padding:16px;
position relative
justify-content: left;
display: flex;
}
`


const DivTwo = () => {
  return (
    <>
    <Molecule2>
    <T1>User Experience Designer</T1>
    <T2>  HP </T2>
    <T3>Hyderabad, Telangana, India </T3>
    </Molecule2>
    </>
  )
}

export default DivTwo