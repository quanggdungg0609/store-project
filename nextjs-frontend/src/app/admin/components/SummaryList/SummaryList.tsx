"use client"

import React, {useState} from 'react'
import { CgChevronDown } from "react-icons/cg";
import { motion, AnimatePresence,stagger } from "framer-motion"
import { boolean } from 'yup';
const allList=[
    "Đơn hàng",
    "Người dùng/đơn hàng"
]


const ordersArr=[
    {
        orderNumber: "Order #1",
        client: "abc1",
        isComplete: false
    },
    {
        orderNumber: "Order #2",
        client: "abc3",
        isComplete: true
    },
    {
        orderNumber: "Order #3",
        client: "abc3",
        isComplete: true
    },
    {
        orderNumber: "Order #4",
        client: "abc4",
        isComplete: false
    },
    {
        orderNumber: "Order #5",
        client: "abc5",
        isComplete: false
    },
    {
        orderNumber: "Order #6",
        client: "abc6",
        isComplete: true
    },
    {
        orderNumber: "Order #7",
        client: "abc7",
        isComplete: false
    },
    {
        orderNumber: "Order #8",
        client: "abc8",
        isComplete: false
    },
    {
        orderNumber: "Order #9",
        client: "abc9",
        isComplete: false
    },
    {
        orderNumber: "Order #10",
        client: "abc10",
        isComplete: false
    },
]

const listSample2=[
    {
        client:"abc1",
        numberOrder:5
    },
    {
        client:"abc2",
        numberOrder:10
    },
    {
        client:"abc3",
        numberOrder:10
    },
    {
        client:"abc4",
        numberOrder:5
    },
    {
        client:"abc5",
        numberOrder:6 
    },
    {
        client:"abc6",
        numberOrder:12
    }
]

interface SumListProps{
    header: string[]
    data: any[]
}
const SumList=({header, data}: SumListProps)=>{
    return (
        <table className="border-separate border-2 border-waikawa-gray-800 w-full rounded-3xl border-spacing-0">
            <thead className='bg-waikawa-gray-400'>
                <tr >
                    {header.map((item, index)=>{
                        return (
                            <th key={item} 
                            className={`${index < header.length -1 && "border-r" }
                                        ${index === 0 && "rounded-tl-3xl"}
                                        ${index === header.length -1 && "rounded-tr-3xl"}
                                        border-b border-waikawa-gray-500 py-4 px-2 `}
                            >
                                {item}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index)=>{
                    return (
                        <tr key={index}>
                            {
                                Object.keys(item).map((key, indexItem)=>{
                                    return(
                                        <td key={key}
                                            className={`p-1 ${ indexItem < Object.keys(item).length - 1 && "border-r border-waikawa-gray-500" }
                                                        ${index % 2 !== 0 && "bg-waikawa-gray-300"}
                                                        ${index === data.length -1 && (indexItem === 0 && "rounded-bl-3xl")}
                                                        ${index === data.length -1 && (indexItem === Object.keys(item).length - 1 && "rounded-br-3xl")}`}
                                        >
                                            {
                                                typeof(item[key]) === "boolean" ?  (item[key]? "complete" :" pending") :  item[key]
                                            }
                                        </td>
                                    )
                                })
                            }
                        </tr>   
                    )
                })}
            </tbody>
        </table>
    )
}

const SummaryList = () => {
    const [list, setList]=useState<string>(allList[0])
    const [showLists, setShowLists]= useState<boolean>(false)

    return (
        <div className='w-1/3 h-full bg-waikawa-gray-100 rounded-3xl p-3 shadow-2xl flex flex-col gap-3'>
            <div id="dropdown relative">

                <motion.div className={`relative flex flex-row py-2  box-content bg-copper-rust-50 border drop-shadow-md rounded-full px-2  items-center gap-2`}
                    layout
                    initial={{
                        width: showLists?"200px":"33.3333%",
                        justifyContent: showLists? "space-between" :"flex-start",

                    }}
                    animate={{
                        width:showLists?"200px":"33.3333%", 
                        justifyContent: showLists? "space-around" :"flex-start",

                    }}
                    transition={{type:"just"}}
                    onClick={()=>(setShowLists(!showLists))}
                >
                    <span className='w-full truncate pr-1'>{list}</span>
                    <div className='absolute right-1 top-[50%] translate-y-[-50%]'>
                        <CgChevronDown/>

                    </div>
                </motion.div>
                <AnimatePresence>

                    { showLists &&
                        <motion.div className='dropdown-content flex-col items-start justify-center drop-shadow-md w-[220px] mt-2 rounded-2xl
                                                absolute border bg-copper-rust-50 z-30'
                                    initial={{
                                        y:-10,
                                        opacity:0,
                                    }}
                                    animate={{
                                        y:0,
                                        opacity:1
                                    }}
                                    exit={{
                                        y:-10,
                                        opacity:0,
                                        
                                    }}
                                    transition={{
                                        type:"spring",
                                        when:"beforeChildren"
                                        
                                    }}
                        >
                            {allList.map((item, index)=>{
                                return( 
                                    <div key={item} className={`p-2 pr-3 hover:bg-copper-rust-400 
                                                                hover:text-copper-rust-50
                                                                ${index===0 && "rounded-t-2xl"} 
                                                                ${index===allList.length-1 && "rounded-b-2xl"}`}
                                        onClick={()=>{
                                            setList(item)
                                            setShowLists(!showLists)
                                        }}
                                    >
                                        {item}
                                    </div>
                                )
                            })}
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
            <div className='w-full h-full rounded-lg  drop-shadow-md z-0'>
                {list==="Đơn hàng"&& <SumList header={["Đơn hàng", "Khách", "Tình trạng"]} data={ordersArr}/>}
                {list==="Người dùng/đơn hàng"&& <SumList header={["Khách hàng", "Số đơn"]} data={listSample2}/>}
            </div>
        </div>
    )
}

export default SummaryList