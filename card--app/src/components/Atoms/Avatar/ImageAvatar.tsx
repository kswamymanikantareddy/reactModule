import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
interface Props {
  url: string;
}

const ImageAvatar = ({ url }: Props) => {
  return (
    <>
      <Avatar src={url} alt="Not Found" sx={{ width: 20, height: 18 }} />
    </>
  );
};

export default ImageAvatar;
