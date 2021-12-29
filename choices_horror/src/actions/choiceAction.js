const api = "http://choices-api.herokuapp.com/api/v1/games"

export function fetchChoices() {
    return(dispatch) => {
        fetch(api)
        .then(res => res.json())
        .then(res => dispatch({type: 'LOAD_CHOICES', game: res}))
    }
}
export function showChoices(choices) {
    return {
        type: "SHOW_CHOICES",
        payload: {
            choices
        }
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