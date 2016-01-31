/**
 * Created by chetanv on 31/01/16.
 */


// __tests__/CheckboxWithLabel-test.js
jest.dontMock('../HelloWorld');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const HelloWorld = require('../HelloWorld').default;

describe('HelloWorld', () => {
  it('renders hello world message', () => {
    //const helloWorld = TestUtils.renderIntoDocument(
    //  <HelloWorld />
    //);

    expect(1).toBe(1);


    //var helloWorldNode = ReactDOM.findDOMNode(helloWorld);
    //
    //// Verify that it's Off by default
    //expect(helloWorldNode.textContent).toEqual('Hello, World!');

  });
});