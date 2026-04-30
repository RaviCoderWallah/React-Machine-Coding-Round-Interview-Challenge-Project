import ProductCard from "./ProductCard"

const ProductList = ({data}) => {
    return (
        <div className="grid grid-cols-3 gap-4 col-span-7 rounded-sm">
            {
                data?.products.map((product) => {
                    return <ProductCard product={product}/>
                })
            }
        </div>
    )
}

export default ProductList