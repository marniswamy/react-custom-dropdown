import React from 'react';
import displayIcons from './common';
import {FaCloud, FaAngleDown,FaSunO} from 'react-icons/lib/fa';

/*
  To Render Drop down List in dropdown
*/

const WeatherItem = (props) => (    
  <label>{props.city + " " + props.temperature+ " "} {displayIcons(props.type) }  </label>
);

export default WeatherItem;