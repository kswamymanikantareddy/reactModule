import Button from '@mui/material/Button';

interface buttonProps{
    variant:any,
    children:string,
}
const ButtonComponent = ({children,variant}:buttonProps) => {
  return (
  <>
  <Button variant={variant} sx={{width:284}}>
    {children}
  </Button>
  </>
  )
}

export default ButtonComponent
