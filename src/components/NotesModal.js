import React from 'react';
//import Steps from './Steps'
import './css/Item.css';

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class NotesModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
  }
  onTextChange(event) {
    //every time the user types a new letter, the state is changed to the current input
    this.setState({text: event.target.value});
  }

  openModal (){
    this.setState({
      isOpen: true
    });
    
  };

  hideModal(){
    this.setState({
      isOpen: false
    });
  };
  onSubmit(){
    console.log("submitted")
    this.hideModal();
  }

  render() {
    let subModalDialogStyles = {
      base: {
        bottom: -600,
        transition: 'bottom 0.4s'
      },
      open: {
        bottom: 0
      }
    };
    let {isOpen, isSubOpen} = this.state;
    //console.log("directions are:",this.props.item.directions)
    return (
        <div>
          <button className='list-location-button' onClick={this.openModal.bind(this)}>Notes</button>
          <Modal isOpen={isOpen} size="modal-lg" onRequestHide={this.hideModal.bind(this)}>
            <ModalHeader >
              <div className='black-notes'>Notes on {this.props.item.name}</div>
              <ModalClose onClick={this.hideModal.bind(this)}/>
            </ModalHeader>
              <div className='modal-inside'>
                Test test{this.props.item.notes}
              </div>
              <ModalFooter>
                &nbsp; What do you have to say about {this.props.item.name}? &nbsp;
                <input 
                onChange={this.onTextChange.bind(this)} 
                className='modal-input' 
                type="text" 
                id="group-name"/>
                <button className='list-location-button modal-button' onClick={this.onSubmit.bind(this)}>Submit</button>
              </ModalFooter>
            </Modal>
        </div>
    );
  }
}

export default NotesModal;