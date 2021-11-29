import React, { Component } from 'react'
import { connect } from 'react-redux'
import { choiceAChosen, choiceBChosen } from '../actions/choiceAction'

class Choice extends Component {
    render() {

        const [ currentId, setCurrentId ] = useState(0)

        handleAnswer = (props) => {
            const nextId = currentId + 1;
            setCurrentId(nextId);
            if (nextId < props.choiceA) {
                setPath(nextId.left)
            } else {
                setPath(nextId.right)
            }
        }

        return (
            <div className='choice-select'>
                <div className='choiceA-selection'>
                    <button onClick={handleAnswer}>{this.props.id.choiceA}</button>
                </div>
                <div className='choiceB-selection'>
                    <button onClick={handleAnswer}>{this.props.id.choiceB}</button>
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