import React, { useState } from 'react'

function Prompt() {
    const [ currentPrompt, setCurrentPrompt ] = useState(0)
    return (
        <div className='mainPrompt'>
            <div className='prompt'>
                <h3 className='initial-prompt'> {Prompt[currentPrompt]} </h3>
            </div>
        </div>
    )
}

export default Prompt