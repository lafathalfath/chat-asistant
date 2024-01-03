

const NotFound=()=>{
    return <div className="w-full min-h-[100vh] flex flex-col items-center justify-center gap-3">
        <div className="text-2xl font-semibold">
            404
        </div>
        <div className="text-4xl relative">
            <div className="text-yellow-500 blur-lg animate-pulse ease-in-out">
                Page Not Found
            </div>
            <div className="absolute top-0">
                Page Not Found
            </div>
        </div>
    </div>
}

export default NotFound