import React from 'react';

import TextField from '@material-ui/core/TextField';

class ToolTip extends React.Component {

  render() {

    return (
      <div className='quakeInfo'>
        <table>
          <tbody>
            <tr>
              <th>
                <div>
                  <TextField
                    id="name_1"
                    value="Lander"
                    style = {{width: 300}}
                  />
                </div>
              </th>
              <th>
                <div>
                  <TextField
                    id="name_2"
                    value="Stadt"
                    style = {{width: 300}}
                  />
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default ToolTip;
