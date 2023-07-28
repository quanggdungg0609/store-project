import React from 'react'
import { Pacifico, Comfortaa, Be_Vietnam_Pro } from 'next/font/google'
import { Formik, Form, Field } from 'formik'
import axios from "axios"
import { LoginSchema } from '../../validation'

//header font
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



//interface props
interface LoginMobileProps{
    changeState: Function
}

const Login_M = (props: LoginMobileProps) => {

    return (
        <div className="flex flex-col items-center">
            <h1 className= {`${PacificoFont.className} m-2 text-2xl text-copper-rust-800 select-none drop-shadow-xl`}>
                Welcome back
            </h1>
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
                                            bg-copper-rust-50 shadow-lg
                                            ${errors.accountId  && touched.accountId?"border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-6"}
                                            focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                    type="text"
                                    id="accountId"
                                    name="accountId"
                                    required
                                    autoComplete="new-password"
                            />
                            {errors.accountId  && touched.accountId? <p className={`mx-6 ${BeVietnamProFont.className} text-xs mb-2 text-milano-red-600`}>{errors.accountId}</p> : null}
                            <label className={`${ComfortaaFont.className} ml-5 text-md text-copper-rust-800 select-none`}>
                                Password
                            </label>
                            <Field className={`mb-2 mx-4 rounded-md p-1
                                            bg-copper-rust-50 shadow-lg
                                            ${errors.password  && touched.password?"border border-solid border-milano-red-600 bg-milano-red-200":"border-0 mb-6"}
                                            focus:bg-copper-rust-100 focus:outline-copper-rust-700 focus:text-copper-rust-700`}
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    autoComplete="new-password"

                            />
                            { errors.password  && touched.password? <p className={`mx-6 ${BeVietnamProFont.className} text-xs mb-1 text-milano-red-600`}>{errors.password}</p> : null}

                            <div className='flex w-full items-center justify-center mt-4'>
                                <button  
                                        className={`bg-gradient-to-br from-copper-rust-400 to-copper-rust-500 
                                                    hover:from-copper-rust-500 from:to-copper-rust-700  w-2/4 h-[36px] rounded-md
                                                    ${PacificoFont.className} shadow-lg mt-2
                                                    text-copper-rust-900
                                                    hover:text-copper-rust-700`}
                                        type="submit"
                                > Sign In</button>
                            </div>
                        </Form>
                    )}
            </Formik>
            <p 
                onClick={()=>{props.changeState()}}
                className={`${ComfortaaFont.className} fixed bottom-4 text-xs cursor-pointer text-copper-rust-800 select-none drop-shadow-md`}>
                Bạn chưa có tài khoản?
            </p>
        </div>
    )
}

export default Login_M