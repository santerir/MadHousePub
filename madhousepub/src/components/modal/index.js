import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useEffect } from 'react'

import ruksi from './assets/ruksi.png'
import { Cls } from './assets/close.js'

import styles from './style.scss'
import state from './state.js'


const _ModalContent = ({ children }) => (
    <div className={[styles["modal-content"]].join(' ')}>
        {children}
    </div>
)

class Modal_base extends Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        close: PropTypes.func,
        modalId: PropTypes.string,
        closable: PropTypes.bool,
        flex: PropTypes.bool,
    }

    static defaultProps = {
        isOpen: false
    }

    constructor(props) {
        super(props)
    }


    render() {
        const { isOpen, children, close, modalId, closable, flex } = this.props

        return (
            <span>
                {isOpen &&
                    <div id={modalId} className={[styles["modal-container"], flex ? styles["modal-container-flex"] : "", "modal-container"].join(' ')}>
                        {closable &&
                            <button className={"modal-button-close"} onClick={close}> <Cls /> </button>
                        }
                        <div className="modal-content">
                            {children}
                        </div>
                    </div>
                }
            </span>)
    }

}


const Modal__Connected = ({ modalId, isOpen, close, children, register, closable, ...props }) => {


    const closeThis = () => {
        close(modalId)
    }

    useEffect(() => {
        register(modalId);
    }, [])

    return (
        <Modal_base modalId={modalId} close={closeThis} isOpen={isOpen} closable={closable} {...props}>
            {children}
        </Modal_base>
    )
}

Modal__Connected.propTypes = {
    modalId: PropTypes.string.isRequired,
    closable: PropTypes.bool,
    isOpen: PropTypes.bool
}


const mapStateToProps = (state, ownProps) => {
    const { modalId } = ownProps

    return {
        isOpen: state.modal.isOpen[modalId],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        close: (id) => dispatch(state.actions.modal__close(id)),
        register: (id) => dispatch(state.actions.modal__register(id))
    }
}

export const Modal = connect(mapStateToProps, mapDispatchToProps)(Modal__Connected)

export const Modal_state = state;

export const ModalContent = _ModalContent;

export default Modal;
