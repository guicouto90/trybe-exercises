import React from 'react';
import { Link } from 'react-router-dom';

class Solution extends React.Component {
  render() {
    const { match: { params: { exerciseId } } } = this.props;
    return (
      <section>
          <h1>{ exerciseId }</h1>
      </section>

    );
  }
}

export default Solution;
