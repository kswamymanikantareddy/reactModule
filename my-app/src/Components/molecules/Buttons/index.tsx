import { Button } from "../../atoms/Button";
import Stack from '@mui/material/Stack';

export const ButtonMolecule = ()=>{
    return(
        <>
         <Stack direction="row" spacing={2}>
         <Button variant="orange" label='Bitcoin'/>
         <Button variant="grey" label='Xrp'/>
         <Button variant="pink" label='Polkadot'/>
         <Button variant="lightgrey" label='Ethereum'/>
         <Button variant="blue" label='Tether'/>
         <Button variant="drakgrey" label='Ethereum 2'/>
         <Button variant="beige" label='Dodge Coin'/>
         </Stack>
        </>   
    );
}