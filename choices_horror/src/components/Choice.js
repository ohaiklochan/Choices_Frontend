import React, { useState } from 'react'

function Choice() {

    return (
        <div className='choices'>
            <button> {Prompt[currentPrompt].choiceA} </button>
            <button> {Prompt[currentPrompt].choiceB} </button>
        </div>
    )
}

export default Choice