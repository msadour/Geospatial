import React from 'react';
import mapboxgl from 'mapbox-gl';

import states from '../data/states.json';
import points from '../data/points.json';

mapboxgl.accessToken = 'pk.eyJ1IjoibXNhZG91ciIsImEiOiJja2JtOXEyaHUwbjVnMnVyNThhZzV2bzkwIn0.EtKEswwn7fqWXV2cykBxaQ';

class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lng: localStorage.getItem('lng') || 9.827447143358462,
      lat: localStorage.getItem('lat') || 51,
      zoom: localStorage.getItem('zoom') || 5,
      map_color: localStorage.getItem('map_color') || '#0BEF0F',
      circle_color: localStorage.getItem('circle_color') || '#B42222',
    };
  }

  componentDidMount() {
    var map_color = this.state.map_color;
    var circle_color = this.state.circle_color;

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('load', function() {
      map.addSource('main', {
        'type': 'geojson',
        'data': states,
      });

      map.addSource('point', {
        'type': 'geojson',
        'data': points,
      });

      map.addLayer({
          'id': 'map',
          'type': 'fill',
          'source': 'main',
          'layout': {},
          'paint': {
          'fill-color': map_color,
          'fill-opacity': 0.3
          }
      });

      map.addLayer({
      'id': 'point',
      'type': 'circle',
      'source': 'point',
      'paint': {
        'circle-radius': 6,
        'circle-color': circle_color
        },
      'filter': ['==', '$type', 'Point']
      });

    });

  var quakeID = null;
  var name_1 = document.getElementById('name_1');
  var name_2 = document.getElementById('name_2');

  map.on('mousemove', 'point', (e) => {
    map.getCanvas().style.cursor = 'pointer';
    var name_1_content = e.features[0].properties.NAME_1;
    var name_2_content = e.features[0].properties.NAME_2;

    if (e.features.length > 0) {
      name_1.value = name_1_content;
      name_2.value = name_2_content;

      if (quakeID) {
        map.removeFeatureState({
          'source': "point",
          'id': quakeID
        });
      }

      quakeID = e.features[0].layer['id'];

      map.setFeatureState({
        'source': 'point',
        'id': quakeID,
      }, {
        hover: true
      });

    }
  });

  map.on("mouseleave", "point", function() {
    if (quakeID) {
      map.setFeatureState({
        source: 'point',
        id: quakeID
      }, {
        hover: false
      });
    }

    quakeID = null;
    name_1.value = '';
    name_2.value = '';

    map.getCanvas().style.cursor = '';
  });

 }


  render() {

      return (
        <div>
          <div id="map" />

        </div>
      )
  }

}

export default Map;
