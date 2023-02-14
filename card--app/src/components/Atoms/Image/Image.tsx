interface imageProps{
    url:string,
    height?:number ,
    width?:number,
}

const Image = ({url ,height ,width ,}:imageProps) => {
  return (
    <>
    <img src={url} alt='Not Found' height={height} width={width}/>
    </>
  )
}

export default Image
