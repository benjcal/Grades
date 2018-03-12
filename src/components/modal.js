import { Component } from 'react'
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
      this.props.children,
      this.el,
    )
  }
}

export default Modal