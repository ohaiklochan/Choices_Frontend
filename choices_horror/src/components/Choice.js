import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { choiceAChosen, choiceBChosen } from '../actions/choiceAction'

class Choice extends Component {
    render() {

        return (
            <div className='choice-select'>
                <div className='choiceA-selection'>
                    <button>{this.props.choiceA}</button>
                </div>
                <div className='choiceB-selection'>
                    <button>{this.props.choiceB}</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        choice: state.choice
    }
}

const mapDispatchToProps = {
    choiceA: choiceAChosen,
    choiceB: choiceBChosen
}

export default connect(mapStateToProps, mapDispatchToProps) (Choice)