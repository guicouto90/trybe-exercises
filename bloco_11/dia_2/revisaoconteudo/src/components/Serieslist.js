import React from 'react';
import Serie from './Serie';


class Serielist extends React.Component {
  render() {
    const { catalogData } = this.props;
    return (
      catalogData.map((serie) => <Serie key={ serie.id } seriesInfo={ serie } />) 
    );
  }
}

export default Serielist;
