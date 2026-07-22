const photoModules = import.meta.glob('../assets/photos/*.{jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const logoModules = import.meta.glob('../assets/logo.{png,svg,jpg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function getPhoto(filename) {
  const entry = Object.entries(photoModules).find(([path]) => path.endsWith('/' + filename))
  return entry ? entry[1] : null
}

export function getLogo() {
  const entry = Object.entries(logoModules)[0]
  return entry ? entry[1] : null
}
