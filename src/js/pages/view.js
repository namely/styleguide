import React from 'react';
import createClass from 'create-react-class';
import Styleguide from '../styleguide';
import PropsTable from '../style_guide_components/props-table';

import ViewStore from '../components/view/stores/view-store';
import ViewActions from '../components/view/actions/view-actions';

import Button from '../components/buttons/button';
import ButtonGroup from '../components/buttons/button-group';

const {
  actionBarEnter,
  actionBarExit,
  createActionBar,
  loading,
  scrollListenTo,
  toggleActionBar,
} = ViewActions;

const actionBar = () => createActionBar({

  title: "Lorem Ipsum",
  subtitle: "A subtitle",
  description: "Lorem Ipsum Description",
  actions: [
    <Button label="Dismiss" onClick={toggleActionBar} type="danger" />,
  ],

});


export default createClass({

  displayName: "ViewPage",

  getInitialState() {
    return {
      loading: false,
    };
  },

  componentDidMount() {
    actionBarExit(50);
    ViewStore.listen(this.onChange);
    scrollListenTo(document.getElementById('styleguide-components'));
  },

  componentWillUnmount() {
    ViewStore.unlisten(this.onChange);
  },

  onChange(state){
    this.setState({loading: state.loading});
  },

  toggleLoading() {
    loading(!this.state.loading);
  },

  render() {

    return (
      <Styleguide title="View">

        <div title="View Component" description="Higher order component to control a global loading state and ActionBar component">
          <p>The View Component will allow access to common functions across all rendered pages for flash messaging and fixed UI components.</p>
          <hr />
        </div>


        <div title="ActionBar" description="A toolbar that contains context and controls that perform actions related to objects in the screen or view.">

          <div className="mt5">
            <h4>ActionBar Properties</h4>
            <p>ActionBar properties are set as a state in the ViewStore. The state is passed down to the ActionBar Component automatically.</p>
            <PropsTable rows={
                [
                  {
                    'prop':'use',
                    'description':'boolean - determines if ActionBar should be used on page'
                  },
                  {
                    'prop':'title',
                    'description':'string - sets the title'
                  },
                  {
                    'prop':'subtitle',
                    'description':'string - sets the subtitle'
                  },

                  {
                    'prop':'description',
                    'description':'string - sets the description'
                  },

                  {
                    'prop':'actions',
                    'description':'arrayOf Button - accepts an array of Buttons to render'
                  },

                  {
                    'prop':'visible',
                    'description': 'boolean - determines if  currently showing on page'
                  },

                  {
                    'prop':'scroll',
                    'description': 'object - contains properties for a scroll listener to determine visibility state'
                  }
                ]
            }/>
          </div>


          <div className="mt5">
            <h4>[ViewActions] - ActionBar Functions</h4>
            <p>The View Component's actions control the properties of the ActionBar</p>
            <PropsTable keyLabel="ViewActions.*" rows={
                  [
                    {
                      'prop':'createActionBar(object)',
                      'description':'Creates new ActionBar and sets properties. Example: createActionBar({title: "Lorem Ipsum"})'
                    },

                    {
                      'prop':'actionBarEnter(integer)',
                      'description':'Manually set scroll enter (from top) value. Default: 500'
                    },

                    {
                      'prop':'actionBarExit(integer)',
                      'description':'Manually set scroll exit (from bottom) value. Default: 250'
                    },

                    {
                      'prop':'scrollListenTo(element)',
                      'description':'Manually set the scroll listener element. Default: document.body'
                    },

                    {
                      'prop':'toggleActionBar()',
                      'description': 'Toggles visibilty.'
                    },

                    {
                      'prop':'flush()',
                      'description': 'Resets to default state.'
                    }
                  ]
            }/>
          </div>

          <div className="mt5">

            <h4>Example</h4>
            <code>{'const actionBar = () => createActionBar({' }</code><br/>
              <code className="ml2">{'title: "Lorem Ipsum",' }</code><br/>
              <code className="ml2">{'subtitle: "A subtitle",' }</code><br/>
              <code className="ml2">{'description: "Lorem Ipsum Description",' }</code><br/>
              <code className="ml2">{'actions: [' }</code><br/>
                <code className="ml4">{'<Button label="Dismiss" onClick={toggleActionBar} type="danger" />,' }</code><br/>
              <code className="ml2">{'],' }</code><br/>
            <code>{'});' }</code><br/><br/>
            <code>{'<Button label="Create ActionBar" onClick={actionBar} />' }</code><br/>


            <ButtonGroup>
              <Button label="Create ActionBar" onClick={actionBar} />
            </ButtonGroup>

          </div>

          <hr />
        </div>


        <div title="MessageBar" description="A bar that displays important, flash information about the current view and environment">
          <h5>~ work in progress ~</h5>

          <h4 className="mt5">Roadmap</h4>

          <ul>
            <li>Define MessageBar styles</li>
            <li>Build MessageBar React component</li>
            <li>Abstract ViewStore into separate stores for both ActionBar and MessageBar</li>
          </ul>

          <hr />
        </div>

        <div title="Loading" description="A global page loading state.">

          <p>The view component has a <code>loading</code> state set to <code>false</code> by default.</p>
          <h4 className="mt5">Example</h4>

          <code>{this.state.loading ? "Loading..." : "Not Loading"}</code><br/><br/>

          <code>...</code><br/>

          <code>{'toggleLoading() {'}</code><br/>
            <code className="ml2">{'loading(!this.state.loading);'}</code><br/>
          <code>{'},'}</code><br/>

          <code>...</code><br/><br/>

          <code>{'<Button label={this.state.loading ? "Stop Loading" : "Start Loading"} type={this.state.loading ? "danger" : null} onClick={this.toggleLoading} />'}</code>

          <ButtonGroup>
            <Button label={this.state.loading ? "Stop Loading" : "Start Loading"} type={this.state.loading ? "danger" : null} onClick={this.toggleLoading} />
          </ButtonGroup>

          <hr/>
        </div>

      </Styleguide>
    );
  }
});
