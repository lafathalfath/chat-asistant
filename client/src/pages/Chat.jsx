import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Chat=()=>{
    const [chat, setChat] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/history')
        .then((res)=>{
        console.log(res.data)
        })
    })
    return <>
        <Link className='text-white' to='/'>back</Link>
    </>
}

export default Chat