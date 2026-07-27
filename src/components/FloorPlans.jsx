import { getPhoto } from '../data/photos'
import Placeholder from './Placeholder'
import './FloorPlans.css'

const FLOORPLANS = [
  { filename: 'floorplan-1.png', label: 'Main Level' },
  { filename: 'floorplan-2.png', label: 'Basement Level' },
  { filename: 'floorplan-3.png', label: 'Elevations' },
]

export default function FloorPlans() {
  return (
    <section className="section section--alt floor-plans">
      <div className="section__inner">
        <p className="eyebrow">Floor Plans</p>
        <div className="floor-plans__grid">
          {FLOORPLANS.map(({ filename, label }) => {
            const url = getPhoto(filename)
            return url ? (
              <a key={filename} href={url} target="_blank" rel="noopener" className="floor-plans__item">
                <img
                  src={url}
                  alt={label}
                  className="floor-plans__image"
                  width={3300}
                  height={5100}
                  loading="lazy"
                />
                <span className="floor-plans__label">{label}</span>
              </a>
            ) : (
              <div key={filename} className="floor-plans__item">
                <Placeholder filename={filename} aspectRatio="0.65 / 1" label={label} className="floor-plans__image" />
                <span className="floor-plans__label">{label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
