import { getPhoto } from '../data/photos'
import './ProgressGallery.css'

const PROGRESS_FILES = ['progress-1.jpg', 'progress-2.jpg', 'progress-3.jpg', 'progress-4.jpg']

export default function ProgressGallery() {
  const photos = PROGRESS_FILES.map((filename) => ({ filename, url: getPhoto(filename) })).filter(
    (photo) => photo.url,
  )

  return (
    <section className="section progress-gallery">
      <div className="section__inner">
        <p className="eyebrow">Under Construction</p>
        <h2>Follow along as it's built</h2>
        <div className="progress-gallery__grid">
          {photos.map(({ filename, url }, i) => (
            <a key={filename} href={url} target="_blank" rel="noopener">
              <img src={url} alt={`Construction progress photo ${i + 1}`} className="progress-gallery__image" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
