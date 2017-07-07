import React, {Component} from 'react';
import displayIcons from './common';
import {FaCloud, FaAngleDown,FaSunO} from 'react-icons/lib/fa';

/*
   Dropdown class that extending from React component. 
*/
export default class Dropdown extends React.Component {
    constructor() {
        super();
        this.state = {
          selectedOption: null,
          dropDownOptionVisible: false
        }
        this.customDropDownClickHandler = this.customDropDownClickHandler.bind(this);
        this.dropDownOptionClickHandler = this.dropDownOptionClickHandler.bind(this);
     }

    /*
        This menthod is used to update the states with placeholder value.
    */
      componentDidMount(){
        this.setState({
          selectedOption : this.props.placeholder
        });
      }

      /*
       This menthod is used to update the state of list Item.
      */

      customDropDownClickHandler(){
        this.toggleDropDownOptionVisibleState(!this.state.dropDownOptionVisible);
      }

     /*
      This clickhandler is used to get the value from selected Option from dropdown List
     */
      dropDownOptionClickHandler(type){
        return(e) => {
      const value = e.target.innerText;
      this.setState({
        selectedOption: value,
        type:type
      })
      this.toggleDropDownOptionVisibleState(!this.state.dropDownOptionVisible);
    };
  }

      /*
       This method is used to update the state of Drop down List.
      */
      toggleDropDownOptionVisibleState(dropDownOptionVisible){
        this.setState({
          dropDownOptionVisible:dropDownOptionVisible
        });
      }

      render() {
      	const OptionsComponent = this.props.itemComponent;
      	const dropDownOptions = this.props.items.map( (item,i) => <li key={i} className="listItems" onClick={this.dropDownOptionClickHandler(item.type)}>
          <OptionsComponent  {...item} />
          </li>)      
        return <div className="customDropDownContainer">
                  
                  <div className="customDropDown dropdown">
                     <button className="btn btn-default btn-lg dropdown-toggle" type="button" data-toggle="dropdown" 
                      onClick={this.customDropDownClickHandler}>
                      <span>{this.state.selectedOption} {displayIcons(this.state.type)}</span>
                     <span className="caret pull-right"></span></button>
                     <ul className={this.state.dropDownOptionVisible ? 'showList' : 'hideList'}>
                     		{dropDownOptions}
                     </ul>
                  </div>
                  <label>Selected value: {this.state.selectedOption} {displayIcons(this.state.type)}</label>
              </div>

      }
}