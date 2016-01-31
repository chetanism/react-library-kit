/**
 * Created by chetanv on 31/01/16.
 */

import React, { Component } from 'react';

//const HelloWorld = ({name = 'World'}) => (<h3>Hello, {name}!</h3>);


class HelloWorld extends Component {
  render() {
    return <h3>Hello, {this.props.name}</h3>;
  }
};

export default HelloWorld;


