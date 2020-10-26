
import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {customersSlice} from "../app/modules/ECommerce/_redux/customers/customersSlice";
import wardenreducer from './reducers/wardenreducer'
import {firestoreReducer} from "redux-firestore"


export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  profiles: wardenreducer,
  firestore: firestoreReducer

});

export default rootReducer; 
