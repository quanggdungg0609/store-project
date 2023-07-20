import React, { useEffect } from 'react'
import { Pacifico, Comfortaa, Be_Vietnam_Pro } from 'next/font/google'
import { Formik, Form, Field } from 'formik'
import axios from "axios"
import * as Yup from "yup"

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

//Yup shape for validate data
const LoginSchema=Yup.object().shape({
    accountId: Yup.string().min(8," Username cần ít nhầm 8 kí tự").required("Account không được để trống"),
    password: Yup.string().min(8," Password cần ít nhất 8 kí tự")
                            .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password cần chứa cả chữ in hoa và chữ thường")
                            .matches(/\d/, "Password cần chứa ít  nhất 1 chữ số từ 0-9")
                            .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password cần chứa ít nhất 1 kí tự đặc biệt")
                            .required("Password không được để trống")
})

const Login = () => {

    return (
        <>
            <h1 className= {`${PacificoFont.className} m-6 text-2xl text-copper-rust-800 select-none `}
                            
            > Welcome back</h1>
            <Formik
                initialValues={{
                    accountId:"",
                    password:""
                }}
                onSubmit={
                    async ({accountId, password}, actions)=>{
                        try{
                            const {data}= await axios.post(`${process.env.sourceAPI}/auth/sign-in`,
                                {
                                    accountId:accountId,
                                    password:password
                                }
                            )
                            // save refresh-token to local storage and access token to cookie
                            window.localStorage.setItem("refresh-token",data.refresh_token)
                            document.cookie=`refresh-token=${data.access_token}`
                        }
                        catch(error:any){
                            console.log(error.response.data.message)
                            if (error.response.data.message==="Password incorrect"){
                                actions.setFieldError("password","Password không đúng")
                            }
                            else if( error.response.data.message==="AccountID incorrect"){
                                actions.setFieldError("accountId","Username không tồn tại")
                            }
                        }
                }}
                validationSchema={LoginSchema}
            >

                {({ errors, touched }) => (
                    <Form 
                        className="flex flex-col m-4 pt-2 px-4 pb-6"
                    >
                        <label 
                            className={`${ComfortaaFont.className} text-md ml-5 text-copper-rust-800 block select-none`}
                            htmlFor="accountId"
                        >
                            Username
                        </label>
                        <Field className={`mb-2 mx-4 p-1 px-2 rounded-md 
                                        bg-copper-rust-50 
                                        ${errors.accountId  && touched.accountId?"border border-solid border-milano-red-600 bg-milano-red-200":"border-0"}
                                        focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                type="text"
                                id="accountId"
                                name="accountId"
                                required=""
                        />
                        {errors.accountId  && touched.accountId? <p className={`mx-6 ${BeVietnamProFont.className} text-xs mb-2 text-milano-red-600`}>{errors.accountId}</p> : null}
                        <label className={`${ComfortaaFont.className} ml-5 text-md text-copper-rust-800 select-none`}>
                            Password
                        </label>
                        <Field className={`mb-2 mx-4 rounded-md p-1
                                        bg-copper-rust-50
                                        ${errors.password  && touched.password?"border border-solid border-milano-red-600 bg-milano-red-200":"border-0"}
                                        focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                type="password"
                                id="password"
                                name="password"
                                required=""

                        />
                        { errors.password  && touched.password? <p className={`mx-6 ${BeVietnamProFont.className} text-xs mb-2 text-milano-red-600`}>{errors.password}</p> : null}

                        <div className='flex w-full items-center justify-center mt-4'>
                            <button  
                                    className={`bg-gradient-to-br from-copper-rust-400 to-copper-rust-500 
                                                hover:from-copper-rust-500 from:to-copper-rust-700  w-2/4 h-[36px] rounded-md
                                                ${PacificoFont.className} shadow-lg
                                                text-copper-rust-900
                                                hover:text-copper-rust-700`}
                                    type="submit"
                            > Sign In</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default Login