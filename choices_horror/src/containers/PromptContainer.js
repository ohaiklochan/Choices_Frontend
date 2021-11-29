import React, { Component } from 'react'
import { connect } from 'react-redux'

class PromptContainer extends Component {
    render() {
        return (
        <div className='main-prompt'>
            <div className='current-prompt'>
            <h3>{this.props.prompt}</h3>
            <button>{this.props.choiceA}</button><button>{this.props.choiceB}</button>
            </div>
        </div>
    )}
}

const mapStateToProps = state => {
    return {
        prompt: state.prompt,
        choiceA: state.choiceA,
        choiceB: state.choiceB
    }
}


export default connect (mapStateToProps) (PromptContainer)

