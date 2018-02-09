import React, { Component } from 'react'
import '../styles/select.css'

import Down from 'react-icons/lib/go/chevron-down'

export default class Select extends Component {
    state = {
        show: false,
        selected: this.props.options[0]
    }

    componentWillUpdate(props) {
        
    }
    render() {
        let { options, name, fn } = this.props
        return (
            <div className="select">
                <div className="name">{name}</div>
                <div className="interface">
                    <span className="selected" onClick={() => {this.setState({show:!this.state.show})}}>{this.state.selected}</span>
                    <span className="down" onClick={() => {this.setState({show:!this.state.show})}}><Down /></span>
                </div>
                <div className="options">
                    {this.state.show && options.map((n, i) => <div className="option" key={i} onClick={() => {this.setState({selected: n, show: false}); fn(n)}}>{n}</div> )}
                </div>
            </div>
        )
    }
}
