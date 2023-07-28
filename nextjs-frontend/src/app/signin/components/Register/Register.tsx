import React from 'react'
import { Pacifico, Comfortaa, Be_Vietnam_Pro } from 'next/font/google'
import { Formik, Form, Field } from 'formik'
import axios from "axios"
import { RegisterSchema } from '../../validation'


// font for Header
const PacificoFont= Pacifico({
    weight:'400',
    subsets :['vietnamese'],
})
//font for content
const ComfortaaFont=Comfortaa({
    weight:'400',
    subsets:['vietnamese']
})

//font for errors
const BeVietnamProFont= Be_Vietnam_Pro({
    weight:"200",
    subsets:['vietnamese']
})





interface RegisterProps{
    changeState:Function
}
const Register = ({changeState}:RegisterProps) => {
  return (
    <>
        <h1 className= {`${PacificoFont.className} mx-6 mt-6  text-2xl text-copper-rust-800  antialiased select-none drop-shadow-2xl`}
        >
            Hello new friend
        </h1>
        <Formik
            initialValues={{
                accountId:"",
                password:"",
                email:"",
                firstName:"",
                lastName:""
            }}
            validationSchema={RegisterSchema}
            //handle submit data
            onSubmit={
                async ({accountId, password, email, firstName, lastName})=>{
                    try{
                        const {data}= await axios.post(`${process.env.sourceAPI}/auth/sign-up`,
                            {
                                accountId:accountId,
                                password:password,
                                email:email,
                                firstName:firstName,
                                lastName:lastName
                            }
                        )
                        if (data.status===200){
                            //if register success change state to login state
                            changeState()
                        }
                    }
                    catch(error){
                        console.log(error)
                    }
            }}
        >
            {({ errors, touched }) => (   
                <Form
                    className='flex flex-col m-2 pt-2 px-4 pb-6 w-full'
                >
                    <section
                        className="flex flex-col w-full" 
                        id="account-password-section"
                    >
                        {/* Username */}
                        <label className={`${ComfortaaFont.className} text-sm ml-5 text-copper-rust-800 block select-none`}>
                            Username
                        </label>
                        <Field className={`mb-1 mx-4 p-1 px-2 rounded-md 
                                        bg-copper-rust-50 text-sm drop-shadow-md
                                        ${errors.accountId  && touched.accountId ? "border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-5"}
                                        focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                type="text"
                                id="accountId"
                                name="accountId"
                                
                        />
                        <p className={`mx-6 ${BeVietnamProFont.className} text-xs text-milano-red-600`}>{errors.accountId}</p>                

                        {/* Password */}
                        <label className={`${ComfortaaFont.className} text-sm ml-5 text-copper-rust-800 block select-none`}>
                            Password
                        </label>
                        <Field className={`mb-1 mx-4 p-1 px-2 rounded-md 
                                        bg-copper-rust-50 text-sm drop-shadow-md
                                        ${errors.password  && touched.password ? "border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-5"}
                                        focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                type="password"
                                id="password"
                                name="password"
                                
                        />
                        <p className={`mx-6 ${BeVietnamProFont.className} text-xs text-milano-red-600`}>{errors.password}</p>                
                        
                    </section>

                    <section
                        className="flex flex-col w-full"
                    >
                        {/* Lastname */}
                        <label className={`${ComfortaaFont.className} text-sm ml-5 text-copper-rust-800 block select-none`}>
                        Họ 
                        </label>
                        <Field className={`mb-1 mx-4 p-1 px-2 rounded-md 
                                        bg-copper-rust-50 text-sm drop-shadow-md
                                        ${errors.lastName  && touched.lastName ? "border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-5"}
                                        focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                type="text"
                                id="lastName"
                                name="lastName"
                                
                        />
                        <p className={`mx-6 ${BeVietnamProFont.className} text-xs  text-milano-red-600`}>{errors.lastName}</p>                
                        {/* firstname */}
                        <label className={`${ComfortaaFont.className} text-sm ml-5 text-copper-rust-800 block select-none`}>
                            Tên
                        </label>
                        <Field className={`mb-1 mx-4 p-1 px-2 rounded-md 
                                        bg-copper-rust-50 text-sm drop-shadow-md
                                        ${errors.firstName  && touched.firstName ? "border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-5"}
                                        focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        
                        />
                        <p className={`mx-6 ${BeVietnamProFont.className} text-xs text-milano-red-600`}>{errors.firstName}</p>                
                    </section>

                    <section
                        className="flex flex-col w-full"
                    >
                        {/* email */}
                        <label className={`${ComfortaaFont.className} text-sm ml-5 text-copper-rust-800 block select-none`}>
                            Email
                        </label>
                        <Field className={`mb-1 mx-4 p-1 px-2 rounded-md 
                                        bg-copper-rust-50 text-sm drop-shadow-md
                                        ${errors.email  && touched.email ? "border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-5"}
                                        focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                type="email"
                                id="email"
                                name="email"
                            
                        />
                        <p className={`mx-6 ${BeVietnamProFont.className} text-xs  text-milano-red-600`}>{errors.email}</p>                
                        
                    </section>
                    <div className='flex w-full items-center justify-center mt-4'>
                        <button
                            className={`bg-gradient-to-br from-copper-rust-400 to-copper-rust-500 
                                    hover:from-copper-rust-500 from:to-copper-rust-700  w-2/4 h-[36px] rounded-md
                                        ${PacificoFont.className} drop-shadow-lg 
                                    text-copper-rust-900
                                    hover:text-copper-rust-700`}
                            type="submit"
                        >
                            Register
                        </button>

                    </div>
                </Form>
            )}
        </Formik>
    </>
  )
}

export default Register