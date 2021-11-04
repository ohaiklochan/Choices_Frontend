import React, { useState } from 'react'

function Prompt() {
    const [ currentPrompt, setCurrentPrompt ] = useState(0)

    return (
        <div className='mainPrompt'>
            <h3 className='current-prompt'> {Prompt[currentPrompt]} </h3>
        </div>
    )
}

export default Prompt