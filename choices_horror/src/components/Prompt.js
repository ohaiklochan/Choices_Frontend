import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPrompts } from '../actions/gameAction'

class Prompt extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.prompt[0],
            prompt: []
        }
    }
    
    componentDidMount() {
        console.log('component did mount prompts')
        this.props.loadPrompts()
    }


    render() {
        return (
            <div>
                <h3>{this.props.prompt}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        prompt: state.prompt
    }
}

function mapDispatchToProps(dispatch) {
    return { loadPrompts: (prompt) => dispatch(loadPrompts(prompt)) }
}


export default connect (mapStateToProps, mapDispatchToProps) (Prompt)