import { useState, useEffect } from 'react'
import '../styles/Cart.css'

// eslint-disable-next-line react/prop-types
function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true)
  // eslint-disable-next-line react/prop-types
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0,
  )

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`
  }, [total])

  return isOpen ? (
    <div className="wh-cart">
      <button
        className="wh-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <div>
        <h2>Panier</h2>
        <ul>
          {/* eslint-disable-next-line react/prop-types */}
          {cart.map(({ name, price, amount }, index) => (
            <div key={`${name}-${index}`}>
              {name} {price}€ x {amount}
            </div>
          ))}
        </ul>
        <h3>Total :{total}€</h3>
        <button onClick={() => updateCart([])}>Vider le panier</button>
      </div>
    </div>
  ) : (
    <div className="wh-cart-closed">
      <button className="wh-cart-toggle-button" onClick={() => setIsOpen(true)}>
        Ouvrir le Panier
      </button>
    </div>
  )
}

export default Cart
