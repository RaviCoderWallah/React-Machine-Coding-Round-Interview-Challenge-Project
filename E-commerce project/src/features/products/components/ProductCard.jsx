const ProductCard = ({product}) => {
    return (
        <div key={product.id} className="bg-gray-100 outline-1 flex flex-col gap-2 outline-gray-300 p-4 rounded-sm">
            <img src={product.thumbnail} className="w-24" alt="" />
            <h1 className="font-medium text-gray-800">{product.title}</h1>
            <p className="text-sm">Price: <span className="font-semibold text-blue-600">${product.price}</span></p>
            <div className="flex gap-4">
                {
                    product.tags?.map((tag) => {
                        return <span key={tag} className="capitalize px-2 py-1 rounded-sm text-sm bg-orange-50 outline-1 outline-orange-200"> {tag}</span>
                    })
                }
            </div>
            <button className="bg-blue-600 text-white py-1 rounded-sm hover:bg-blue-700 cursor-pointer">View Details</button>
        </div>
    )
}

export default ProductCard