import React, { Component } from 'react';
import '../css/game_container.css';
import MainPrompt from './PromptContainer';
import Instructions from './InstructionContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './WelcomeContainer';

export class GameContainer extends Component {

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
