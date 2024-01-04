import { FaCaretLeft } from "react-icons/fa"

const NotFound=()=>{
    return <div className="w-full min-h-[100vh] flex flex-col items-center justify-center gap-3">
        <div className="text-2xl font-semibold">
            404
        </div>
        <div className="text-4xl relative">
            <div className="text-red-500 blur-md animate-pulse ease-in-out">
                Page Not Found
            </div>
            <div className="absolute top-0">
                Page Not Found
            </div>
        </div>
        <div className="mt-3 font-semibold flex items-center justify-center gap-3 text-lg select-none cursor-pointer" onClick={()=>history.back()}>
            <div className="relative">
                <FaCaretLeft className="animate-ping text-yellow-400 blur-sm"/> 
                <FaCaretLeft className="absolute top-0"/> 
            </div>
            <div className="relative">
                <div className="text-yellow-400 blur-sm">go back</div>
                <div className="absolute top-0">go back</div>
            </div>
        </div>
    </div>
}

export default NotFound