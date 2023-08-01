import { combineReducers } from "redux";
import {cakeReducer} from "./cakeReducer"
export const reducers = combineReducers({
cake:cakeReducer
})