
import PropTypes from 'prop-types';

import work1 from './work1.png';
import './image.css'

 const Work1=({height,width,min,max,step})=>{
    return(
       
<img src={work1} alt='not found'className='Image--import' height={height}  width={width} min={min} max={max}/>
    
    )
};
Work1.propTypes={
height:PropTypes.number,
width:PropTypes.number,
min:PropTypes.number,
max:PropTypes.number,

}

export default Work1
