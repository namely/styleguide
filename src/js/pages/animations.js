import React from 'react';
import createClass from 'create-react-class';
import Styleguide from '../styleguide';

export default createClass({
  displayName: "AnimationsPage",

  render() {
    return (
      <Styleguide title="Base Styles">
        <div title="Animations" description="Animations">
          <div className="container">
            <div className="col-2">
              <code className="language-css">.anim-fade</code>
            </div>
            <div className="col-2"><p className="anim-fade">Fade</p></div>
            <div className="col-2">
              <code className="language-css">.anim-drop</code>
            </div>
            <div className="col-2"><p className="anim-drop">Drop</p></div>
          </div>
        </div>
      </Styleguide>
    );
  }
});
