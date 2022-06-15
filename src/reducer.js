const intialState = {
    loggedin: localStorage.getItem("user") ? true : false,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    site: null
}

function reducer(state = intialState, action) {
    switch (action.type) {
        case "login": return { ...state, loggedin: true, user: action.payload }
        case "logout": return { ...state, loggedin: false, user: null }
        case "site": return { ...state, site: action.payload }
        default: return state
    }
}

export default reducer