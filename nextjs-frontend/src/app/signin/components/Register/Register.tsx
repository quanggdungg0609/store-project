import React from 'react'
import { useFormik } from 'formik'

import "./Register.css"


const Register : React.FC= () => {
    const formik= useFormik({
        initialValues:{
                accountId:"",
                password:"",
                firstName:"",
                lastName:"",
                email:""
        },
        onSubmit: function (values){
            alert(`You are registered! Name: ${values.firstName + values.lastName}. Email: ${values.email}`)
        }
    })
    
    return (
        <>
            <form className='w-full p-2' onSubmit={formik.handleSubmit}>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">First Name</label>
                        <input 
                            className={`appearance-none block w-full ${formik.touched.firstName && formik.errors.firstName ? "bg-red-200" : "bg-gray-200"} text-gray-700 border rounded py-3 px-4 mb-3 
                                        leading-tight focus:outline-none focus:bg-white`}
                            id="firstName" type="text" placeholder="First Name" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">Last Name</label>
                        <input 
                            className={`appearance-none block w-full ${formik.touched.lastName && formik.errors.lastName ? "bg-red-200" : "bg-gray-200"} text-gray-700 border rounded py-3 px-4 mb-3 
                                        leading-tight focus:outline-none focus:bg-white`}
                            id="lastName" type="text" placeholder="Last Name" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}/>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="accountId">
                        Account ID
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                        px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="accountId" 
                        type="text"  
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={ formik.values.accountId}
                        placeholder="Account ID"/>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                        py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="password" 
                        type="password"  
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={ formik.values.password}placeholder="Password"/>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                        py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="email" 
                        type="email"  
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={ formik.values.email}
                        placeholder="Email"/>
                    </div>
                </div>
                <div className="flex flex-row justify-end">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mr-3 rounded jus" type='submit'>
                        Sign Up
                    </button>
                </div>
            </form>
        </>
    )
}

export default Register