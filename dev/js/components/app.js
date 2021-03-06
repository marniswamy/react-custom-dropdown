import React from 'react';
require('../../scss/style.scss');
import Dropdown from '../containers/customdropdown';
import WeatherItem from '../containers/weatheritem';
import CustomerItem from '../containers/customeritem';

const weatherReport = [
  { "city": "London",    "temperature": "15°c", "type": "cloudy" },
  { "city": "Hyderabad", "temperature": "28°c", "type": "sunny"  },
  { "city": "New York",  "temperature": "-5°c", "type": "cloudy" }
];

const customerDetails = [
  { "first": 'Marni',  "last": "Peters" },
  { "first": 'Nicole', "last": "Venka" }
]; 

/*
  To render Dropdown components in App.
*/
const App = () => (
 <div className="container">    
  <div className="row">
    <div className="weatherItem col-xs-12 col-sm-12 col-md-6 text-center">
      <h2>Weather Report</h2>
      <Dropdown placeholder="Choose City" itemComponent={WeatherItem} items={weatherReport}/>
    </div>
    <div  className="customerItem col-xs-12 col-sm-12 col-md-6 text-center">
      <h2>Customer Details</h2>
      <Dropdown placeholder="Choose Customers" itemComponent={CustomerItem} items={customerDetails} />
    </div>
   </div>
  </div>  
);

export default App;