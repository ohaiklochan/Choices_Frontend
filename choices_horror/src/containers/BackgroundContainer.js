import React, { Component } from 'react'
import '../css/question_container.css'

class BackgroundContainer extends Component {
    state = {
        string:[],
        change: false
    }

    componentDidUpdate(prevProps) {
        if (this.props.prompt !== prevProps.prompt) {
            const info = document.querySelector(".info")
            if (info !== null) {
                info.innerHTML = `<p className="font"> ${this.props.prompt} </p>`
            }
        }
    }

    screenChange = () => {
        this.setState({
            change: true
        })
    }

    render() {
        const question = this.props.prompt
        return (
            <div className='backgroundContainer'>
                {this.state.change ? <div><p className='turn'>Turn: {this.props.turn} </p></div> :
                <div className='prompt-box'>
                    <div className='info'>
                        <p className='font'>{question}</p>
                    </div>
                    {this.props.choiceA !== null ? <div className='choiceA'><button onClick={(event) => {
                        this.props.changePath(this.props, this.props.choiceA);
                        this.check(event)
                    }}><p>{this.props.choiceA}</p></button>}
                </div> :
                <div className='choiceC'>
                    <button onClick={this.screenChange}>
                        <p>{this.props.choiceC}</p>
                    </button>
                </div>}
                {this.props.choiceB !== null ? <div className='choiceB'>
                    <button onClick={() =>{this.props.changePath(this.props, this.props.choiceB)}}>
                        <p>{this.props.choiceB}</p>
                    </button>
                </div> : null}
            </div>}
        </div>

        )
                }}

export default BackgroundContainer
