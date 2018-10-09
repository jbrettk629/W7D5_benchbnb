import { RECEIVE_BENCHES } from '../actions/bench_actions';
import merge from 'lodash/merge';


const benchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BENCHES:
      return merge({}, state, action.benches);
    default:
      return state;
  }
};

export default benchReducer;
