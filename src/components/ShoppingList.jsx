/* eslint-disable react/prop-types */
import { plantList } from './../data/plantList.js'
import './../styles/ShoppingList.css'
import PlantItem from './PlantItem.jsx'
import Categories from './Categories.jsx'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('')

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    [],
  )

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name,
      )
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  return (
    <div>
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ul className='wh-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
    </div>
  )
}

export default ShoppingList
