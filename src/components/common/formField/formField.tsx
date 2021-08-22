import React from 'react';
import s from './formField.module.css';
import {Field} from "formik";
type PropsType = {
    name:string
    error:string | undefined
    labelText?:string
    addComponent?:React.ReactNode
    inputTeg?:string
    type?:string
    placeholder?:string
    innerField?:Array<React.ReactNode> | null
}
const FormField = ({name, error, labelText = name, addComponent=null,
                       inputTeg = 'input', type = 'text', placeholder=name, innerField=null}:PropsType) => {
    return (
        <div className={s.form_field}>
            <label htmlFor={name}><b>{labelText}</b></label>
            {addComponent}
            <Field  as={inputTeg} id={name} type={type} name={name} placeholder={placeholder}>{innerField?.map(el => el)}</Field>
            <div className={s.error_message}>{error}</div>
        </div>
    );
}

export default FormField;