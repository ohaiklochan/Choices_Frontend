import React from 'react'
import '../css/game_container.css'

function Instructions(props) {
    return(
        <>
        <div className='title'>
            <h1>Are you sure?</h1>
            <p>This game is about YOU....... I'm sure you'll love it. Just choose one choice or the other and see which ending you get.</p></div>
            <div className='button'>
                <button onClick={() => window.location = '/maingame'} className='start'>I guess I'll start</button></div></>
    )
}

export default Instructions