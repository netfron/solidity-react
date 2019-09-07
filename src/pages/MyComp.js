import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';

class MyComp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <div>
            <FontAwesomeIcon icon={farCircle} size="5x" />
            <FontAwesomeIcon icon={fasCircle} size="5x" />
        </div>
      </div>
    )
  }
}

export default MyComp;
