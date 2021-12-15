const rootReducer = (state = {
        id: [],
        choices: [],
        prompt: [], 
        path: [],
        turn: [],
        ending: []
}, action) => {
    switch(action.type) {
        case "LOAD_PROMPT":
            return {...state, prompt: action.prompt}
        case "LOAD_CHOICES":
            return {...state, choices: action.choices}

        case "SHOW_PROMPT":
            return{...state, prompt: action.id}
        case "SHOW_CHOICES":
            return{...state, choices: action.choices}  

        case "CHOICE_A_CHOSEN":
            return {...state, choiceA: action.routeRight}

        case "CHOICE_B_CHOSEN":
            return {...state, choiceB: action.routeLeft}    
        default:
            return state
    }
}

export default rootReducer