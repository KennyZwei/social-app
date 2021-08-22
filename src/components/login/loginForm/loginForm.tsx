import React, {FC} from 'react';
import s from './loginForm.module.css';
import {Form, FormikProps} from "formik";
import FormField from "../../common/formField/formField";
import {LoginFormikValuesType, LoginFormPropsType} from "./loginFormContainer";

const LoginForm:FC<LoginFormPropsType & FormikProps<LoginFormikValuesType>> = (props) => {
    const {errors, isSubmitting} = props
    return (
                <Form className={s.loginForm}>
                    <FormField type='email' name='email' error={errors.email}/>
                    <FormField type='password' name='password' error={errors.password}/>
                    {props.captchaURL ?
                        <FormField labelText='' name='captcha' error={errors.password}
                                   addComponent={<img alt='captcha' src={props.captchaURL}/>}/>
                        : null
                    }
                    <button type="submit" disabled={isSubmitting}>Login</button>
                    <div className={s.APIError}>
                        {// @ts-ignore
                            errors.APIError}
                    </div>
                </Form>
    );
}

export default LoginForm;