import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app'); // added due to an API change for v3.1.7

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={200}
        className="modal">
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;