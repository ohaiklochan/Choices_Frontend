import React from 'react'
import '../css/game_container.css'

const Choice = (props) => {
    return (
        <><div className='button'>
            <button className='start' onClick={props.choiceAHandler}>My Choice</button>
        </div><div className='button'>
                <button className='start' onClick={props.choiceBHandler}>My Choice</button>
            </div></>
    )
}

export default Choice