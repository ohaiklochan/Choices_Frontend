const api = "http://choices-api.herokuapp.com/api/v1/games"

export function startGame() {
    return(dispatch) => {
        dispatch({
            type: 'START_LOADING_GAME'
        })
        fetch(api)
        .then(res => res.json())
        .then(choices => dispatch({type: 'LOAD_CHOICE', choices}))
    }
}