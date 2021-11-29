const rootReducer = (state = {
    choices: [],
    prompt: [],
    fetching: false
}, action) => {
    switch(action.type) {
        case "START_LOADING_GAME":
        case "LOAD_PROMPT":
            return {...state, prompt: action.game, fetching: true}
        case "LOAD_CHOICES":
            return {...state, choices: action.choices, fetching: true}

        case "CHOICE_A_CHOSEN":
            return {...state, choiceA: action.routeRight, fetching: false}

        case "CHOICE_B_CHOSEN":
            return {...state, choiceB: action.routeLeft, fetching: false}    
        default:
            return state
    }
}

export default rootReducer