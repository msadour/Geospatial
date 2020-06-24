import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class FormColorMap extends React.Component {

  constructor() {
    super();
    this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    localStorage.setItem('map_color', e.target.value);
    window.location.reload();
 }

  render() {

    return (
      <div>
        <FormControl >
          <table>
            <tbody>
              <tr>
                <th> Map color : </th>
                <th>
                  <Select
                    labelId="demo-controlled-open-select-label" 
                    name="colors"
                    id="colors"
                    onChange={this.onChange}
                  >
                    <MenuItem value="#58FA58"></MenuItem>
                    <MenuItem value="#58FA58">Green</MenuItem>
                    <MenuItem value="#FA58F4">Pink</MenuItem>
                  </Select>
                </th>
              </tr>
            </tbody>
          </table>

        </FormControl>
      </div>
    )
  }

}

export default FormColorMap;
