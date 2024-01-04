import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { RiSendPlaneFill } from "react-icons/ri"
import { IoIosArrowBack } from "react-icons/io"
import Conversation from './component/Conversation'
import CurrentConversation from './component/CurrentConversation'
import { FaCaretDown } from 'react-icons/fa'
import { scroller } from 'react-scroll'

const Chat=()=>{

    const [typing, setTyping] = useState(false)
    const [post, setPost] = useState(null)
    const [postChat, setPostChat] = useState(null)
    const [payloadData, setPayloadData] = useState(null)
    const inputRef = useRef()
    const handleKeyPress=(e)=>{
        if (e.key == 'Enter') {
            handleSendMessage(post)
        }
    }
    const handleSendMessage=async(payload)=>{
        if (payload != null) {
            setPostChat(payload)

            axios.post('http://127.0.0.1:8000/api/send-chat', {message: payload})
            .then(res=>setPayloadData(res.data))
            .catch(err=>console.error(err))
            scrollToEnd()

            inputRef.current.value = null
        }
    }
    setTimeout(()=>{setTyping(false)}, 1500)
    const suggest = ['Hi!', 'How this chatbot working?']

    const [scrollPosition, setScrollPosition] = useState(0)
    let docHeigth = true
    const setDocHeigth=(e)=>docHeigth=e
    const scrollHeight = document.documentElement.scrollHeight - 50
    
    if (scrollHeight == 0 || scrollPosition >= scrollHeight) {
        setDocHeigth(false)
    }else{
        setDocHeigth(true)
    }
    const scrollToEnd=()=>{ 
        scroller.scrollTo('end', {
            duration: 500,
            delay: 100,
            smooth: true
        })
    }
    useEffect(()=>{
        scrollToEnd()
    }, [])
    
    return <div className='pb-28 min-h-[100vh] relative' id='chatPage'>
        <div className='py-3 px-5 w-full bg-gray-700 flex items-center gap-5 fixed top-0 z-20'>
            <Link className='py-2 px-2 rounded-lg text-white text-xl hover:bg-slate-800' to='/'><IoIosArrowBack /></Link>
            <div className='text-white text-2xl font-semibold select-none'>My Asistant</div>
        </div>

        <Conversation/>
        <CurrentConversation payload={payloadData} post={postChat} typing={typing}/>

        <div className='px-5 flex items-center justify-center gap-3 fixed bottom-16 z-10'>
            {suggest && suggest.map(item=>{
                return <div key={item} name='suggest' className='px-5 py-2 border border-slate-400 bg-slate-800/80 hover:border-white hover:text-white rounded-md cursor-pointer select-none ease-in-out duration-300' onClick={()=>{
                    handleSendMessage(item)
                }}>
                    {item}
                </div>
            })}
        </div>

        <div  className='px-5 pb-3 pt-10 w-full fixed bottom-0 bg-gradient-to-t from-slate-800 via-slate-800 to-transparent'>
            <div className='flex items-center justify-between gap-3 bg-white rounded-lg h-10'>
                <input type="text" className='w-full h-full rounded-lg px-3 bg-white focus:outline-none text-black' placeholder='Type here to ask' onChange={(post)=>{
                    setPost(post.target.value)
                    setTyping(true)
                    scrollToEnd()
                }} name='message' onKeyPress={handleKeyPress} ref={inputRef}/>
                <button className='p-3 bg-slate-800 hover:bg-gray-700 text-white border border-white h-full rounded-r-md' onClick={()=>{handleSendMessage(post);inputRef.current.value = ''}}>
                    <RiSendPlaneFill/>
                </button>
            </div>
        </div>

        {docHeigth && <div className='p-2 fixed bottom-16 right-5 z-10 cursor-pointer select-none text-slate-400 bg-slate-800/80 hover:border-white hover:text-white border border-slate-400 rounded-md ease-in-out duration-300' onClick={scrollToEnd}>
            <FaCaretDown />
        </div>}

        <div name='end' id='end' className='absolute bottom-0'></div>
    </div>
}

export default Chat