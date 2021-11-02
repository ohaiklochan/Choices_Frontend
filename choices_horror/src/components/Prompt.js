import React, { Component } from 'react'

class Prompt extends Component {
    render() {
        return (
            <div>
                <p>{this.props.prompt}</p>
            </div>
        )
    }
}

export default Prompt