import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BenchesReducer from './benches_reducer';


const entitiesReducer = combineReducers({
  users: UsersReducer,
  benches: BenchesReducer,
});

export default entitiesReducer;
