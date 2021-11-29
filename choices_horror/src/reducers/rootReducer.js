const rootReducer = (state = {
    choices: [],
    prompt: 0
}, action) => {
    switch(action.type) {
        case "START_LOADING_GAME":
        case "LOAD_PROMPT":
            return {...state, prompt: action.game}
        case "LOAD_CHOICES":
            return {...state, choices: action.choices}

        case "CHOICE_A_CHOSEN":
            return {...state, choiceA: action.routeRight}

        case "CHOICE_B_CHOSEN":
            return {...state, choiceB: action.routeLeft}    
        default:
            return state
    }
}

export default rootReducer