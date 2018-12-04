export const formatHtml = htmlStr => {
  const spacerChar = '_ '
  let spacerCount = 0
  const spacers = (mod = 0) => spacerChar.repeat(spacerCount + mod - 1)

  const split = htmlStr.split('>').filter(e => e)
  return split.map(tag => {
    if (tag.includes('</')) {
      let ret
      if (tag[0] !== '<') {
        ret = spacers() + spacerChar + tag.split('<').join('\n' + spacers() + '<')
      } else {
        ret = spacers() + tag
      }
      if (spacerCount !== 0) {
        spacerCount--
      }
      return ret
    } else {
      if (tag[tag.length - 1] !== '/') {
        spacerCount++
      }
      return spacers() + tag
    }
  })
           .join('>\n') + '>'
}
