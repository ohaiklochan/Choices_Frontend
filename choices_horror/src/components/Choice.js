import React, { useEffect, useState } from 'react'

function Choice(props) {

    const [ currentChoice, setNextChoice ] = useState(0);
    const [ from, setFrom ] = useState(0);

    function handleChoiceRouting(ending) {
        setNextChoice(ending.currentChoice)
    }

    useEffect(() => {
        
    })

    return (
        <div className='choice-select'>
            <div className='choiceA-selection'>
                <button onClick={() => setNextChoice(currentChoice + 1)}>{currentChoice.choiceA}</button>
            </div>
            <div className='choiceB-selection'>
                <button onClick={() => setNextChoice(currentChoice + 2)}>{currentChoice.choiceB}</button>
            </div>
        </div>
    )
}

export default Choice