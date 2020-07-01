import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { modal__open, modal__close } from '../modal/state'

const ModalButton__Connected = ({ modalId, open, close, active, children }) => {

    const callback = () => {
        if (active) {
            return close()
        }

        return open()
    }

    return (
        <button id={`${modalId}-button`} onClick={callback} active={active} className={active ? "active modal-button" : "non-active modal-button"}>
            {children}
        </button>
    )
}

ModalButton__Connected.propTypes = {
    modalId: PropTypes.string.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.modal.isOpen[ownProps.modalId],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // dispatching plain actions
        open: () => dispatch(modal__open(ownProps.modalId)),
        close: () => dispatch(modal__close(ownProps.modalId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalButton__Connected)

