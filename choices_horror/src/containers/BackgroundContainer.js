import React, { Component, useState, useEffect } from 'react'
import '../css/question_container.css'
import Choice from '../components/Choice'
import UserInfo from '../components/UserInfo'
import Prompt from '../components/Prompt'
import Ending from '../components/Ending'

// class BackgroundContainer extends Component {
//     state = {
//         string:[],
//         change: false
//     }

//     componentDidUpdate(prevProps) {
//         if (this.props.prompt !== prevProps.prompt) {
//             const info = document.querySelector(".info")
//             if (info !== null) {
//                 info.innerHTML = `<p className="font"> ${this.props.prompt} </p>`
//             }
//         }
//     }

//     screenChange = () => {
//         this.setState({
//             change: true
//         })
//     }
function BackgroundContainer() {
    const [ choice, prompt ] = useState(0);
    useEffect((prevProps) => {
        if (this.props.prompt !== prevProps.prompt) {
            const info = document.querySelector(".info")
                if (info !== null) {
                    info.innerHTML = `<p className="font"> ${this.props.prompt} </p>`
                }
            }
        })


    
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
                    }}>{this.props.choiceA}</button>{}
                </div> :
                <div className='choiceC'>
                    <button onClick={this.screenChange}>
                        {this.props.choiceC}
                    </button>
                </div>}
                {this.props.choiceB !== null ? <div className='choiceB'>
                    <button onClick={() =>{this.props.changePath(this.props, this.props.choiceB)}}>
                        {this.props.choiceB}
                    </button>
                </div> : null}
            </div>}
        </div>

        )
                }

export default BackgroundContainer
