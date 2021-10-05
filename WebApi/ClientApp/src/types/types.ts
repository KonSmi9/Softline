export interface IEmployee{
    id: number,
    surname: string,
    firstname: string,
    patronymic : string
    dateOfBirth : Date,
    aboutMe : string,
    decre : boolean
}
export enum EmployeeActionTypes {
    FETCH_EMPLOYEES ="FETCH_EMPLOYEES",
    FETCH_EMPLOYEES_SUCCESS ="FETCH_EMPLOYEES_SUCCESS",
    FETCH_EMPLOYEES_ERROR ="FETCH_EMPLOYEES_ERROR",
    EMPLOYEES_ADD = "EMPLOYEES_ADD",
    EMPLOYEES_DELETE = "EMPLOYEES_DELETE",
    EMPLOYEES_UPDATE = "EMPLOYEES_UPDATE"
}
export interface EmployeeState{
    employees: any[],
    loading?: boolean,
    error?: null | string,
}
interface FetchEmployeeAction{
    type: EmployeeActionTypes.FETCH_EMPLOYEES
}
interface FetchEmployeeActionSuccess{
    type: EmployeeActionTypes.FETCH_EMPLOYEES_SUCCESS,
    payload: any[]
}
interface FetchEmployeeActionError{
    type: EmployeeActionTypes.FETCH_EMPLOYEES_ERROR,
    payload: string
}
interface EmployeeActionAdd{
    type: EmployeeActionTypes.EMPLOYEES_ADD,
    payload: IEmployee
}
interface EmployeeActionDelete{
    type: EmployeeActionTypes.EMPLOYEES_DELETE,
    payload: number
}
interface EmployeeActionUpdate{
    type: EmployeeActionTypes.EMPLOYEES_UPDATE,
    payload: IEmployee
}
export const data = [
    {
        label: 'Фамилия',
        name: 'surname'
    },
    {
        label: 'Имя',
        name: 'firstname'
    },
    {
        label: 'Отчестово',
        name: 'patronymic'
    }
]


export type EmployeeAction = FetchEmployeeAction | FetchEmployeeActionError | FetchEmployeeActionSuccess | EmployeeActionAdd | EmployeeActionDelete | EmployeeActionUpdate