# react-multi-select-ext

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## react-multi-select-ext -  Multi Value Dropdown for React

This component is build using [multi-select-react](https://github.com/ganesh-91/multi-select-react). Some additional features are added on top of it.

## Installation
```
npm install react-multi-select-ext
```
----
## Basic Usage

**For more details refer to the original project's readme [here](https://github.com/ganesh-91/multi-select-react/blob/master/README.md).**

```
import React, {Component} from 'react'
import {render} from 'react-dom'

import MultiSelectReact from 'react-multi-select-ext';

class Demo extends Component {
  constructor() {
        super();
        this.state = {
            multiSelect:[]
        };
    }
    componentWillMount(){
        setTimeout(()=>{
            this.setState({multiSelect: [{'label':'Monkey','id':1,'value':true},{'label':'Donkey','id':2,'value':true},{'label':'Lion','id':3,'value':true},{'label':'Zebra','id':4,'value':true}]});
        },5000)
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

```

----
## New Features

| Prop  | Type  | Default | Description |
|:--------- | :---- | :----   |:----  |
| `enableSelectAllNone` | `boolean` | R | Enable "Select All" and "Select None" options in the dropdown.Does not work when single select is enabled

[build-badge]: https://travis-ci.org/lemorian/react-multi-select-ext.svg?branch=master
[build]: https://travis-ci.org/lemorian/react-multi-select-ext

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

## Licence

[MIT]
