import React, { Component } from 'react'
import { connect } from 'react-redux'

class PromptContainer extends Component {
    render() {
        return (
        <div className='main-prompt'>
            <div className='current-prompt'>
            <h3>{this.props.prompt}</h3>
            propmt stuff
            </div>
        </div>
    )}
}

const mapStateToProps = state => {
    return {
        prompt: state.prompt
    }
}


export default connect (mapStateToProps) (PromptContainer)

