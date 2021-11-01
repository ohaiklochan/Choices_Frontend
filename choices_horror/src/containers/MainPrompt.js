import React, { Component }  from 'react'
import GameContainer from './GameContainer'
import Instructions from './Instructions'
import StartButton from '../components/StartButton'
import TurnButton from '../components/TurnButton'
import Choice from '../components/Choice'
import UserInfo from '../components/UserInfo'
import Prompt from '../components/Prompt'
import Ending from '../components/Ending'
import MainPage from './MainPage'

const gameURL = "http://localhost:3000/game"
const promptURL = "https://choices-api.herokuapp.com/games"

export class MainPrompt extends Component {

    state = {
        startGame: false,
        openInstructions: false,
        prompt: "Are you ready?",
        choiceA: "No",
        choiceB: "Yes",
        turn: 1,
        ending: "none",
        choices: []
    }

    goBackHandler = () => {
        this.setState({
            openInstructions: false
        })
    }

    componentDidMount() {
        fetch(promptURL)
            .then(res => res.json())
            .then(games => this.setState({
                games: games.choice
            }))
        }


    componentDidUpdate(prevProps) {
        if (this.props.prompt !== prevProps.prompt) {
            const info = document.querySelector('.info')
            if (info !== null) {
                info.innerHTML = `<p className="font"> ${this.props.prompt} </p>`
            }
        }
    }

    goToScreen = () => {
        this.setState({
            gameStarted: true
        })
    }
  
    changePath =(choices, choice) => {
        if(choices.choiceA == choice){
            const options = this.state.choices.filter(choice => choice.turn == this.state.turn)
            const filteredOptions = options.filter(choice => choice.route == this.state.route)
            const reFilteredOptions = filteredOptions.filter(choice => choice.from == this.state.prompt)
            const newPath = reFilteredOptions.find(choice => choice.path == "left")
            const newerPath = reFilteredOptions.filter(choice => choice.path == "left")
            const choice = this.state.choices[0].path
            if(this.state.route == "none"){
            
            this.setState({
                prompt: newPath.prompt,
                choiceA: newPath.choiceA,
                choiceB:newPath.choiceB,
                turn: this.state.turn + 1,
                route: "a"
            })}
        }
    }

    render() {
        const question = this.props.prompt
        return (
            <div className='mainPrompt'>
                {question}
            </div>
        )
    }
}

export default MainPrompt
