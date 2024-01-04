import { useEffect, useState } from "react"
import { FaCaretDown, FaUser } from "react-icons/fa"
import { RiRobot2Fill } from "react-icons/ri"
import { scroller } from "react-scroll"


const CurrentConversation=({payload, post, typing})=>{
    // let docHeigth = true
    // const setDocHeigth=(e)=>docHeigth=e
    // const scrollToEnd=()=>{ 
    //     scroller.scrollTo('end', {
    //         duration: 500,
    //         delay: 100,
    //         smooth: true
    //     })
    // }
    let conv = []
    if (payload){
        conv.push({chat: post, response: payload.response})
    }
    return <div className="w-full">
        {conv.length!=0 ? conv.map(item=>{
            return <div key={item.chat} className='w-full'>
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
        }) : <div>
                {post && <div className='w-full h-fit'>
                    <div className='pb-3 flex items-center justify-end'>
                        <div className='pr-3 pl-14 flex gap-3 justify-end'>
                            <div className='h-fit py-2 px-4 sm:max-w-[75vw] rounded-md bg-amber-400 w-fit text-black'>{post}</div>
                            <FaUser className='mr-2 p-1 rounded-full bg-white text-2xl text-gray-700'/>
                        </div>
                    </div>
                    <div className='pb-3 pl-3 pr-14 flex gap-3'>
                        <RiRobot2Fill className='ml-2 p-1 rounded-full bg-white text-2xl text-gray-700'/>
                        <div className='h-fit py-2 px-4 sm:max-w-[75vw] rounded-md bg-gray-200 w-fit text-black'><span className="loading loading-dots loading-sm"></span></div>
                    </div>
                </div>}
        </div>}

        {typing && <div className='pb-3 flex items-center justify-end ease-in-out duration-500'>
            <div className='pr-3 pl-14 flex gap-3 justify-end'>
                <div className='h-fit py-2 px-4 rounded-md bg-amber-400 w-fit text-black flex items-center justify-center'>
                    <span className="loading loading-dots loading-sm"></span>
                </div>
                <FaUser className='mr-2 p-1 rounded-full bg-white text-2xl text-gray-700'/>
            </div>
        </div>}
        {/* {docHeigth && <div className='p-2 fixed bottom-16 right-5 z-10 cursor-pointer select-none text-slate-400 bg-slate-800/80 hover:border-white hover:text-white border border-slate-400 rounded-md ease-in-out duration-300' onClick={scrollToEnd}>
            <FaCaretDown />
        </div>} */}
    </div>
}

export default CurrentConversation