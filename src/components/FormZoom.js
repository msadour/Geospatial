import React from 'react';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

class FormZoom extends React.Component {

  constructor() {
    super();
    this.onClick.bind(this);
  }


  onClick = e => {
    e.preventDefault();
    var current_zoom = parseInt(localStorage.getItem('zoom'));
    if (e.currentTarget.name === 'plus') {
      current_zoom += 1;
    } else {
      current_zoom -= 1;
    }
    localStorage.setItem('zoom', current_zoom);
    window.location.reload();
 }

  render() {

    return (
      <div>
        <FormControl >
          <table>
            <tbody>
              <tr>
                <th> Zoom : </th>
                <th> <Button name='plus' variant="contained" color="primary" disableElevation onClick={e => this.onClick(e)}>+</Button> </th>
                <th> <Button name='minus' variant="contained" color="primary" disableElevation onClick={e => this.onClick(e)}>-</Button>  </th>
              </tr>
            </tbody>
          </table>

        </FormControl>
      </div>
    )
  }

}

export default FormZoom;
