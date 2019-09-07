import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';

class MyComp extends Component {

  constructor(props) {
    super(props);
    this.str = "Hello World";
  }

  render() {
    return (
      <div className="box">
        <div>
            <FontAwesomeIcon icon={farCircle} size="3x" />
            <FontAwesomeIcon icon={fasCircle} size="3x" />
            <h1>{this.str}</h1>
        </div>
      </div>
    )
  }
}

export default MyComp;
