import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'styles/modal.css'

const modalRoot = document.getElementById('modal')
const appRoot = document.getElementById('root')

class Modal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
    appRoot.classList.add("modal-root")
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
    appRoot.classList.remove("modal-root")
  }

  render() {
    return ReactDOM.createPortal(
      modal(this.props.children),
      this.el,
    )
  }
}

export default Modal

function modal(children) {
  return (
    <div className="modal-bg">
      <div className="modal">
        {children}
      </div>
    </div>
  )        
}