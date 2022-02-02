import { useEffect } from 'react'
import { connect } from 'react-redux'
import Choice from '../components/Choice'
import Prompt from '../components/Prompt'
import { loadPrompts } from '../actions/gameAction'

const PromptContainer = ({ loadPrompts }) => {

    useEffect(() => {
        loadPrompts()}, [loadPrompts])

        return (
        <div className='main-prompt'>
            <div className='current-prompt'>
            <Prompt />
            <Choice />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ prompt: state.prompt })

export default connect(mapStateToProps, { loadPrompts })(PromptContainer)

