const LoadingSkeleton = ({initialCount}) => {
    return (
        <div className="grid grid-cols-3 gap-4 col-span-7 rounded-sm">
            {
                Array(initialCount).fill("").map((_, index) => {
                    return <div key={index} className="bg-gray-100 outline-1 min-h-72 flex flex-col gap-2 outline-gray-300 p-4 rounded-sm">
                        <div className="w-24 aspect-square rounded-sm bg-linear-to-r from-gray-400 to-gray-200"></div>
                        <div className="h-4 rounded-sm bg-gray-300"></div>
                        <div className="h-4 w-12 rounded-sm bg-gray-400"></div>
                        <div className="h-4 w-16 rounded-sm bg-gray-300"></div>
                        <div className="flex gap-4">
                            <div className="h-6 w-20 rounded-sm bg-gray-400"></div>
                            <div className="h-6 w-16 rounded-sm bg-gray-300"></div>
                        </div>
                        <div className="h-8 rounded-sm bg-linear-to-r from-gray-200 to-gray-400"></div>
                    </div>
                })
            }
        </div>
    )
}

export default LoadingSkeleton