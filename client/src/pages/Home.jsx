import { Link } from "react-router-dom"
import { FaCaretDown, FaCaretRight } from "react-icons/fa"
// import { useState } from "react"

const Home=()=>{
    
    return <div className="h-[100vh] flex flex-col items-center justify-center bg-gradient-to-t from-transparent to-gray-900">
        <div className="text-center text-4xl font-montserrat relative cursor-default">
            <div className="blur-lg text-yellow-100 animate-pulse ease-in-out">
                Ask anything, your assistant is ready to answer. <br /> Click button on below to start conversation
            </div>
            <div className="text-white top-[50%] left-[50%] absolute w-full -translate-x-[50%] -translate-y-[50%]">
                Ask anything, your assistant is ready to answer. <br /> Click button on below to start conversation
            </div>
        </div><br />
        <div className="animate-bounce ease-in-out duration-300 text-2xl relative">
            <FaCaretDown className="blur-sm text-yellow-400"/>
            <FaCaretDown className="text-white top-0 absolute"/>
        </div>
        <div className="p-0 m-5 w-fit h-fit relative">
            <Link to='/chat' className="py-2 px-5 rounded-full bg-white hover:bg-yellow-100 text-gray-800 text-lg text-center font-semibold flex items-center justify-center gap-2 hover:shadow-yellow-400 hover:shadow-md ease-in-out duration-300">
                <div>Start Converstion</div><FaCaretRight className="text-xl"/>
            </Link>
            {/* <div className='h-full w-full bg-yellow-500 rounded-full blur-lg absolute top-0 -z-10'></div> */}
        </div>
    </div>
}

export default Home