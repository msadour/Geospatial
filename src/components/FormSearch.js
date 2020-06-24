import React from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import points from '../data/points.json';

class FormSearch extends React.Component {

  constructor() {
    super();
    this.state = {
      options: []
    }
    this.onChange.bind(this);
  }

  componentDidMount() {
    points['features'].forEach(feature => {
      this.state.options.push(
        {
          coordinates: feature['geometry']['coordinates'],
          name_2: feature['properties']['NAME_2']

        }
      );
    })
  }

  onChange(e) {
    this.state.options.forEach(option => {
      if (option.name_2 === e.target.innerText) {
        localStorage.setItem('lng', option['coordinates'][0]);
        localStorage.setItem('lat', option['coordinates'][1]);
        localStorage.setItem('zoom', 11);
        window.location.reload();
      }
    })
  }

  render() {

    return (
      <div>
        <FormControl >
          <table>
            <tbody>
              <tr>
                <th>
                  <Autocomplete
                    onChange={(event) => this.onChange(event)}
                    options={this.state.options}
                    getOptionLabel={(option) => option['name_2']}
                    style={{ width: 500 }}
                    renderInput={(params) =>
                      <TextField {...params}
                      label="Search"
                      variant="outlined"
                      />}
                  />
                </th>
              </tr>
            </tbody>
          </table>

        </FormControl>
      </div>
    )
  }

}

export default FormSearch;
