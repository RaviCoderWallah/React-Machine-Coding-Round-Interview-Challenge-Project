import { useNavigate, useParams } from "react-router"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import useFetch from "../../../hooks/useFetch";
import ProductDetailsLoading from "./ProductDetailsLoading";
import { useState } from "react";
import { useCart } from "../../../hooks/useCart";

const ProductDetailsPage = () => {
    const { productID } = useParams();
    const navigateProductPage = useNavigate();
    const [productCount, setProductCount] = useState(1);

    //Fetch Singel Product Details Page
    const singleProductDetails = `https://dummyjson.com/products/${productID}`;
    const { data: productDetails, error: productError, loading: productDetailsLoading } = useFetch(singleProductDetails);
    if (productError) console.error(productError);

    //Set Selected Image Inside Main Preview 
    const [selectedImage, setSelectedImage] = useState(null);
    const displayImage = selectedImage || productDetails?.thumbnail;

    //Handle Go to Back Previous Page 
    const handlePreviousPage = () => {
        navigateProductPage("/products")
    }

    //Calculate Original Price Based Upon After Discount Price and Discount Percentage
    const originalPrice = productDetails?.price / (1 - productDetails?.discountPercentage / 100);

    //Hanlde Add To Cart Items 
    const { addToCart } = useCart();
    const handleAddToCart = (productDetails) => {
        console.log(productDetails);
        addToCart({
            productID: productDetails.id,
            title: productDetails.title,
            price: productDetails.price,
            quantity: productCount,
            thumbnail: productDetails.thumbnail
        });
    }

    //Handle Product Count 
    const handleProductPlusCount = () => {
        if (productCount > 0) {
            setProductCount((prev) => prev + 1);
        }
    }

    const handleProductMinusCount = () => {
        if (productCount <= 1) return;
        setProductCount((prev) => prev - 1);
    }

    return (
        <div className="max-w-5xl mx-auto my-8 bg-white p-2">
            <div className="flex items-center gap-2">Home <MdKeyboardDoubleArrowRight /> Products <MdKeyboardDoubleArrowRight /> {productDetails?.title}</div>
            <button onClick={handlePreviousPage} className="text-blue-600 underline cursor-pointer my-4 rounded-sm flex items-center gap-2">
                Back to Products <FaArrowRightLong />
            </button>
            {
                productDetailsLoading && <ProductDetailsLoading />
            }
            <div className="grid grid-cols-2 gap-8 my-10">
                <div className="flex flex-col gap-8 items-center">
                    <div className="border rounded-sm">
                        <img
                            src={displayImage}
                            className="w-60 p-2"
                            alt=""
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            productDetails?.images?.map((imgUrl) => {
                                return <img
                                    onClick={() => setSelectedImage(imgUrl)}
                                    src={imgUrl}
                                    className={`${selectedImage === imgUrl ? "border" : ""} w-26 p-2 rounded-sm bg-gray-100 cursor-pointer`}
                                    alt={productDetails.title}
                                />
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="uppercase text-gray-600 font-semibold text-sm">{productDetails?.brand} company</p>
                    <h1 className="text-3xl text-orange-400 font-semibold">{productDetails?.title}</h1>
                    <p className="text-gray-700">{productDetails?.description}</p>
                    <div className="flex items-center gap-8">
                        <p className="text-2xl font-bold">${productDetails?.price.toFixed(2)}</p>
                        <p className="px-1 bg-black text-white rounded-sm text-sm">{productDetails?.discountPercentage}%</p>
                    </div>
                    <p className="line-through text-gray-600 font-semibold text-lg">${originalPrice.toFixed(2)}</p>
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-8">
                            <button onClick={handleProductPlusCount} className="w-8 cursor-pointer flex items-center justify-center rounded-sm aspect-square bg-gray-100 text-orange-400 outline-1">
                                <FaPlus />
                            </button>
                            <p className="text-2xl font-bold ">{productCount}</p>
                            <button onClick={handleProductMinusCount} className="w-8 cursor-pointer flex items-center justify-center rounded-sm aspect-square bg-gray-100 text-orange-400 outline-1">
                                <FaMinus />
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => handleAddToCart(productDetails)}
                                className="flex items-center gap-4 bg-orange-400 text-gray-900 w-40 text-lg justify-center py-2 rounded-sm font-semibold cursor-pointer"
                            >
                                <FaCartArrowDown />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetailsPage