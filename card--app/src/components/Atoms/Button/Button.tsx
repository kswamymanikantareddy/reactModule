import Button from "@mui/material/Button";

interface buttonProps {
  variant: any;
  label: string;
}
const ButtonComponent = ({ variant, label }: buttonProps) => {
  return (
    <>
      <Button variant={variant}>{label}</Button>
    </>
  );
};

export default ButtonComponent;
