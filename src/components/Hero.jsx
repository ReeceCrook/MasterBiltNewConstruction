import { getPhoto } from '../data/photos'
import Placeholder from './Placeholder'
import { NEIGHBORHOOD, TAGLINE, PRICE, ADDRESS } from '../data/content'
import './Hero.css'

export default function Hero() {
  const heroUrl = getPhoto('hero-render.jpg')

  return (
    <section id="top" className="hero">
      {heroUrl ? (
        <a href={heroUrl} target="_blank" rel="noopener" className="hero__image-link">
          <img src={heroUrl} alt="Exterior render of the new home in Winsome" className="hero__image" />
        </a>
      ) : (
        <Placeholder
          filename="hero-render.jpg"
          aspectRatio="16 / 10"
          label="Hero exterior render"
          className="hero__image"
        />
      )}
      <div className="hero__scrim" />
      <div className="hero__content">
        <p className="eyebrow eyebrow--on-dark">MasterBilt Homes &middot; {ADDRESS}</p>
        <h1 className="hero__title">{NEIGHBORHOOD}</h1>
        <p className="hero__price">{PRICE}</p>
        <p className="hero__tagline">{TAGLINE}</p>
      </div>
    </section>
  )
}
