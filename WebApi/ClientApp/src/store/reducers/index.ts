import {combineReducers} from "redux";
import {employeeReducer} from "./employeeReducer";

export const rootReducer = combineReducers({
    employees: employeeReducer,
})
export type RootState = ReturnType<typeof rootReducer>