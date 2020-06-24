import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class FormColorPoint extends React.Component {

  constructor() {
    super();
    this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    localStorage.setItem('circle_color', e.target.value);
    window.location.reload();
 }

  render() {

    return (
      <div>
        <FormControl >
          <table>
            <tbody>
              <tr>
                <th> Point color : </th>
                <th>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    name="colors"
                    id="colors"
                    onChange={this.onChange}
                  >
                    <MenuItem value="#DF0101"></MenuItem>
                    <MenuItem value="#0404B4">Blue</MenuItem>
                    <MenuItem value="#DF0101">Red</MenuItem>
                    <MenuItem value="#FFFF00">Yellow</MenuItem>
                    <MenuItem value="#000000">Black</MenuItem>
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

export default FormColorPoint;
