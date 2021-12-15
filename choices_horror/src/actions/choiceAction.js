const api = "http://choices-api.herokuapp.com/api/v1/games"

export function fetchChoices() {
    return(dispatch) => {
        fetch(api)
        .then(res => res.json())
        .then(res => dispatch({type: 'LOAD_CHOICES', choices: res}))
    }
}
export function showChoices(choiceA, choiceB) {
    return {
        type: "SHOW_CHOICES",
        payload: {
            choiceA,
            choiceB
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