import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb, Button} from 'antd';
import './App.css'
import {TableWithEmployee} from "./components/TableWithEmployees";
import {useTypeSelector} from "./hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {createEmployee, deleteEmpty, fetchEmployee, updateEmployee} from "./store/action-creator/employee";
import {ModalWindow} from "./components/ModalWindow";
import {IEmployee} from "./types/types";

const { Header, Content, Footer } = Layout;

export default function App(){
    const {employees, loading, error} = useTypeSelector(state => state.employees)
    const [visible, setVisible] = useState(false);
    const [employeeInfo, setEmployeeInfo] = useState<IEmployee | undefined>()
    const dispatch = useDispatch()


    const onCreate = (values: IEmployee) => {
        dispatch(createEmployee(values))
        setVisible(false);
    };

    const onDelete = (record: IEmployee )=> {
        dispatch(deleteEmpty(record.id))
    }

    const onUpdate = (values: IEmployee, id: number) =>
    {
        dispatch(updateEmployee({...values,id:id}))
        setVisible(false);
    };
    const onClose = () => {
        setVisible(false);
    }

    const onVisible = (record ?:IEmployee) => {
        setEmployeeInfo(record)
        setVisible(true)
    }


    useEffect(() => {
        dispatch(fetchEmployee())
    }, [])

    if(!loading){
        return <h1>Идёт загрузка</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Employee</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <Button
                        type="primary"
                        onClick={() => onVisible()}
                    >
                        New Collection
                    </Button>
                    <hr/>
                    <ModalWindow
                        visible={visible}
                        employee={employeeInfo}
                        onCreate={onCreate}
                        onUpdate={onUpdate}
                        onCancel={() => onClose()}
                    />
                   <TableWithEmployee employees={employees}  onDelete = {onDelete} onVisible={onVisible}/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Smirnov Alexey ©2021 Created by test</Footer>
        </Layout>
    )
};
