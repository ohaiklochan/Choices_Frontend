import React, { Component } from 'react';
import '../css/game_container.css';
import Prompt from './PromptContainer';
import Instructions from '../components/Instructions';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from '../components/WelcomePage';

export class GameContainer extends Component {

    render() {
        return (
        <Router>
        <div>
         
        <Route exact path="/" render={() => <MainPage />}/>
        <Route exact path='/instructions' render={() => <Instructions goBackHandler={this.goBackHandler}/>}/>
        <Route exact path="/maingame" render={() => <Prompt />}/>
      </div>
      </Router>
        )
    }
}

export default GameContainer
