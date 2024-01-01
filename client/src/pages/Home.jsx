import { Link } from "react-router-dom"
import { FaCaretRight } from "react-icons/fa"

const Home=()=>{
    return <div className="h-[100vh] flex flex-col items-center justify-center">
        <h1 className="text-center text-white text-4xl font-montserrat">Ask anything, your assistant is ready to answer. <br /> Click button on below to start conversation</h1><br />
        <Link to='/chat' className="m-5 py-2 px-5 rounded-full bg-white hover:bg-yellow-500 text-gray-800 text-lg text-center font-semibold flex items-center justify-center gap-2">
            <div>Start Converstion</div><FaCaretRight className="text-xl"/>
        </Link>
    </div>
}

export default Home