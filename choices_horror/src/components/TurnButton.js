import React from 'react'
import '../css/game_container.css'

const TurnButton = (props) => {
    return (
        <div className='button'>
            <button className='start' onClick={props.nextPrompt}>This is my choice</button>
        </div>
    )
}

export default TurnButton