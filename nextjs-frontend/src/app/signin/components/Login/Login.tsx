import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'


interface Values{
    accountId: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
}

const Login : React.FC= () => {
    const initalValues:Values={
        accountId:"",
        password:"",
        firstName:"",
        lastName:"",
        email:""
    }
    
    return (
        <>
        <h1>Register</h1>
        <Formik
            initialValues={initalValues}
            onSubmit={(values, actions)=>{
                console.log({values, actions})
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
            }}
        >
            <Form>
                <label htmlFor='accountId'>Account</label>
                <Field id="accountId" name="accountId"/>
                <label htmlFor='password'>Password</label>
                <Field id="password" name="password"/>
                
            </Form>
        </Formik>
        </>
    )
}

export default Login