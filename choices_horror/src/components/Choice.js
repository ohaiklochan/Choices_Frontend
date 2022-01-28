import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchChoices, showChoices } from '../actions/choiceAction'

function Choice(props) {

    const [ currentChoice, setNextChoice ] = useState(0);
    const [ from, setFrom ] = useState(0);

    function handleChoiceRouting(ending) {
        setNextChoice(ending.currentChoice)
    }

    useEffect(() => {
        fetchChoices()
        // return showChoices
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

const mapStateToProps = state => {
    return {
        choice: state.choice
    }
}

export default connect(mapStateToProps, {fetchChoices, showChoices}) (Choice)