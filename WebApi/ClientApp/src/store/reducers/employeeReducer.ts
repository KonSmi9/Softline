import {EmployeeAction, EmployeeActionTypes, EmployeeState, IEmployee} from "../../types/types";

const initialState : EmployeeState = {
    employees: [],
    loading: false,
    error: null,
}

export const  employeeReducer = (state = initialState, action: EmployeeAction):EmployeeState => {
    switch (action.type){
        case EmployeeActionTypes.FETCH_EMPLOYEES:
            return {employees: [], loading: true, error: null}
        case EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS:
            return {loading: true, error: null, employees: action.payload}
        case EmployeeActionTypes.FETCH_EMPLOYEES_ERROR:
            return {employees: [], loading: false, error: action.payload}
        case EmployeeActionTypes.EMPLOYEES_ADD:
            return {employees: [...state.employees, action.payload], loading: true, error: null}
        case EmployeeActionTypes.EMPLOYEES_DELETE:
            const newEmployee = state.employees.filter(employee => employee.id !== action.payload);
            return {employees: newEmployee,loading: true, error: null}
        case EmployeeActionTypes.EMPLOYEES_UPDATE:
            const newArr = state.employees.map((employee:IEmployee, index:number) => {
                if(employee.id === action.payload.id){
                    return {...action.payload}
                }else{
                    return {...employee}
                }
            })
            return {...state, employees: newArr}
        default:
            return state
    }
}