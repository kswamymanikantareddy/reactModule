import ImageCard from './Atoms/ImageCard'
import IconText1 from './Molecules/IconText1'
import IconText2 from './Molecules/IconText2'
import IconText3 from './Molecules/IconText3'
import TextInput1 from './Molecules/TextInput1'
import TextInput2 from './Molecules/TextInput2'
import Button from './Organism/Button'
import Link from './Organism/Link'
import Topology1 from './Topology/Topology1'
import Topology2 from './Topology/Topology2'
import Topology3 from './Topology/Topology3'

import React from 'react'

export default function Organism() {
  return (
    <div>
      <ImageCard/>
      <Topology1/>
      <TextInput1/>
      <TextInput2/>
      <Link/>
      <Button/>
      <Topology2/>
      <IconText1/>
      <IconText2/>
      <IconText3/>
      <Topology3/>



     
    </div>
  )
}
