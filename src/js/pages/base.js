import React from 'react';
import Styleguide from '../styleguide';
import Colors from './colors';
import Typography from './base/typography';

export default React.createClass({
  displayName: "BasePage",

  render() {
    return (
      <Styleguide title="Base Styles">
        <div title="Typography" description="Typographical settings">
          <Typography />       
        </div>

        <div title="Colors" description="Namely's Colors">
          <Colors />  
        </div>
      </Styleguide>
    );
  }
});
