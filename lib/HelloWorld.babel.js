/**
 * Created by chetanv on 31/01/16.
 */

import React, { Component } from 'react';

const HelloWorld = ({name = 'World'}) => (<h3>Hello, {name}!</h3>);

export default HelloWorld;


