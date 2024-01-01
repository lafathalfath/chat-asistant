import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { RiSendPlaneFill } from "react-icons/ri"
import { IoIosArrowBack } from "react-icons/io"
import Conversation from './component/Conversation'

const Chat=()=>{
    const [typing, setTyping] = useState(false)
    const [post, setPost] = useState(null)
    const handleKeyPress=(e)=>{
        if (e.key == 'Enter') {
            handleSendMessage(post)
        }
    }
    const handleSendMessage=async(payload)=>{
        if (payload != null) {
            await axios.post('http://127.0.0.1:8000/api/send-chat', {message: payload})
            .then(res=>console.log(res))
            .catch(err=>console.error(err))
            location.reload()
        }
    }
    
    setTimeout(()=>{setTyping(false)}, 1000)
    const suggest = ['Hi!', 'How this chatbot working?']
    return <div className='min-h-[100vh]'>
        <div className='py-3 px-5 w-full bg-gray-700 flex items-center gap-5 fixed top-0 z-20'>
            <Link className='py-2 px-2 rounded-lg text-white text-xl hover:bg-slate-800' to='/'><IoIosArrowBack /></Link>
            <div className='text-white text-2xl font-semibold select-none'>My Asistant</div>
        </div>

        <Conversation typing={typing}/>

        <div className='px-5 flex items-center justify-center gap-3 bottom-16 left-[50%] -translate-x-[50%] fixed z-10'>
            {suggest && suggest.map(item=>{
                return <div key={item} className='px-5 py-2 border border-slate-400 bg-slate-800/80 hover:border-white hover:text-white rounded-md cursor-pointer select-none ease-in-out duration-300' onClick={()=>{handleSendMessage(item)}}>
                    {item}
                </div>
            })}
        </div>

        <div>
            <div  className='px-5 pb-3 pt-10 w-full fixed bottom-0 bg-gradient-to-t from-slate-800 via-slate-800 to-transparent'>
                <div className='flex items-center justify-between gap-3 bg-white rounded-lg h-10'>
                    <input type="text" className='w-full h-full rounded-lg px-3 bg-white focus:outline-none text-black' placeholder='Type here to ask' onChange={(post)=>{
                        setPost(post.target.value)
                        setTyping(true)
                    }} name='message' onKeyPress={handleKeyPress}/>
                    <button className='p-3 bg-slate-800 hover:bg-gray-700 text-white border border-white h-full rounded-r-md' onClick={()=>{handleSendMessage(post)}}>
                        <RiSendPlaneFill/>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Chat