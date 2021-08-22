import {withFormik} from "formik";
import {ContactsType, ProfileType} from "../../../../redux/reducers/profileReducer";
import ProfileDataForm from "./profileDataForm";

export type FormikValuesType = {
    fullName: string
    aboutMe: string
    lookingForAJobDescription: string
    lookingForAJob: true
    contacts: ContactsType
}
export type FormikPropsType = {
    profile: ProfileType
    onEditOff: () => void
    setProfileInformation: (profile: ProfileType) => void
}
const ProfileDataFormContainer = withFormik<FormikPropsType, FormikValuesType>({
    mapPropsToValues: ({profile}) => {
        return {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            lookingForAJob: true,
            contacts: profile.contacts,
        }
    },
    validateOnBlur: true,
    validateOnChange: false,
    handleSubmit: (values, formikBag) => {

        formikBag.props.setProfileInformation({...formikBag.props.profile, ...values})
        formikBag.props.onEditOff()
        alert("xer")
    }

})(ProfileDataForm)
export default ProfileDataFormContainer