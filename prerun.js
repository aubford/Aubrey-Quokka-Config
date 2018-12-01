repp = (name, value) => {
  window[name] = value
  console.log('**************************************')
  console.log(name.toUpperCase())
  console.log('**************************************')
  console.log(value)
  return value
}