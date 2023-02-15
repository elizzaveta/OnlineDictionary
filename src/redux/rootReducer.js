import {combineReducers} from "redux";
import {isMobileSlice} from "./isMobileSlice";
import {menuSlice} from "./menuSlice";

export const rootReducer = combineReducers({
    mobileDisplay: isMobileSlice.reducer,
    menu: menuSlice
})