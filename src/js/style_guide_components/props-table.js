import React from 'react';

export default React.createClass({

  displayName: "PropsTable",

  render() {
    return  <table>
        <thead><tr><th>{this.props.keyLabel || "prop"}</th><th>{"what it does"}</th></tr></thead>
        <tbody>
          {this.props.rows.map((row, index) =>
            <tr key={index}>
              <td><code className="language-javascript">{row.prop}</code></td>
              <td>{row.description}</td>
            </tr>
          )}
        </tbody>
      </table>

  }
});
