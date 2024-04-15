import { useState } from 'react'
import '../styles/Cart.css'

// eslint-disable-next-line react/prop-types
function Cart({cart, updateCart}) {
	const monsteraPrice = 8
	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div className='wh-cart'>
			<button
				className='wh-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>Monstera : {monsteraPrice}€</div>
			<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
			<h3>Total : {monsteraPrice * cart}€</h3>
			<button onClick={() => updateCart(0)}>Vider le panier</button>
		</div>
	) : (
		<div className='wh-cart-closed'>
			<button
				className='wh-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart