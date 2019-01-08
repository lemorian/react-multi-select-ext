import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MultiSelectReact from 'multi-select-react'

const OptionsState = {
  ALLSELECTED:1,
  NONESELECTED:2,
  DEFAULT:0
}

//Returns of All the options or none of the options are selected.
const isAllorNoneSelected = (options) => {

  if(options.length > 0) {
    let allSelected = true;
    let noneSelected = true;
    options.forEach(option => {
        if(option.id !=='enableAll' && option.id !=='enableNone'){
          if(option.value === true )
            noneSelected = false;
  
          if(option.value === false )
            allSelected = false;
        }
      });
  
    if(allSelected) 
      return OptionsState.ALLSELECTED;
  
    if(noneSelected) 
      return OptionsState.NONESELECTED;
  }
  

  return OptionsState.DEFAULT;
}


const MarkAllOrNoneOptions = (choice,optionList) => {
  
  return optionList.map((option)=>{
      option.value = choice;
      return option;
  });
  
}

class MultiSelectReactExt extends Component {

  constructor(props){
    super(props);
    this.options = [];
    this.isAllNoneEnabled = false;
    this.isAllSelected = false;
    this.isNoneSelected = false;
  }

  optionClicked = (optionsList) => {
   
    if(this.isAllNoneEnabled){
      if(!this.isAllSelected && optionsList[0].value){
        return this.props.optionClicked(MarkAllOrNoneOptions(true,optionsList))
      }

      if(!this.isNoneSelected && optionsList[optionsList.length-1].value){
        return this.props.optionClicked(MarkAllOrNoneOptions(false,optionsList))
      }
    }

    this.props.optionClicked(optionsList);
  }
  selectedBadgeClicked = (optionsList) => {
    
    if(this.isAllNoneEnabled){
      if(!this.isAllSelected && optionsList[0].value){
        return this.props.selectedBadgeClicked(MarkAllOrNoneOptions(true,optionsList))
      }

      if(!this.isNoneSelected && optionsList[optionsList.length-1].value){
        return this.props.selectedBadgeClicked(MarkAllOrNoneOptions(false,optionsList))
      }
    }

    this.props.selectedBadgeClicked(optionsList);
  }

  shouldComponentUpdate = (nextProps, _) => {
    if(nextProps.options.length > 0 && nextProps.enableSelectAllNone && nextProps.options[0].id !== 'enableAll'){
      this.isAllNoneEnabled = false;
    }
    return true;
  }
  
  
  render() {

    let {options,enableSelectAllNone} = this.props;
    this.options = options;
    
    
    //Add Select all and Select None Options
    if(!this.isAllNoneEnabled && enableSelectAllNone){
      options = [{'label':'Select All','id':'enableAll','value':false}].concat(options.concat([{'label':'Select None','id':'enableNone','value':false}]));
      this.isAllNoneEnabled = true;
    }
    //Remove Select all and Select None Options
    if(this.isAllNoneEnabled && !enableSelectAllNone)
    {
      this.isAllNoneEnabled = false;
    }

    //mark SelectAll or Select None Options of all other or no other was selected respectively
    if(this.isAllNoneEnabled){
      let selectedOption  = isAllorNoneSelected(options);
      this.isAllSelected  = (selectedOption === OptionsState.ALLSELECTED);
      this.isNoneSelected = (selectedOption === OptionsState.NONESELECTED);
      options[0].value = (selectedOption === OptionsState.ALLSELECTED);
      options[options.length-1].value = (selectedOption === OptionsState.NONESELECTED);
    }
    

    return (
       <MultiSelectReact
        {...this.props}  
        options={options}
        optionClicked={this.optionClicked}
        selectedBadgeClicked={this.selectedBadgeClicked}
       />
    );
  }
}

MultiSelectReactExt.propTypes = {
  enableSelectAllNone:PropTypes.bool
};

export default MultiSelectReactExt;
 