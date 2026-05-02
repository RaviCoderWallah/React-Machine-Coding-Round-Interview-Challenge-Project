const ProductDetailsLoading = () => {
    return (
        <div className="grid grid-cols-2 gap-8 my-10">
            <div className="flex flex-col gap-8 items-center">
                <div className="w-60 aspect-square rounded-sm bg-linear-to-r from-gray-400 to-gray-200"></div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="w-26 aspect-square rounded-sm bg-linear-to-r from-gray-400 to-gray-200"></div>
                    <div className="w-26 aspect-square rounded-sm bg-linear-to-r from-gray-400 to-gray-200"></div>
                    <div className="w-26 aspect-square rounded-sm bg-linear-to-r from-gray-400 to-gray-200"></div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="h-4 w-30 rounded-sm bg-gray-300"></div>
                <div className="h-12 rounded-sm bg-linear-to-r from-gray-200 to-gray-400"></div>
                <div className="flex flex-col gap-2">
                    <div className="h-4 w-full rounded-sm bg-gray-300"></div>
                    <div className="h-4 w-full rounded-sm bg-gray-300"></div>
                    <div className="h-4 w-30 rounded-sm bg-gray-300"></div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="w-18 h-8 rounded-sm bg-linear-to-r from-gray-400 to-gray-200"></div>
                    <div className="w-24 h-6  rounded-sm bg-linear-to-r from-gray-400 to-gray-200"></div>
                </div>
               <div className="w-24 h-6 rounded-sm bg-linear-to-r from-gray-400 to-gray-200"></div>
                <div className="flex gap-6 items-center">
                    <div className="flex items-center gap-6">
                        <div className="w-10 h-8  rounded-sm bg-linear-to-r from-gray-400 to-gray-200"></div>
                        <div className="w-10 h-8  rounded-sm bg-linear-to-r from-gray-400 to-gray-200"></div>
                        <div className="w-10 h-8  rounded-sm bg-linear-to-r from-gray-400 to-gray-200"></div>
                    </div>
                    <div className="w-40 h-11  rounded-sm bg-linear-to-r from-gray-200 to-gray-400"></div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsLoading