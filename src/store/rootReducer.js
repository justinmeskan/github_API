import { combineReducers } from 'redux'
import app from './reducers/app/appReducer'
import { connectRouter } from 'connected-react-router'

const rootReducer = (hist) => combineReducers({
    router: connectRouter(hist),
    app

})



export default rootReducer
