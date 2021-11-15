import React, { Component, useEffect, useState }  from 'react'
import Choice from '../components/Choice'
import Ending from '../components/Ending'
import Prompt from '../components/Prompt'

const APIurl = "http://choices-api.herokuapp.com/api/v1/games"

function MainPrompt(props) {

    const [ id, setId ] = useState(0);
    const [ choice, setChoice ] = useState([]);
    const [ currentId, setCurrentId ] = useState(0);
    const [ path, setPath ] = useState('')

    useEffect(() => {
        fetch(APIurl)
        .then((res) => res.json())
        .then((data) => {
            setId(data.game)
        })
    })

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
     

export default MainPrompt

