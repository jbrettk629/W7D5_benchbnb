import React from 'react';
import BenchIndexItem from './bench_index_item';

class Benches extends React.Component {
  componentDidMount(){
    this.props.fetchBenches();
  }

  render(){

    const benches = this.props.benches.map( bench => {

      return (
        <BenchIndexItem key={bench.id} bench={bench} />
      );
    });

    return(
      <div>
        <ul>
          {benches}
        </ul>
      </div>

    );
  }
}

export default Benches;
