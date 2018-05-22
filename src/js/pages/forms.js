import {
  SelectField,
  CheckboxField,
  FileField,
  NumberField,
  RadioField,
  TextField,
  TextAreaField
} from '../components/forms/fields/index';
import EditLabel from '../components/forms/edit-label';
import Moment from 'moment';
import React from 'react';
import Styleguide from '../styleguide';

var options = [
  { value: 'london', label: 'London' },
  { value: 'newyork', label: 'New York' },
  { value: 'chicago', label: 'Chicago' },
  { value: 'san_francisco', label: 'San Francisco' }
];

var simpleSelectOptions1 = ['London', 'New York', 'Chicago', 'San Francisco'];

var simpleSelectOptions2 = {
  10: 'London',
  15: 'New York',
  25: 'Chicago' ,
  50: 'San Francisco'
};

function _onChange(val) {
  console.log(val);
}

function _onFocus() {
  console.log("Focus");
}

export default React.createClass({
  displayName: "FormsPage",

  getInitialState() {
    return {
      editLabel: "Label",
      simpleSelect1Value: null,
      simpleSelect2Value: null,
      simpleSelect3Value: 15,
      simpleSelect4Value: 25,
      simpleSelect5Value: null
    };
  },

  pushPullToday(offset) {
    var d = new Date();
    return new Date(d.setDate(d.getDate()+offset));
  },

  onSimpleSelect1Change(value) {
    this.setState({simpleSelect1Value: value})
  },

  onSimpleSelect2Change(value) {
    this.setState({simpleSelect2Value: value})
  },

  onSimpleSelect3Change() {
    this.setState({simpleSelect3Value: this.refs.simpleSelect3.value()})
  },

  onSimpleSelect4Change() {
    this.setState({simpleSelect4Value: this.refs.simpleSelect4.value()})
  },

  onSimpleSelect5Change() {
    this.setState({simpleSelect5Value: this.refs.simpleSelect5.value()})
  },

  _onSave(value) {
    this.setState({ editLabel: value });
  },

  _onDelete() {
    console.log("Not able to delete right now.");
  },

  _onPick(val) {
    console.log(val, this.refs.firstPicker.value());
  },

  _onSelectChange(val) {
    console.log(val, this.refs.firstSelect.value());
  },

  _validate(val) {
    return val.length;
  },

  render() {
    return <Styleguide title="Forms Styles">
        <div title="Forms">
          <form className="clearfix">
            <hr />
            <p>Default fields</p>
            <TextField label="Text" placeholder="Placeholder" extraClasses={['py2']} name="firstText" onChange={_onChange} onFocus={_onChange} defaultValue="Test" readOnly={true} />
            <NumberField label="Number" extraClasses={['py2']} units="Units" onChange={_onChange} name="firstNumber"  />
            <div className='clearfix'></div>
            <div className="py2">
              <label className="px2 mb1">Native Select</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <SelectField 
              label="React Select" 
              options={simpleSelectOptions1} 
              placeholder="- Select -" 
              includeBlank={true}
              extraClasses={['py2']} 
              onChange={this._onSelectChange}  
              ref="firstSelect" 
              name="firstSelect" 
              required={true}
            />
            <TextAreaField name="textarea" label="Textarea" extraClasses={['py2']} onChange={_onChange} onBlur={_onChange} placeholder="Some placeholder text" />
            <TextAreaField name="textarea" label="Textarea Expandable" expandable={true} extraClasses={['py2']} onChange={_onChange} />
            <CheckboxField 
              label="Checkbox" 
              extraClasses={['py2']} 
              name="firstCheck" 
              onChange={_onChange} 
              options={['test1', 'test2']}
              defaultValue={['test1']}
            />
            <CheckboxField 
              label="Checkbox With Object of Options" 
              extraClasses={['py2']} 
              name="firstCheckOptionsObject" 
              onChange={_onChange} 
              options={{
                'test1': 'Testing', 
                'test2': 'Testing Again'
              }}
              defaultValue={['test1']}
            />
            <CheckboxField 
              label="Checked read-only" 
              readOnly={true}
              name="check"
              extraClasses={['py2']}
              options={['test1', 'test2']}
              defaultValue={["test1"]}
            />
            <RadioField 
              name="radios1" 
              label="Radios" 
              extraClasses={['py2']}
              onChange={_onChange}
              options={['Radio 1', 'Radio 2']}
            />

            <p className="mt4">Disabled fields</p>
            <TextField name="text" label="Text" placeholder="Placeholder" disabled={true} extraClasses={['py2']} />
            <NumberField name="number" label="Number" disabled={true} extraClasses={['py2']} />
            <div className='clearfix'></div>
            <div className="py2">
              <label className="px2 mb1">Native Select</label>
              <select disabled={true}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <SelectField name="select" label="Simple Select" options={simpleSelectOptions1} disabled={true} extraClasses={['py2']}/>
            <TextAreaField name="textarea" label="Textarea"  disabled={true} extraClasses={['py2']} />
            <CheckboxField 
              label="Checkbox" 
              name="check"
              extraClasses={['py2']} 
              options={['test1']}
              disabled={true}
            />
            <RadioField 
              name="radios2" 
              label="Radios" 
              extraClasses={['py2']}
              options={['Radio 1', 'Radio 2']}
              disabled={true}
            />

            <p className="mt4">Fields within fieldset</p>
            <fieldset className="fieldset bg-grey-10 p3 rounded-3">
              <p>Default fields</p>
              <TextField name="text" label="Text" placeholder="Placeholder" extraClasses={['py2']}/>
              <NumberField name="number" label="Number" extraClasses={['py2']} units="Units" />
              <div className='clearfix'></div>
              <div className="py2">
                <label className="px2 mb1">Native Select</label>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <SelectField name="select" label="Simple Select" options={simpleSelectOptions1} promptText="- Select -" extraClasses={['py2']}/>
              <TextAreaField name="textarea" label="Textarea" extraClasses={['py2']}/>
              <CheckboxField 
                label="Checkbox" 
                extraClasses={['py2']} 
                name="firstCheck" 
                onChange={_onChange} 
                options={['test1', 'test2']}
              />
              <CheckboxField 
                label="Checked read-only" 
                name="check"
                readOnly={true}
                extraClasses={['py2']}
                options={['test1', 'test2']}
                defaultValue={["test1"]}
              />
              <RadioField 
                name="radios3" 
                label="Radios" 
                extraClasses={['py2']}
                options={['Radio 1', 'Radio 2']}
              />
              <hr />
              <p>Disabled fields</p>
              <TextField name="textfield" label="Text" placeholder="Placeholder" disabled={true} extraClasses={['py2']} />
              <NumberField name="number" label="Number" disabled={true} extraClasses={['py2']} />
              <div className='clearfix'></div>
              <div className="py2">
                <label className="px2 mb1">Native Select</label>
                <select disabled={true}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <SelectField name="select" label="Simple Select" options={simpleSelectOptions1} disabled={true} extraClasses={['py2']}/>
              <TextAreaField name="textarea" label="Textarea" disabled={true} extraClasses={['py2']} />
              <CheckboxField 
                label="Checkbox" 
                extraClasses={['py2']} 
                name="firstCheck" 
                onChange={_onChange} 
                options={['test1', 'test2']}
              />
              <CheckboxField 
                label="Checked read-only" 
                readOnly={true}
                extraClasses={['py2']}
                options={['test1', 'test2']}
                defaultValue={["test1"]}
                name="checkbox"
              />
              <RadioField 
                name="radios2" 
                label="Radios" 
                extraClasses={['py2']}
                options={['Radio 1', 'Radio 2']}
                disabled={true}
              />
            </fieldset>

            <p className="mt4">Fields within tooltip</p>
            <div className="tooltip rounded-3 p2 bg-blue-95">
              <p className="grey-10">Default fields</p>
              <TextField name="text" label="Text" placeholder="Placeholder" extraClasses={['py2']}/>
              <NumberField name="number" label="Number" extraClasses={['py2']} units="Units" />
              <div className='clearfix'></div>
              <div className="py2">
                <label className="px2 mb1">Native Select</label>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <SelectField name="select" label="Simple Select" options={simpleSelectOptions1} promptText="- Select -" extraClasses={['py2']}/>
              <TextAreaField name="text" label="Textarea" extraClasses={['py2']}/>
              <CheckboxField 
                label="Checkbox" 
                extraClasses={['py2']} 
                name="firstCheck" 
                onChange={_onChange} 
                options={['test1', 'test2']}
              />
              <CheckboxField 
                label="Checked read-only" 
                readOnly={true}
                extraClasses={['py2']}
                options={['test1', 'test2']}
                defaultValue={["test1"]}
                name="checkbox"
              />
              <RadioField 
                name="radios4" 
                label="Radios" 
                extraClasses={['py2']}
                options={['Radio 1', 'Radio 2']}
              />
              <hr />
              <p className="grey-10">Disabled fields</p>
              <TextField name="text" label="Text" placeholder="Placeholder" disabled={true} extraClasses={['py2']} />
              <NumberField name="number" label="Number" disabled={true} extraClasses={['py2']} />
              <div className='clearfix'></div>
              <div className="py2">
                <label className="px2 mb1">Native Select</label>
                <select disabled={true}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <SelectField name="select" label="Simple Select" options={simpleSelectOptions1} disabled={true} extraClasses={['py2']}/>
              <TextAreaField name="area" label="Textarea" disabled={true} extraClasses={['py2']} />
              <CheckboxField 
                label="Checkbox" 
                extraClasses={['py2']} 
                name="firstCheck" 
                onChange={_onChange} 
                options={['test1', 'test2']}
              />
              <CheckboxField 
                label="Checked read-only" 
                readOnly={true}
                extraClasses={['py2']}
                options={['test1', 'test2']}
                defaultValue={["test1"]}
                name="check"
              />
              <RadioField 
                name="radios2" 
                label="Radios" 
                extraClasses={['py2']}
                options={['Radio 1', 'Radio 2']}
                disabled={true}
              />
            </div>

            <hr />
          </form>
          <hr />
        </div>

        <div title="Simple Select">
          <p>A very simple select component without the bells and whistles.  Meant for use in place of an html select.</p>
          <div className="mb3">
            <h3>Options as an array</h3>
            <div className="py1 mb2">
              <code className="language-javascript overflow-scroll">
               ["London","New York","Chicago","San Francisco"]
              </code>
            </div>
            <SelectField
              onChange={this.onSimpleSelect1Change}
              name='city'
              ref='simpleSelect1'
              options={simpleSelectOptions1}
              placeholder="- Select City -"/>
            <p className='py2'>selected value: {this.state.simpleSelect1Value}</p>
          </div>
          <div className="mb3">
            <h3>Options as an object</h3>
            <div className="py1 mb2">
              <code className="language-javascript overflow-scroll">
               {'{10:"London", 15:"New York", 25:"Chicago", 50:"San Francisco"}'}
              </code>
            </div>
            <SelectField
              onChange={this.onSimpleSelect2Change}
              name='city'
              ref='simpleSelect2'
              options={simpleSelectOptions2}
              placeholder="- Select -"/>
            <p className='py2'>selected value: {this.state.simpleSelect2Value}</p>
          </div>
          <div className="mb3">
            <h3>Selected value</h3>
            <p>New York is selected</p>
            <SelectField
              onChange={this.onSimpleSelect3Change}
              defaultValue={this.state.simpleSelect3Value}
              name='city'
              ref='simpleSelect3'
              options={simpleSelectOptions2}
              placeholder="- Select -"/>
            <p className='py2'>selected value: {this.state.simpleSelect3Value}</p>
          </div>
          <div className="mb3">
            <h3>Errors</h3>
            <p>With an error</p>
            <SelectField
              name='city'
              onChange={this.onSimpleSelect4Change}
              errors={["That's no good!"]}
              options={simpleSelectOptions2}
              placeholder="- Select -"
              ref='simpleSelect4'
              defaultValue={this.state.simpleSelect4Value}/>
            <p className='py2'>selected value: {this.state.simpleSelect4Value}</p>
          </div>
          <div className="mb3">
            <h3>Include a blank option</h3>
            <SelectField
              includeBlank={true}
              onChange={this.onSimpleSelect5Change}
              name='city'
              ref='simpleSelect5'
              options={simpleSelectOptions2}
              placeholder="- Select -"/>
            <p className='py2'>selected value: {this.state.simpleSelect5Value}</p>
          </div>
        </div>

        <div title="Actionable Forms">
          <hr />
          <h3>EditLabel</h3>
          <p>An interactive component for changing the text of a label, i.e. Folder Names.</p>
          <EditLabel
            label={this.state.editLabel}
            placeholder="Folder Name"
            onSave={this._onSave}
            onDelete={this._onDelete}
            isValid={this._validate}
            errorMessage="Folder Name Already In Use"
          >
            <p className="clearfix small">Do you want to delete "{this.state.editLabel}"?</p>
          </EditLabel>

          <pre><code className="language-javascript overflow-scroll mt3">
          {'<EditLabel label={this.state.editLabel} placeholder="Folder Name" onSave={this._onSave} onDelete={this._onDelete} isValid={this._validate} errorMessage="Folder Name Already In Use" >\n'}
          {'\t<p className="clearfix small">Do you want to delete "{this.state.editLabel}"?</p>\n'}
          {'</EditLabel>'}
          </code></pre>

          <h3 className="mt4">File Input</h3>
          <p className="small">An interactive file component with file name preview.</p>
          <FileField name="firstFile" buttonText="Upload File" icon="upload" onChange={_onChange} />

          <div className="mt3">
            <FileField buttonText="Upload File" onChange={_onChange} label="Another File" name="fileRequired" required={true} />
          </div>

          <div className="mt3">
            <FileField 
              accept="image/png, image/jpeg, image/gif"
              buttonText="Pick An Image" 
              buttonClasses={["button-link", "pointer"]} 
              icon="paperclip" 
              onChange={_onChange} 
              label="Only Images Allowed" 
              name="fileOnlyImages" 
            />
          </div>
        </div>
      </Styleguide>
  }
});
