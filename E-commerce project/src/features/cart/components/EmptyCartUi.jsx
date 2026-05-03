import { useNavigate } from "react-router"
import EmptyCartImg from "../../../assets/images/empty-cart.webp"

const EmptyCartUi = () => {
    const navigate = useNavigate();

    const handleBackToShopping = () => {
        navigate("/products");
    }

    return (
        <div className="bg-white outline-1 p-4 flex flex-col items-center justify-center">
            <div className="max-w-120 flex flex-col gap-4">
                <img src={EmptyCartImg} alt="Empty Cart" className="w-40 mx-auto" />
                <h1 className="text-center text-3xl font-semibold">Oops ! Your Cart Is Empty Now ! </h1>
                <p className="text-center text-gray-600 mt-4">
                    Your cart is empty, but adventure isn't!
                    Start exploring our products and add your favorites today.
                </p>
                <div className="mx-auto">
                    <button onClick={handleBackToShopping} className="bg-blue-600 text-white rounded-sm px-2 py-1 cursor-pointer hover:bg-blue-700">Back To Shopping</button>
                </div>
            </div>
        </div>
    )
}

export default EmptyCartUi