const api = "http://choices-api.herokuapp.com/api/v1/games"

export function fetchChoices() {
    return(dispatch) => {
        dispatch({
            type: 'START_LOADING_GAME'
        })
        fetch(api)
        .then(res => res.json())
        .then(choices => dispatch({type: 'LOAD_CHOICE', choices}))
    }
}

export function choiceAChosen(routeRight) {
    return {
        type: "CHOICE_A_CHOSEN",
        payload: routeRight
    }
}

export function choiceBChosen(routeLeft) {
    return {
        type: "CHOICE_B_CHOSEN",
        payload: routeLeft
    }
}