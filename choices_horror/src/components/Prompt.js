import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadPrompts, showPrompt } from '../actions/gameAction'

function Prompt(props) {

    const [ id, setId ] = useState(0);
    const [ currentId, setCurrentId ] = useState(0);
    const [ path, setPath ] = useState('')

    useEffect(() => {
        loadPrompts()
        // return showPrompt
    }, [])

    const handleAnswer = (choiceAnswer) => {
        const nextId = currentId + 1;
        setCurrentId(nextId);
        if (nextId < choiceAnswer.choiceA) {
            setPath(nextId.left)
        } else {
            setPath(nextId.right)
        }
    }
    return id.length > 0 ? (
        <div className='main'>
            <div className='current-prompt'>
                <h3>{id[currentId].prompt}</h3>
            </div>
            <div className='choiceA'>
                <button onClick={(choiceAnswer) => handleAnswer(choiceAnswer)}>{id[currentId].choiceA}</button>
            </div>
            <div className='choiceB'>
                <button onClick={(choiceAnswer) => handleAnswer(choiceAnswer)}>{id[currentId].choiceB}</button>
            </div>
        </div>
    ) : (
        <h2>Loading...</h2>
    )
}

const mapStateToProps = state => {
    return {
        ...state.prompt
    }
}


export default connect (mapStateToProps, {loadPrompts, showPrompt}) (Prompt)