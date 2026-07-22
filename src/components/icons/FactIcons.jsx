const defaultProps = {
  width: 32,
  height: 32,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function AcreageIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M3 8 L12 3 L21 8 L12 13 Z" />
      <path d="M3 8 L3 16 L12 21 L21 16 L21 8" />
      <path d="M12 13 L12 21" />
    </svg>
  )
}

export function ViewsIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <circle cx="17.5" cy="6.5" r="2" />
      <path d="M2 19 L9 10 L13 15 L16 12 L22 19 Z" />
    </svg>
  )
}

export function BedBathIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M2 19 V11 a2 2 0 0 1 2-2 h16 a2 2 0 0 1 2 2 v8" />
      <path d="M2 19 V21" />
      <path d="M22 19 V21" />
      <path d="M2 15 h20" />
      <path d="M5 9 V6 a1 1 0 0 1 1-1 h2 a1 1 0 0 1 1 1 v3" />
    </svg>
  )
}

export function BasementIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M4 3 v18" />
      <path d="M4 21 h6 v-3 h3 v-3 h3 v-3 h3 v-3 h3" />
    </svg>
  )
}

export function GarageIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M3 21 V9 L12 3 L21 9 V21 Z" />
      <path d="M3 12 h18" />
      <path d="M6 12 v9" />
      <path d="M10.5 12 v9" />
      <path d="M13.5 12 v9" />
      <path d="M18 12 v9" />
    </svg>
  )
}
