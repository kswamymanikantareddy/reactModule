import Work1 from './Image'
import user from './user.jpg'
import vector from './Vector.jpg'
import time from './time.jpg'
import './image.css'


const Box={
    title:'Example/Image',
    component:Image,
    argTypes:{  }
}
export const Template = (args)=><Work1 {...args}/>
 export const User = ()=>{
    return(
        <img src={user} alt='not found'/>
    )
 }
 export const Time = ()=>{
    return(
        <img src={time} alt='not found'/>
    )
 }
 export const Vector = ()=>{
    return(
        <img src={vector} alt='not found' className='vector--image'/>
    )
 }

 export default Box



