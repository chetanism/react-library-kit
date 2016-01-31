/**
 * Created by chetanv on 31/01/16.
 */

import React, { Component, PropTypes } from 'react';

import HelloWorld from '../src/HelloWorld';

class Demo extends Component {

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div>
        <section>
          <h1>HelloWorld</h1>
          <ul>
            <li>
              <h2>Default</h2>
              <HelloWorld />
            </li>

            <li>
              <h2>Name</h2>
              <HelloWorld name="John Doe" />
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Demo;