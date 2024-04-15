import { plantList } from './../data/plantList.js'
import './../styles/ShoppingList.css'
import PlantItem from './PlantItem.jsx'

// eslint-disable-next-line react/prop-types
function ShoppingList({cart, updateCart}) {
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), [])

    return (
        <div>
            <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
            <ul className='wh-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<div key={id}>
						<PlantItem cover={cover} name={name} water={water} light={light} />
						<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
					</div>
				))}
			</ul>
        </div>
    )
}

export default ShoppingList