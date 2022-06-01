import React from 'react';
import createClass from 'create-react-class';

export default createClass({
  displayName: "Styleguide",

  listComponentTitles() {
    let children = this.props.children;

    children = (React.Children.count(children) == 1) ? [children] : children;

    return React.Children.map(children, function (child) {
      let title = child.props.title.replace(" ", "-");

      return (
        <li className="py1 blue-70">
          <a href={"#" + title}>{child.props.title}</a>
        </li>
        )
    });

  },

  renderExample() {
    if(this.props.example) {
      return (
        <div className="styleguide-components-component-code">
          <pre>
            <code className={this.props.codeClassName ? this.props.codeClassName : "language-javascript"}>
              {this.props.example}
            </code>
          </pre>
        </div>
        );
    }

  },

  listComponents() {
    let children = this.props.children;

    children = (React.Children.count(children) == 1) ? [children] : children;

    return React.Children.map(children, (child) => {
      let title = child.props.title.replace(" ", "-");

      return (
        <div className="styleguide-components-component py3" id={title}>
          <h2 className="styleguide-components-component-title">{child.props.title}</h2>
          <p className="styleguide-components-component-description">{child.props.description}</p>
          <div className="styleguide-components-component-example">
            {child.props.children}
            {this.renderExample()}
          </div>
        </div>
        );

    });
  },

  render() {

    return (
      <div className="styleguide flex tall">
        <div className="styleguide-sidebar col-2 py5 px3 br bw-1 bc-grey-15">
          <div className="styleguide-sidebar-title grey-15 py2">{this.props.title}</div>
          <div className="styleguide-sidebar-list list-reset">{this.listComponentTitles()}</div>
        </div>
        <div id="styleguide-components" className="styleguide-components col-10 flex-auto overflow-scroll p4">{this.listComponents()}</div>
      </div>
      )
  }
});
