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

interface RegisterMobileProps{
    changeState: Function
}

const Register_M = (props: RegisterMobileProps) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className= {`${PacificoFont.className} m-2 text-2xl text-copper-rust-800 select-none drop-shadow-md`}>
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
                            props.changeState()
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
                        className="flex flex-row w-full "
                    >
                        {/* Lastname */}
                        <div className='flex flex-col '>
                            <label className={`${ComfortaaFont.className}  text-sm ml-5 text-copper-rust-800 block select-none`}>
                            Họ 
                            </label>
                            <Field className={`mb-1 mx-4 p-1 px-2 rounded-md 
                                            bg-copper-rust-50 text-sm  w-4/5 shadow-md
                                            ${errors.lastName  && touched.lastName ? "border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-6"}
                                            focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    autoComplete="new-password"
                            />
                            <p className={`mx-6 ${BeVietnamProFont.className} text-xs mb-1 text-milano-red-600`}>{errors.lastName}</p>                
                        </div>

                        <div className='flex flex-col'>
                            {/* firstname */}
                            <label className={`${ComfortaaFont.className} text-sm ml-5 text-copper-rust-800 block select-none`}>
                                Tên
                            </label>
                            <Field className={`mb-1 mx-4 p-1 px-2 rounded-md 
                                            bg-copper-rust-50 text-sm w-4/5 shadow-md
                                            ${errors.firstName  && touched.firstName ? "border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-6"}
                                            focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            autoComplete="new-password"
                            />
                            <p className={`mx-6 ${BeVietnamProFont.className} text-xs mb-1 text-milano-red-600`}>{errors.firstName}</p>
                        </div>
                        
                                       
                    </section>

                    <section
                        className="flex flex-col w-full" 
                        id="account-password-section"
                    >
                        {/* Username */}
                        <label className={`${ComfortaaFont.className} text-sm ml-5 text-copper-rust-800 block select-none`}>
                            Username
                        </label>
                        <Field className={`mb-1 mx-4 p-1 px-2 rounded-md 
                                        bg-copper-rust-50 text-sm shadow-md
                                        ${errors.accountId  && touched.accountId ? "border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-6"}
                                        focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                type="text"
                                id="accountId"
                                name="accountId"
                                autoComplete="new-password"
                        />
                        <p className={`mx-6 ${BeVietnamProFont.className} text-xs mb-1 text-milano-red-600`}>{errors.accountId}</p>                

                        {/* Password */}
                        <label className={`${ComfortaaFont.className} text-sm ml-5 text-copper-rust-800 block select-none`}>
                            Password
                        </label>
                        <Field className={`mb-1 mx-4 p-1 px-2 rounded-md 
                                        bg-copper-rust-50 text-sm shadow-md
                                        ${errors.password  && touched.password ? "border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-6"}
                                        focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                type="password"
                                id="password"
                                name="password"
                                autoComplete="new-password"
                        />
                        <p className={`mx-6 ${BeVietnamProFont.className} text-xs mb-1 text-milano-red-600`}>{errors.password}</p>                
                        
                    </section>

                    

                    <section
                        className="flex flex-col w-full"
                    >
                        {/* email */}
                        <label className={`${ComfortaaFont.className} text-sm ml-5 text-copper-rust-800 block select-none`}>
                            Email
                        </label>
                        <Field className={`mb-1 mx-4 p-1 px-2 rounded-md 
                                        bg-copper-rust-50 text-sm shadow-md
                                        ${errors.email  && touched.email ? "border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-6"}
                                        focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="new-password"
                        />
                        <p className={`mx-6 ${BeVietnamProFont.className} text-xs mb-2 text-milano-red-600`}>{errors.email}</p>                
                        
                    </section>
                    <div className='flex w-full items-center justify-center mt-4'>
                        <button
                            className={`bg-gradient-to-br from-copper-rust-400 to-copper-rust-500 
                                    hover:from-copper-rust-500 from:to-copper-rust-700  w-2/4 h-[36px] rounded-md
                                        ${PacificoFont.className} shadow-lg 
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
            <p 
                onClick={()=>{props.changeState()}}
                className={`${ComfortaaFont.className} fixed bottom-4 text-xs cursor-pointer text-copper-rust-800 select-none`}>
                Quay lại đăng nhập
            </p>
        </div>
    )
}

export default Register_M