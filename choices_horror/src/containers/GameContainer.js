import React, { Component } from 'react';
import '../css/game_container.css';
import MainPrompt from './MainPrompt';
import Instructions from './Instructions';
import BackgroundContainer from './BackgroundContainer';
import TurnButton from '../components/TurnButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MainPage from './MainPage';

const gameURL = "http://localhost:3000/game"
const promptURL = 'db.json'


export class GameContainer extends Component {
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

    render() {
        return (
        <Router>
        <div>
         
        <Route exact path="/" render={() => <MainPage />}/>
        <Route exact path='/instructions' render={() => <Instructions goBackHandler={this.goBackHandler}/>}/>
        <Route exact path="/maingame" render={() => <MainPrompt />}/>
      </div>
      </Router>
        )
    }
}

export default GameContainer
