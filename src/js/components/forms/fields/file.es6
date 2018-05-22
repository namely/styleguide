import assign from 'lodash.assign';
import React from 'react';
import { fieldProps, FieldBase} from './base.es6';
import omit from '../../utils/omit';

const {
  Children,
  PropTypes : Type,
} = React;

class FileField extends FieldBase {

  constructor() {
    super();

    this.handleRemove = this.handleRemove.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      previewing: false,
      fileName: null
    };
  }

  onChange(e) {
    this.file = e.target.files[0];
    const fileName = this.file.name;

    this.setState({
      fileName: fileName,
      previewing: true
    });

    this.handleChange(this.file);
  }

  handleRemove(e) {
    this.file = null;
    this.setState({
      fileName: null,
      previewing: false
    });

    this.handleChange(null);
  }

  contents() {
    const spreadProps = omit(this.props, 'onChange', 'buttonClasses', 'buttonText', 'errors');

    if (this.state.previewing) {
      return (
        <div className="bg-grey-5 grey-75 px2 py1 inline-block rounded-2">
          <div className="flex flex-center">
            <span className="small mb0">{this.state.fileName}</span>
            <span className="inline-block icon-delete blue-50 small mb0 ml2 pointer" onClick={this.handleRemove}></span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <label htmlFor={this.props.name} className={this.props.buttonClasses.join(' ')}>
            {this.props.icon ? <span className={`icon-${this.props.icon} mr1`}></span> : null}
            {this.props.buttonText}
          </label>
          <input
            type="file"
            onChange={this.onChange}
            id={this.props.name}
            style={{height: 0, opacity: 0, width:0}}
            {...spreadProps} />
        </div>
      );
    }
  }
};

FileField.displayName = "FileField";

FileField.propTypes = assign({
  buttonClasses: Type.array,
  buttonText: Type.string,
  icon: Type.string
}, fieldProps);

FileField.defaultProps = assign({
  buttonClasses: ["button-secondary", "white", "rounded-2", "p1", "pointer"],
  buttonText: "Upload File"
}, FieldBase.defaultProps);

export default FileField;
