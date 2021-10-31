import React, { Component } from 'react'
import '../css/question_container.css'

export class MainPrompt extends Component {

    state = {
        string: [],
        change: false
    }

    componentDidUpdate(prevProps) {
        if (this.props.prompt !== prevProps.prompt) {
            const info = document.querySelector('.info')
            if (info !== null) {
                question.innerHTML = `<p className="font"> ${this.props.prompt} </p>`
            }
        }
    }

    render() {
        const question = this.props.prompt
        return (
            <div className='mainPrompt'>{this.state.change ? <div><p className='turn'></p>}</div>
        )
    }
}

export default MainPrompt
