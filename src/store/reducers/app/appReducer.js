import { initialState } from './appSelector'
import { GET_REPOS, SEARCH_TERM, SET_THEME } from './appAction'


const app = (state = initialState, action) => {
    switch (action.type) {
        case GET_REPOS:
            let repos
            if(action.payload === null) {
                repos = []
            } else {
                repos = action.payload.repositories.nodes
            }
            return {
                ...state,
                user: {
                    repositories: {
                        nodes: repos
                    }
                }
            }
        case SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        case SET_THEME:
            console.log('set theme==', action.payload)
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state
    }
}

export default app
