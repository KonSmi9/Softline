import React, {FC} from 'react'
import {Button, Table} from "antd";
import {IEmployee} from "../types/types";
interface TableWithEmployeeProps {
    employees: IEmployee[],
    onDelete:(record : IEmployee ) => void
    onVisible:(record?: IEmployee) => void
}

export const TableWithEmployee : FC<TableWithEmployeeProps> = ({employees, onDelete, onVisible})=> {

    const columns = [
        {
            title: 'Фамилия',
            dataIndex: 'surname',
        },
        {
            title: 'Имя',
            dataIndex: 'firstname',
        },
        {
            title: 'Отчество',
            dataIndex: 'patronymic',
        },
        {
            title: 'Дата рождения',
            dataIndex: 'dateOfBirth',
        },
        {
            title: 'О мне',
            dataIndex: 'aboutMe',
        },
        {
            title: 'Декрет',
            dataIndex: 'decre',
            render: (decre: boolean) => decre ? 'В декрете' : 'Не в декрете' ,

        },
        {
            title: 'Действие',
            render: (record: IEmployee) => {
                return(
                    <>
                        <Button onClick={() => onDelete(record) }>Удалить</Button>
                        <Button onClick={() => onVisible(record) }>Редактировать</Button>
                    </>
                )
            }

        },
    ];
    return(
        <Table
            columns={columns}
            dataSource={employees}
            rowKey={(record:IEmployee) => record.id}

        />
    )
}