import {Form, Formik} from "formik";
import {FC} from "react";
import FormField from "../../common/formField/formField";
import {SearchConfigType} from "../../../redux/reducers/usersReducer";

type ValuesType = {
    term: string
    friend:boolean | null
}
type PropsType = {
    requestUsersAndSetSearchConfig: (currentPage:number, term:string, friend:boolean | null) => void
}
const SearchForm:FC<PropsType> = ({requestUsersAndSetSearchConfig}) =>{
    const initialValues:ValuesType = {
        term: '',
        friend: null
    }

    const onSubmit = (values:ValuesType) =>{
        function parseToBoolean(val:any):boolean | null {
            return val === 'null' || null ? null : val === 'true'
        }
        requestUsersAndSetSearchConfig(1, values.term, parseToBoolean(values.friend))
    }
    return(
        <div className='searchForm'>
            <Formik
                initialValues={initialValues}
                    onSubmit={onSubmit}>
                {
                    ({errors}) =>(
                        <Form>
                            <FormField name='term' error={errors.term}  />
                            <FormField name='friend' error={errors.term} inputTeg='select' innerField={[
                                <option  value='null' selected={true}>All users</option>,
                                <option value='true'>Only friends</option>,
                                <option value='false'>Not friends</option>
                            ]}  />
                            <button>Search</button>
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}

export default SearchForm