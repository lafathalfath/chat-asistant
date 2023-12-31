import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Chat=()=>{
    const [chat, setChat] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/history')
        .then((res)=>{
            const chatdata = res.data.payload
            setChat(chatdata)
        })
    }, [])
    console.log(chat)
    return <>
        <Link className='text-white' to='/'>back</Link>

        <div>
            {
                chat && chat.map(item=>{
                    return <div key={item.id} className='w-full relative'>
                        <div className='m-2 p-2 rounded-md font- bg-amber-400 w-fit right-0'>{item.chat}</div>
                        <div className='m-2 p-2 rounded-md font- bg-gray-200 w-fit'>{item.response}</div>
                    </div>
                })
            }
        </div>
    </>
}

export default Chat