import { combineReducers } from 'redux';
import userReducer from './userReducer';
import reimbursementReducer from './reimbursementReducer';


const rootReducer = combineReducers({
    reimbursementReducer,
  userReducer,
  
});

export default rootReducer;