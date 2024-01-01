import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { RiSendPlaneFill } from "react-icons/ri"
import { IoIosArrowBack } from "react-icons/io"
import Conversation from './component/Conversation'

const Chat=()=>{
    const [data, setData] = useState(null)
    const handleSendMessage=async()=>{
        try {
            if(data) {
                const res = await axios('http://127.0.0.1:8000/api/send-chat',{message: data})
                // res
            }
        } catch (error) {
            console.error(error)
        }
    }
    return <>
        <div className='py-3 px-5 bg-gray-700 flex items-center gap-5'>
            <Link className='py-2 px-2 rounded-lg text-white text-xl hover:bg-slate-800' to='/'><IoIosArrowBack /></Link>
            <div className='text-white text-2xl font-semibold'>My Asistant</div>
        </div>

        <Conversation data={data}/>

        <div>
            <form onSubmit={()=>handleSendMessage(data)} className='px-5 pb-3 pt-10 w-full fixed bottom-0 bg-gradient-to-t from-slate-800 via-slate-800 to-transparent'>
                <div className='flex items-center justify-between gap-3 bg-white rounded-lg h-10'>
                    <input type="text" className='w-full h-full rounded-lg px-3 focus:outline-none' placeholder='Type here to ask' onChange={(data)=>setData(data.target.value)}/>
                    <button className='p-3 bg-slate-800 hover:bg-gray-700 text-white border border-white h-full rounded-r-md'><RiSendPlaneFill/></button>
                </div>
            </form>
        </div>
    </>
}

export default Chat