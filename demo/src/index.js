import React, {Component} from 'react'
import {render} from 'react-dom'

import MultiSelectReact from '../../src'

class Demo extends Component {
  constructor() {
        super();
        this.state = {
            multiSelect: [{'label':'Monkey','id':1,'value':true},{'label':'Donkey','id':2,'value':true},{'label':'Lion','id':3,'value':true},{'label':'Zebra','id':4,'value':true}]
        };
    }
    render() {
        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#fcf8e3",
            color: "#8a6d3b"
        };
    return (
      <MultiSelectReact 
      options={this.state.multiSelect}
      optionClicked={this.optionClicked.bind(this)}
      selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
      selectedOptionsStyles={selectedOptionsStyles}
      optionsListStyles={optionsListStyles} 
      enableSelectAllNone={true}
      />
    );
    }

    optionClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }
    selectedBadgeClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }
}

render(<Demo/>, document.querySelector('#demo'))
