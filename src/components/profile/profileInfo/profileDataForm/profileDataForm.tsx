import React, {FC} from 'react';
import s from './profileDataForm.module.css';
import {Form, FormikProps} from "formik";
import FormField from "../../../common/formField/formField";
import {FormikPropsType, FormikValuesType} from "./profileDataFormContainer";

const ProfileDataForm: FC<FormikPropsType & FormikProps<FormikValuesType>> = (props) => {
    const {errors, profile, isSubmitting} = props
    return (
        <div className={s.profile_data_form}>
            <Form className={s.loginForm}>
                <FormField name='fullName' error={errors.fullName}/>
                <FormField name='aboutMe' labelText='about Me' error={errors.aboutMe} inputTeg='textarea'/>
                <FormField name='lookingForAJobDescription' labelText='skills'
                           error={errors.lookingForAJobDescription} inputTeg='textarea'/>
                <div className={s.contacts}>
                    <b>Contacts</b>:
                    {Object.keys(profile.contacts).map(keyName => (
                        <FormField labelText={keyName} name={`contacts.${keyName}`}
                                   placeholder={keyName} error={errors[keyName as keyof FormikValuesType] as string}/>)
                    )}
                </div>
                <button type="submit" disabled={isSubmitting}>Save</button>
                <div className={s.APIError}>
                </div>
            </Form>
        </div>
    );
}

export default ProfileDataForm;