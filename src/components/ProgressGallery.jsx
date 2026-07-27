import { getPhoto } from '../data/photos'
import './ProgressGallery.css'

const PROGRESS_FILES = [
  { filename: 'progress-1.jpg', width: 1600, height: 1200 },
  { filename: 'progress-4.jpg', width: 1448, height: 1086 },
]

export default function ProgressGallery() {
  const photos = PROGRESS_FILES.map((file) => ({ ...file, url: getPhoto(file.filename) })).filter(
    (photo) => photo.url,
  )

  return (
    <section className="section progress-gallery">
      <div className="section__inner">
        <p className="eyebrow">Under Construction</p>
        <h2>Follow along as it's built</h2>
        <div className="progress-gallery__grid">
          {photos.map(({ filename, url, width, height }, i) => (
            <a key={filename} href={url} target="_blank" rel="noopener">
              <img
                src={url}
                alt={`Construction progress photo ${i + 1}`}
                className="progress-gallery__image"
                width={width}
                height={height}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
