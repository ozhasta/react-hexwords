export default function removeAlphaFrom(hex) {
  let alphaChannelIndex = hex.length

  // Color length 4 ? remove last 1 char, it is alpha channel
  if (hex.length === 4) alphaChannelIndex = -1

  // Color length 8 ? remove last 2 chars, it is alpha channel
  if (hex.length === 8) alphaChannelIndex = -2

  hex = hex.slice(0, alphaChannelIndex)

  return hex
}
