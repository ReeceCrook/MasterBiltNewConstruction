import { ADDRESS } from '../data/content'
import './Map.css'

const FULL_ADDRESS = `${ADDRESS}, Colorado Springs, CO 80908`

export default function Map() {
  const query = encodeURIComponent(FULL_ADDRESS)

  return (
    <section className="section map">
      <div className="section__inner">
        <p className="eyebrow">The Location</p>
        <h2>Find the homesite</h2>
        <div className="map__frame">
          <iframe
            title="Map showing the location of the home"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          className="map__link"
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener"
        >
          Get directions to {ADDRESS}
        </a>
      </div>
    </section>
  )
}
