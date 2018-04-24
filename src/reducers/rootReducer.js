import {combineReducers} from 'redux'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'
import idReducer from './idReducer'


const rootReducer = combineReducers({
    user: userReducer,
    loading: loadingReducer,
    cardId: idReducer
})

export default rootReducer;