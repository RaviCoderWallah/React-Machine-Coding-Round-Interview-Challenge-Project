import CartDetails from "../features/cart/components/CartDetails";
import EmptyCartUi from "../features/cart/components/EmptyCartUi";
import { useCart } from "../hooks/useCart"

const Cart = () => {
  const { cartItems } = useCart();
  console.log(cartItems);
  return (
    <div className="max-w-5xl mx-auto my-8">
      {
        cartItems.length == 0 && <EmptyCartUi />
      }
      {
        cartItems.length >= 1 && <CartDetails cartDetail={cartItems}/>
      }
    </div>
  )
}

export default Cart