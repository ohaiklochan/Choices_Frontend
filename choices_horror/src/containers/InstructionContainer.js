import React, { Component } from 'react'
import '../css/game_container.css'
import '../components/Instructions'

class InstructionContainer extends Component {

    render() {
    return (
        <div className='title'>
        <div>
            <h1>Are you sure?</h1>
            <h4>This game is about YOU....... I'm sure you'll love it. Just choose one choice or the other and see which ending you get.</h4></div>
            <div className='button'>
                <button onClick={() => window.location = '/maingame'} className='start'>I guess I'll start</button></div></div>
        )
    }
}

export default InstructionContainer