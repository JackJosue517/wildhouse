import CareScale from './CareScale'
import '../styles/PlantItem.css'

// eslint-disable-next-line react/prop-types
function PlantItem({ id, cover, name, water, light }) {
  // function handleClick(plantName) {
  // 	alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
  // }

  return (
    <li key={id} className="wh-plant-item">
      <img className="wh-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  )
}

export default PlantItem
