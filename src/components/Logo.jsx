import { getLogo } from '../data/photos'
import './Logo.css'

export default function Logo({ className = '' }) {
  const logoUrl = getLogo()

  if (logoUrl) {
    return <img src={logoUrl} alt="MasterBilt Homes" className={`logo logo--image ${className}`} />
  }

  return <span className={`logo logo--text ${className}`}>MasterBilt Homes</span>
}
