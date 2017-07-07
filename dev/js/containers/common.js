import React from 'react';
import {FaCloud, FaAngleDown,FaSunO} from 'react-icons/lib/fa';


/*
  To Render weather icon in dropdown Options
*/
const displayIcons = (type) => {
  switch (type) {
    case "sunny":   
      return <FaSunO className={'whether-icon'}/>
      break;
    case "cloudy": 
      return <FaCloud className={'whether-icon'}/>
      break;
      default:      
      return;
      break;
  }
};

export default displayIcons;