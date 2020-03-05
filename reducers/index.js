import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer';
import CrudReducer from './crudReducer';

export default combineReducers({
  auth: AuthReducer,
  crud: CrudReducer
})