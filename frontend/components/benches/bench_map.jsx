import React from 'react';
import MarkManager from '../../util/mark_manager';

class BenchMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkManager = new MarkManager(this.map);
    this.MarkManager.updateMarkers();
  }

  componentDidUpdate(){
    this.MarkManager.updateMarkers();
  }

  render(){
    return(
      <div id='map-container' ref={ map => this.mapNode = map}>

      </div>

    );

  }

}

export default BenchMap;
