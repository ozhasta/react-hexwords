// https://gist.github.com/stla/00d8d78c7daa8b774c484e5b6f5758ce
// This code taken from above url and modified for my usecase

function lightOrDark(color) {
  const color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"))

  const r = color >> 16
  const g = (color >> 8) & 255
  const b = color & 255

  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

  if (hsp > 127.5) {
    return "light"
  } else {
    return "dark"
  }
}

console.log(lightOrDark("BABACA"))
