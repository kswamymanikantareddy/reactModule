interface imageProps{
    url:string,
}

const Image = ({url}:imageProps) => {
  return (
  <>
  <img src={url} alt='Not Found'/>
  </>
  )
}

export default Image
