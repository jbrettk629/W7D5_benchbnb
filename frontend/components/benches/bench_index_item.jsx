import React from 'react';

const BenchIndexItem = ({ bench }) => {

  return (
    <div>
      <li>{bench.description}</li>
    </div>
  );
};

export default BenchIndexItem;
