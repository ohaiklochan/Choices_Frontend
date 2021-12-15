import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showChoices, choiceAChosen, choiceBChosen } from '../actions/choiceAction'

class Choice extends Component {

    constructor(props) {
        super(props)
        this.state = {
            choiceA: this.props.choiceA,
            choiceB: this.props.choiceB
        }
    }

    componentDidMount() {
        console.log("component did mount choices")
        this.props.showChoices()
    }

    handleChoiceSelection = (e) => {
        this.setState({ choice: e.target.value })
    }
    
    render() {

        return (
            <div className='choice-select'>
                <div className='choiceA-selection'>
                    <button value={this.state.choiceA} onChange={this.handleChoiceSelection}>
                        {choiceA.map((choiceA) => (
                    <option value={choiceA.value}>{choiceA.label}</option>))}
                    </button>
                </div>
                <div className='choiceB-selection'>
                <button value={this.state.choiceB} onChange={this.handleChoiceSelection}>
                        {choiceB.map((choiceB) => (
                    <option value={choiceB.value}>{choiceB.label}</option>))}
                    </button>
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

function mapDispatchToProps(dispatch) {
    return { showChoices: (choice) => dispatch(showChoices(choice)) }
}

export default connect(mapStateToProps, mapDispatchToProps) (Choice)