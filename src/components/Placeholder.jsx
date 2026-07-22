import './Placeholder.css'

export default function Placeholder({ filename, aspectRatio = '16 / 9', label, className = '' }) {
  return (
    <div
      className={`placeholder-box ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label || `Image placeholder: ${filename}`}
    >
      <span className="placeholder-box__text">
        {label || 'Image coming soon'}
        <br />
        <code>{filename}</code>
      </span>
    </div>
  )
}
