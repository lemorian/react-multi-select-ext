import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import MultiSelectReact from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('Component Loaded', () => {
    
    
    const selectedOptionsStyles = {
        color: "#3c763d",
        backgroundColor: "#dff0d8"
    };
    const optionsListStyles = {
        backgroundColor: "#fcf8e3",
        color: "#8a6d3b"
    };

    render( <MultiSelectReact 
      options={[{'label':'Monkey','id':1,'value':true},{'label':'Donkey','id':2,'value':true},{'label':'Lion','id':3,'value':true},{'label':'Zebra','id':4,'value':true}]}
      selectedOptionsStyles={selectedOptionsStyles}
      optionsListStyles={optionsListStyles} 
      enableSelectAllNone={true}
      />, node, () => {
      expect(node).toExist()
    })
  })
})
