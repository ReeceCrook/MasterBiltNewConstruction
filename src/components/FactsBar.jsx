import { FACTS } from '../data/facts'
import { AcreageIcon, ViewsIcon, BedBathIcon, BasementIcon, GarageIcon } from './icons/FactIcons'
import './FactsBar.css'

const ICONS = {
  acreage: AcreageIcon,
  views: ViewsIcon,
  beds: BedBathIcon,
  basement: BasementIcon,
  garage: GarageIcon,
}

export default function FactsBar() {
  return (
    <section className="facts-bar">
      <ul className="facts-bar__list">
        {FACTS.map((fact) => {
          const Icon = ICONS[fact.key]
          return (
            <li key={fact.key} className="facts-bar__item">
              <Icon className="facts-bar__icon" />
              <span>{fact.label}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
