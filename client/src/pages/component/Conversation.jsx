import { useEffect, useState } from 'react'
import axios from 'axios'
import { RiRobot2Fill } from "react-icons/ri"
import { FaUser } from "react-icons/fa"

const Conversation=({data})=>{
    const [chat, setChat] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/history')
        .then((res)=>{
            const chatdata = res.data.payload
            setChat(chatdata)
        }).catch(error=>{
            console.log(error)
        })
    }, [])
    return <div className='pb-10'>
        <div className='mb-12 mt-3'>
            {chat && chat.map(item=>{
                return <div key={item.id} className='pt-2 w-full'>
                    <div className='w-full h-fit'>
                        <div className='pb-3 flex items-center justify-end'>
                            <div className='pr-3 pl-14 flex gap-3 justify-end'>
                                <div className='h-fit py-2 px-4 rounded-md bg-amber-400 w-fit'>{item.chat}</div>
                                <FaUser className='mr-2 p-1 rounded-full bg-white text-2xl'/>
                            </div>
                        </div>
                        <div className='pb-3 pl-3 pr-12 flex gap-3'>
                            <RiRobot2Fill className='ml-2 p-1 rounded-full bg-white text-2xl'/>
                            <div className='h-fit py-2 px-4 rounded-md bg-gray-200 w-fit'>{item.response}</div>
                        </div>
                    </div>
                </div>
            })}
            {data && <div className='pb-3 flex items-center justify-end'>
                <div className='pr-3 pl-14 flex gap-3 justify-end'>
                    <div className='h-fit py-2 px-4 rounded-md bg-amber-400 w-fit'>{data}</div>
                    <FaUser className='mr-2 p-1 rounded-full bg-white text-2xl'/>
                </div>
            </div>}
        </div>
    </div>
}

export default Conversation