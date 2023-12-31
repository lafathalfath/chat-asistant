import { Link } from "react-router-dom"
import { FaCaretRight } from "react-icons/fa"

const Home=()=>{
    return <div className="h-[100vh] flex flex-col items-center justify-center">
        <h1 className="text-center text-white text-2xl font-semibold">Ask anything, your assistant is ready to answer. <br /> Click button on below to start conversation</h1>
        <Link to='/chat' className="m-5 py-3 px-6 rounded-full bg-white hover:bg-slate-500 text-gray-800 hover:text-white text-lg text-center font-semibold">Start Converstion <FaCaretRight/></Link>
    </div>
}

export default Home