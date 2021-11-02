import React, { Component, useState, useEffect }  from 'react'
import GameContainer from './GameContainer'
import Instructions from './Instructions'
import StartButton from '../components/StartButton'
import TurnButton from '../components/TurnButton'
import MainPage from './MainPage'
import BackgroundContainer from './BackgroundContainer'

const APIurl = "https://choices-api.herokuapp.com/games"

function MainPrompt() {
    const [ choice, prompt ] = useState(0);

    useEffect(() => {
        fetch(APIurl)
        .then((res) => res.json())
        .then((data) => {
            prompt(data.results)
        })
    })


    

    // state = {
    //     startGame: false,
    //     openInstructions: false,
    //     prompt: "Are you ready?",
    //     choiceA: "I am not ready",
    //     choiceB: "Let's go!",
    //     choiceC: "",
    //     turn: 1,
    //     ending: "none",
    //     choices: []
    // }

    // componentDidMount() {
    //     fetch(`https://choices-api.herokuapp.com/games`)
    //     .then(res => res.json())
    //     .then(choices => this.setState({
    //         choices: choices.choice
    //     }))
    // }

    // componentDidUpdate(prevState) {
    //     if(this.state.turn == 0) {
    //         this.setState({
    //             turn: null
    //         })
    //     }
    // }

    // goToScreen = () => {
    //     this.setState({
    //         startGame: true
    //     })
    // }

    // changePath = (choices, choice) => {
    //     if(choices.choiceA == choice) {
    //         const options = this.state.choices.filter(choice => choice.turn == this.state.turn)
    //         const filteredOptions = options.filter(choice => choice.route == this.state.route)
    //         const otherOptions = filteredOptions.filter(choice => choice.from == this.state.prompt)
    //         const newPath = otherOptions.find(choice => choice.path == "left")
    //         const updatedPath = otherOptions.filter(choice => choice.path == "left")
    //         const choice = this.state.choices[0].path
    //         if(this.state.route == "none") {
    //             this.setState({
    //                 prompt: newPath.prompt,
    //                 choiceA: newPath.choiceA,
    //                 choiceB: newPath.choiceB,
    //                 turn: this.state.turn + 1,
    //                 path: "left"
    //             })
    //         }

    //         if(this.state.route !== "none") {
    //             if(newPath.choiceB == "Let's go!") {
    //                 const continuePath = updatedPath.find(choice => choice.userpath == "b")
    //                 this.setState({
    //                     prompt: continuePath.prompt,
    //                     choiceA: continuePath.choiceA,
    //                     choiceB: continuePath.choiceB,
    //                     turn: this.state.turn + 1,
    //                 })
    //             }
    //             else {
    //                 const continuePath = updatedPath.find(choice => choice.userpath == "a")
    //                 this.setState({
    //                     prompt: continuePath.prompt,
    //                     choiceA: continuePath.choiceA,
    //                     choiceB: continuePath.choiceB,
    //                     turn: this.state.turn + 1,
    //                 })
    //             }
    //         }

    //         if(this.state.choiceA == "Notice the flashing lights of the floor" || this.state.prompt == "Your work day has ended. You wait for the elevator. You see Cassandra, a girl that works with you on the 32nd floor of your building. You both are the last two done for the night. You talk about how hard the work day was and that the boss isn’t giving you any breaks. She agrees with you as you both enter the elevator.") {
    //             const continuePath = updatedPath.find(choice => choice.userpath == "a")
    //             this.setState({
    //                 prompt: continuePath.prompt,
    //                 choiceA: continuePath.choiceA,
    //                 choiceB: continuePath.choiceB,
    //                 turn: this.state.turn + 1,
    //                 path: "left",
    //             })
    //         }
            
    //         else {
    //             if(this.state.choiceB == "Notice the unnerving quiet of the floor" || this.state.prompt == "Your work day has ended. You wait for the elevator. You see Cassandra, a girl that works with you on the 32nd floor of your building. You both are the last two done for the night. You talk about how hard the work day was and that the boss isn’t giving you any breaks. She agrees with you as you both enter the elevator.") {
    //                 const continuePath = updatedPath.find(choice => choice.userpath == "b")
    //                 this.setState({
    //                     prompt: continuePath.prompt,
    //                     choiceA: continuePath.choiceA,
    //                     choiceB: continuePath.choiceB,
    //                     turn: this.state.turn + 1,
    //                     route: "right",
    //                 })

    //             }
    //         }
    //     }
    // }

    // render() {
        
        return prompt.length > 0 ? (
            <div className='mainPrompt'>
                <div className='prompt'>
                    <h3> {prompt[1].choice} </h3>
                </div>
                <button className='choiceA'>
                    {choice[1].choiceA}
                </button>
                <button className='choiceB'>
                    {choice[1].choiceB}
                </button>
            </div>
        ) : (
            <h1>Now Loading....</h1>
        )
}
        

export default MainPrompt

