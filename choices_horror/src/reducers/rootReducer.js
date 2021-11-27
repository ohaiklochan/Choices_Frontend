const rootReducer = (state = {
    choice: [],
    prompt: 0
}, action) => {
    switch(action.type) {
        case "START_LOADING_GAME":
        case "LOAD_PROMPT":
            return {...state, prompt: action.prompt}
        case "LOAD_CHOICES":
            return {...state, choices: action.choice}
        default:
            return state
    }
}

export default rootReducer