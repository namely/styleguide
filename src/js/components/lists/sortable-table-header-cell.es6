import React, { Children } from 'react';
import PropTypes from 'prop-types';

class SortableTableHeaderCell extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }


  componentWillMount() {
    const {
      actions,
      active,
      order,
      sort,
      sortKey
    } = this.props;

    if (active) {
      // assigns values to "sort" if they don't exist yet
      Object.assign(sort, {
        key: sort.key || sortKey,
        order: sort.order || order
      });

      actions.sort(sort);
    }
  }

  // sets classes for arrows, utility classes, etc
  setClassName() {
    const classes = [],
      {
        sort,
        sortKey,
      } = this.props;

    // some header cells might not be sortable, so check for the sortKey prop
    if (sortKey) {
      classes.push('pointer');
    }

    classes.push(this.props.className);

    return classes.join(' ')
  }

  handleClick() {
    const {
      actions,
      sortKey
    } = this.props;

    if (sortKey) {
      var sort = {
        key: sortKey,
        order: this.handleOrder()
      }

      actions.sort(sort);
    }
  }

  handleOrder() {
    const {
      order,
      sort,
      sortKey
    } = this.props;

    if (sort.key === sortKey) {
      return sort.order === "asc" ? "desc" : "asc";
    } else {
      return order
    }
  }

  renderArrow() {
    let icon = "arrow-double";
    const {
      sort,
      sortKey,
    } = this.props;

    // check if this is a sortable column
    if (sortKey) {
      // check if this is the currently sorted column
      if (sort.key === sortKey) {
        // check the direction
        icon = (sort.order === 'desc') ? 'arrow-down' : 'arrow-up';
      }
      return <span className={`ml1 blue-50 small pointer icon-${icon}`} ></span>;
    }
  }

  renderCellContent() {
    const children = [];

    Children.forEach(this.props.children, function(child) {
      children.push(child);
    });

    return (
      <span className="flex flex-center">
        {children[0]}
        {this.renderArrow()}
        {children.slice(1)}
      </span>
    );
  }

  render() {
    return (
      <th className={this.setClassName()} style={this.props.style} onClick={this.handleClick}>
        {this.renderCellContent()}
      </th>
    );
  }
};

SortableTableHeaderCell.displayName = "SortableTableHeaderCell";

SortableTableHeaderCell.propTypes = {
  order: PropTypes.string,
  sortKey: PropTypes.string,
  active: PropTypes.bool
};


SortableTableHeaderCell.defaultProps = {
  active: false,
  order: "asc"
};

export default SortableTableHeaderCell;
