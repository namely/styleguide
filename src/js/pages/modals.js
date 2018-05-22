import React from 'react';
import Styleguide from '../styleguide';
import PropsTable from '../style_guide_components/props-table';
import Modal from '../components/overlays/modal';

export default React.createClass({

  displayName: "ModalsPage",

  getInitialState() {
    return {
      modalIsOpen: false
    }
  },

  openModal(){
    this.setState({modalIsOpen: true});
  },

  closeModal(){
    this.setState({modalIsOpen: false});
  },

  renderModal() {
    if(this.state.modalIsOpen){
      return <Modal isOpen={this.state.modalIsOpen} closeModal={this.closeModal} contentColumns={6}>
        <div className="p3">
          <h4>This is a modal</h4>
          <p>{"You can pass in some JSX, a component, etc."}</p>
          <hr />
          <button onClick={this.closeModal}>{"Close"}</button>
        </div>
      </Modal>
    }
  },

  render() {
    return <Styleguide title="Modals">
      <div title="Modals" description="The modal styles for Namely">
        <p>Wrap a component inside the modal component.</p>
        <PropsTable rows={
          [
            {
              'prop':'contentColumns',
              'description':'sets the width of the content container with columns. Default: 9'
            },
            {
              'prop':'contentHeight',
              'description':'sets the height of the content container in pixels. Optional'
            },
            {
              'prop':'contentMinHeight',
              'description':'sets the min-height of the content container in pixels. Optional'
            },
            {
              'prop':'isOpen',
              'description':'automatically opens the modal when the parent component renders. Sets modal-background\'s inital state to isOpen:true. Default: false'
            },
            {
              'prop':'disableClickBackground',
              'description':'will not call closeModal() on background click if this prop is set to true. Default: false'
            },

            {
              'prop':'zIndex',
              'description':'sets the zIndex of the modal. Default: 1000'
            },

            {
              'prop':'closeModal',
              'description':'closes the modal'
            }
          ]
        }/>
        <hr />
        <button onClick={this.openModal}>Just a button</button>
        {this.renderModal()}
      </div>
    </Styleguide>
  }
});


