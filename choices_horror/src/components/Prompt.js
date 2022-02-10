import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadPrompts, showPrompt } from '../actions/gameAction'
import { useParams } from 'react-router-dom'

function Prompt(props) {

    const [ id, setId ] = useState([]);
    const [ currentId, setCurrentId ] = useState([]);
    const [ path, setPath ] = useState('')

    const routeId = useParams().id

    useEffect(() => {
        loadPrompts(routeId)
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


export default connect (mapStateToProps, {loadPrompts}) (Prompt)