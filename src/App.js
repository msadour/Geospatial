import React from 'react';
import mapboxgl from 'mapbox-gl';

import FormColorPoint from './components/FormColorPoint.js';
import FormColorMap from './components/FormColorMap.js';
import ToolTip from './components/ToolTip.js';
import FormZoom from './components/FormZoom.js';
import FormSearch from './components/FormSearch.js';
import Map from './components/Map.js';

import './App.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibXNhZG91ciIsImEiOiJja2JtOXEyaHUwbjVnMnVyNThhZzV2bzkwIn0.EtKEswwn7fqWXV2cykBxaQ';

class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('map_color') == null){
      localStorage.setItem('map_color', '#0BEF0F');
    }
    if (localStorage.getItem('circle_color') == null){
      localStorage.setItem('circle_color', '#B42222');
    }
    if (localStorage.getItem('zoom') == null){
      localStorage.setItem('zoom', 5);
    }

    if (localStorage.getItem('lng') == null){
      localStorage.setItem('lng', 9.827447143358462);
    }

    if (localStorage.getItem('lat') == null){
      localStorage.setItem('lat', 51);
    }
  }


    render() {

        return (
          <div>
            <table>
              <tbody>
                <tr>
                  <th><FormColorMap /></th>
                  <th><FormColorPoint /> </th>
                  <th> <FormZoom /></th>
                  <th> <FormSearch /></th>
                  <th> <ToolTip /></th>
                </tr>
              </tbody>
            </table>
            <Map />
          </div>
        )
    }

}

export default App;
