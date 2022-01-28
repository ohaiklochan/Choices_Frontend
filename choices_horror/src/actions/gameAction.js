const api = "http://choices-api.herokuapp.com/api/v1/games"

export function loadPrompts() {
    return(dispatch) => {
        fetch(api)
        .then((res) => res.json())
        .then((res) => dispatch({type: 'LOAD_PROMPT', game: res}))
    }
}

export function showPrompt(prompt) {
    return {
        type: "SHOW_PROMPT",
        payload: prompt
    }
}