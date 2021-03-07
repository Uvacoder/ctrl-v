import React, { useRef } from 'react';
import Modal from 'react-modal';
import { Password } from '../Inputs'
import {RightPad, LeftPad, ModalHeader, Padding, modalStyles, Form} from './shared'
import Error from '../Err';

const PasswordModal = (props) => {
    const ErrorLabel = useRef(null);
    Modal.setAppElement('body');

    function submitPassword(e) {
        e.preventDefault();
        const password = props.value
        props.validateCallback(password, ErrorLabel.current.showMessage)
    }

    return(
        <Modal
            isOpen={props.hasPass && !props.validPass}
            style={modalStyles}
            contentLabel="enter paste password"
        >
            <Form onSubmit={submitPassword}>
                <ModalHeader><span role="img" aria-label="warning">🚧&nbsp;</span>err: password protected</ModalHeader>
                <Password
                    value={props.value}
                    onChange={props.onChange} />
                <input className="lt-button lt-shadow lt-hover" type="submit" value="continue" />
                <Padding />
                <Error ref={ErrorLabel} />
            </Form>
        </Modal>
    );
}

export default PasswordModal