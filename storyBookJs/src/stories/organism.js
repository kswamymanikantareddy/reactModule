import React  from 'react'
import { Cardbox } from './Card.stories';
import { Template }  from './Image.stories';
import { Vector } from './Image.stories';
import { Text } from './Body.stories';
import { Body } from './Body2.stories';
import { Combine } from './Molecule.stories';
import { Combine2 } from './Molecule2.stories';


export function Organism() {

  return (
     <>
     <Cardbox/>
     <Template/>
     <Text/>
     <Body/>
     <Combine/>
     <Combine2/>
     <Vector/>

</>

  
  );
}

 
