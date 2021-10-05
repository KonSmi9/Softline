import {Dispatch} from "redux";
import {EmployeeAction, EmployeeActionTypes, IEmployee} from "../../types/types";
import axios from "axios";

export  const  fetchEmployee = () => {
    return async (dispatch : Dispatch<EmployeeAction>) => {
        try {
            dispatch({type: EmployeeActionTypes.FETCH_EMPLOYEES})
            const response  = await axios.get('https://localhost:44386/api/employee')
            dispatch({type:EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS, payload: response.data})
        } catch (e){
            dispatch({type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR, payload : 'Произошла  ошибка  при загруски пользователя'})
        }
    }
}

export const createEmployee = (employee: IEmployee) => {
    return async (dispatch : Dispatch<EmployeeAction>) => {
        try {
            const response = await axios.post('https://localhost:44386/api/employee', employee)
            dispatch({type:EmployeeActionTypes.EMPLOYEES_ADD, payload: response.data})
        } catch (e){
            console.log('Error', e)
        }
    }
}
export const deleteEmpty = (id: number) => {
    return async (dispatch : Dispatch<EmployeeAction>) => {
        try {
            await axios.delete('https://localhost:44386/api/employee/' + id)
            dispatch({type:EmployeeActionTypes.EMPLOYEES_DELETE, payload: id})
        } catch (e){
            console.log('Error', e)
        }
    }
}

export const updateEmployee = (employee: IEmployee) => {
    return async (dispatch : Dispatch<EmployeeAction>) => {
        try {
            const response  = await axios.put('https://localhost:44386/api/employee', employee)
            dispatch({type:EmployeeActionTypes.EMPLOYEES_UPDATE,payload:response.data })
        } catch (e){
            console.log('Error', e)
        }
    }
}