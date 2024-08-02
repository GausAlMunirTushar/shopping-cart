import { useState, useEffect } from "react"

const CartList = ({ cart }) => {
  const [productCart, setProductCart] = useState([])

  useEffect(() => {
    setProductCart(cart)
  }, [cart])

  const incrementQuantity = (index) => {
    const newCart = [...productCart]
    newCart[index].quantity += 1
    setProductCart(newCart)
  }

  const decrementQuantity = (index) => {
    const newCart = [...productCart]
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1
    }
    setProductCart(newCart)
  }

  const totalPrice = productCart
    .map((cartItem) => cartItem.price * cartItem.quantity)
    .reduce((total, value) => total + value, 0)

  return (
    <div className="flex flex-col">
      {productCart.map((cartItem, index) => (
        <div className="flex" key={index}>
          <div className="p-2">
            <img width="300px" src={cartItem.url} alt={cartItem.name} />
            <h3>{cartItem.name}</h3>
            <div className="flex gap-5">
              <button
                className="bg-neutral-900 text-white px-4 rounded-full"
                onClick={() => decrementQuantity(index)}
              >
                -
              </button>
              <p>{cartItem.quantity}</p>
              <button
                className="bg-neutral-900 text-white px-4 rounded-full"
                onClick={() => incrementQuantity(index)}
              >
                +
              </button>
            </div>
            <p>Tk. {cartItem.price * cartItem.quantity}</p>
          </div>
        </div>
      ))}
      <p>Total Price: Tk. {totalPrice}</p>
    </div>
  )
}

export default CartList
