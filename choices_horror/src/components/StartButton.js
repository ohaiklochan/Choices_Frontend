import React from 'react'
import '../css/game_container.css'

const StartButton = (props) => {
    return(
        <div className='button'>
            <button className='start' onClick={props.buttonHandler}>Start</button>
        </div>
    )
}

export default StartButton