import { useEffect, useState } from 'react'
import axios from 'axios'
import { RiRobot2Fill } from "react-icons/ri"
import { FaCaretDown, FaUser } from "react-icons/fa"
import { useSpring, animated } from 'react-spring'
import { Element, scroller } from 'react-scroll'
import CurrentConversation from './CurrentConversation'

const Conversation=()=>{
    const [scrollPosition, setScrollPosition] = useState(0)
    let docHeigth = true
    const setDocHeigth=(e)=>docHeigth=e
    const scrollHeight = document.documentElement.scrollHeight - 750
    if (scrollHeight == 0 || scrollPosition >= scrollHeight) {
        setDocHeigth(false)
    }
    const [chat, setChat] = useState(null)
    const dataForParent = chat
    // sendToParent(dataForParent)
    // const scrollToEnd=()=>{ 
    //     scroller.scrollTo('end', {
    //         duration: 500,
    //         delay: 100,
    //         smooth: true
    //     })
    // }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/history')
        .then((res)=>{
            const chatdata = res.data.payload
            setChat(chatdata)
            // console.log(chatdata.length == 0)
        }).catch(error=>{
            console.log(error)
        })
        // console.log(chat==null)
        // scrollToEnd()

        // window.addEventListener('scroll', ()=>{
        //     setScrollPosition(window.scrollY)
        // })
        // return () => {
        //     window.removeEventListener('scroll', ()=>{
        //         setScrollPosition(window.scrollY)
        //     });
        //   };
    }, [])
    // console.log(chat == null)
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
    return <Element className='pt-14 h-full scroll-smooth'>
        <animated.div style={fadeIn} className='mt-3 animate-fadeInUp relative' id='conversation'>
            {chat ? chat.map(item=>{
                return <div key={item.id} className='w-full'>
                    <div className='w-full h-fit'>
                        <div className='pb-3 flex items-center justify-end'>
                            <div className='pr-3 pl-14 flex gap-3 justify-end'>
                                <div className='h-fit py-2 px-4 sm:max-w-[75vw] rounded-md bg-amber-400 w-fit text-black'>{item.chat}</div>
                                <FaUser className='mr-2 p-1 rounded-full bg-white text-2xl text-gray-700'/>
                            </div>
                        </div>
                        <div className='pb-3 pl-3 pr-14 flex gap-3'>
                            <RiRobot2Fill className='ml-2 p-1 rounded-full bg-white text-2xl text-gray-700'/>
                            <div className='h-fit py-2 px-4 sm:max-w-[75vw] rounded-md bg-gray-200 w-fit text-black'>{item.response}</div>
                        </div>
                    </div>
                </div>
            }) : <div className='w-full h-full flex items-center justify-center'>
                <span className="loading loading-infinity loading-lg"></span>
            </div>}

            {/* <CurrentConversation payload={payloadData}/> */}

            

            {/* <div name='end' id='end' className='absolute bottom-0'></div> */}
        </animated.div>
    </Element>
}

export default Conversation