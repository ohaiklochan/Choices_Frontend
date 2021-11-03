import React, { useState, useEffect, Component }  from 'react'
import Choice from '../components/Choice'
import Ending from '../components/Ending'
import Prompt from '../components/Prompt'

const APIurl = "http://choices-api.herokuapp.com/api/v1/games"

function MainPrompt() {
    const [ id, setPrompt ] = useState(0);

    useEffect(() => {
        fetch(APIurl)
        .then((res) => res.json())
        .then((data) => {
            setPrompt(data.game)
        })
    })

  
        return id.length > 0 ? (
            <div className='mainPromptContainer'>
                <Prompt />
                <Choice />
            </div>
        ) : (
            <h2>Now Loading...</h2>
        )
}
     

export default MainPrompt

