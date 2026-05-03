import { FaMinus, FaPlus } from "react-icons/fa"
import { useCart } from "../../../hooks/useCart"
import { useState } from "react";

const CartCard = ({cart}) => {
   const {removeToCart, updateToCart} = useCart();
   const [cartQuantity, setCartQuantity] = useState(cart.productQuantity);

    const handleRemoveCart = (id) => {
        removeToCart(id);
    }

    const handleCartPlusQuantity = () => {
      const newQuantity = cartQuantity + 1;
      setCartQuantity(newQuantity);
      updateToCart(cart.id, newQuantity);
    }

    const handleCartMinusQuantity = () => {
      if(cartQuantity <= 1) return;
      const newQuantity = cartQuantity - 1;
      setCartQuantity(newQuantity);
      updateToCart(cart.id, newQuantity);
    }

    
    return (
        <div className="flex justify-between gap-2 bg-white p-4 outline-1 rounded-sm">

            <div className="flex  items-center">
                <div>
                    <input type="checkbox" name="" className="scale-120" />
                </div>

                <div className="flex justify-between gap-2">
                    <div>
                        <img src={cart.image} className="w-20" alt="" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold">{cart.title}</p>
                        <div className="flex items-center gap-4">
                            <button onClick={handleCartMinusQuantity} className="bg-gray-100 outline-1 w-6 aspect-square flex items-center justify-center rounded-sm cursor-pointer"><FaMinus /></button>
                            <p className="font-bold text-xl">{cartQuantity}</p>
                            <button onClick={handleCartPlusQuantity} className="bg-gray-100 outline-1 w-6 aspect-square flex items-center justify-center rounded-sm cursor-pointer"><FaPlus /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p>{cart.price}</p>
                <button className="text-blue-600 underline cursor-pointer" onClick={() => handleRemoveCart(cart.id)}>Remove</button>
            </div>

        </div>
    )
}

export default CartCard