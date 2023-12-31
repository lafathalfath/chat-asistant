import { Link } from "react-router-dom"

const Home=()=>{
    return <div className="h-[100vh] flex flex-col items-center justify-center">
        <h1 className="text-center text-white text-2xl font-semibold">Ask anything, your assistant is ready to answer. <br /> Click button on below to start conversation</h1>
        <Link to='/chat' className="text-white text-lg text-center">Start Converstion</Link>
    </div>
}

export default Home