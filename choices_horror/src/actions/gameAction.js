const api = "http://choices-api.herokuapp.com/api/v1/games"

export function startGame() {
    return(dispatch) => {
        dispatch({
            type: 'START_LOADING_GAME'
        })
        fetch(api)
        .then(res => res.json())
        .then(prompt => dispatch({type: 'LOAD_PROMPT', prompt}))
    }
}