import React, { Component } from 'react'
import Choice from '../components/Choice'
import Prompt from '../components/Prompt'

class PromptContainer extends Component {

    render() {
        return (
        <div className='main-prompt'>
            <div className='current-prompt'>
            <Prompt />
            <Choice />
            </div>
        </div>
    )}
}

export default PromptContainer

