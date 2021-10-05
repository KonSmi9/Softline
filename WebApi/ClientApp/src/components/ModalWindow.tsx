import React, {FC, useRef} from "react";
import { DatePicker, Form, Input, Modal, Switch} from "antd";
import TextArea from "antd/es/input/TextArea";
import {data, IEmployee} from "../types/types";
import moment from "moment";


interface ModalWindowProps {
    visible: boolean;
    employee: IEmployee | undefined,
    onCreate: (values: IEmployee) => void;
    onUpdate: (values: IEmployee, id: number)=>void;
    onCancel: () => void;
}
export const ModalWindow : FC<ModalWindowProps> =({visible, onCreate, onCancel,employee,onUpdate}, ) => {
    const dateFormat = 'YYYY/MM/DD';
    const [form] = Form.useForm();

    if(employee !== undefined && employee !== null){
        form.setFieldsValue({surname: employee.surname})
        form.setFieldsValue({firstname: employee.firstname})
        form.setFieldsValue({patronymic: employee.patronymic})
        form.setFieldsValue({aboutMe: employee.aboutMe})
    }else{
        form.setFieldsValue({surname: ''})
        form.setFieldsValue({firstname: ''})
        form.setFieldsValue({patronymic: ''})
        form.setFieldsValue({aboutMe: ''})
    }

    return(
        <Modal
            visible={visible}
            title="Create a new collection"
            okText= {employee ?  "Изменить" : "Создать "}
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values: IEmployee) => {
                        form.resetFields();
                        employee ?  onUpdate(values, employee.id) : onCreate(values)
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{ modifier: 'public' }}
            >
                {data.map((item,  index)=>{
                    return(
                        <Form.Item
                            key={index}
                            name={item.name}
                            label={item.label}
                            rules={[{ required: true, message: 'Введите '+ item.label}]}
                        >
                            <Input />
                        </Form.Item>
                    )
                })}
                <Form.Item
                    name={"dateOfBirth"}
                    label={"Дата рождения "}
                    rules={[{ required: true, message: 'Дата рождения  не  указана'}]}
                >
                    <DatePicker/>
                </Form.Item>
                <Form.Item
                    name={"aboutMe"}
                    label={"Обо мне"}
                >
                    <TextArea/>
                </Form.Item>
                <Form.Item
                    name={"decre"}
                    label={"В Декрете"}
                >
                    <Switch defaultChecked={employee? employee.decre: false}/>
                </Form.Item>
            </Form>


        </Modal>
    )
}
