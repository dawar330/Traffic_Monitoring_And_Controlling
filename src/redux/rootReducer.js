
import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {customersSlice} from "../app/modules/ECommerce/_redux/customers/customersSlice";
import wardenreducer from './reducers/wardenreducer'
import VardenDutiesReducer from './reducers/VardenDutiesReducer'
import {firestoreReducer} from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase";


export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  profiles: wardenreducer,
  Duties: VardenDutiesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer

});

export default rootReducer; 
