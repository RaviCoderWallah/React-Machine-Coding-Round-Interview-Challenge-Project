import { BiArrowBack } from "react-icons/bi"
import CartCard from "./CartCard"
import { useNavigate } from "react-router"

const CartDetails = ({ cartDetail }) => {
  const navigate = useNavigate();

  const handleBackToShopping = () => {
    navigate("/products");
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <button onClick={handleBackToShopping} className="text-lg text-blue-600 underline flex items-center gap-2"><BiArrowBack /> Back To Shopping </button>
        <div className="flex items-center gap-2 border-b my-8 py-4">
          <input type="checkbox" name="itemsSelected" className="scale-120" />
          <label htmlFor="itemsSelected" className="text-xl font-medium text-gray-800">0 Items Selected</label>
        </div>
        <div className="flex flex-col gap-4">
          {
            cartDetail?.map((cart) => {
              return <CartCard key={cart.id} cart={cart} />
            })
          }
        </div>
      </div>
      <div className="bg-white p-4 rounded-sm sticky top-24 h-50">
        <h1 className="text-2xl font-semibold text-blue-600 border-b border-gray-700 pb-4 mb-4">Cart Payment Details</h1>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold text-gray-800">Total Quanity</p>
            <p className="text-3xl font-semibold text-gray-800">5 pieces</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold text-gray-800">Total Price</p>
            <p className="text-3xl font-semibold text-gray-800">$899.45</p>
          </div>
          <button className="bg-blue-600 text-white py-2 rounded-sm cursor-pointer hover:bg-blue-700">Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default CartDetails