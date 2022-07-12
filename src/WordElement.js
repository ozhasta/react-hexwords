import lightOrDark from "./utils/lightOrDark"

export default function WordElement({ hex, word, handleClick }) {
  function removeAlphaFrom(hex) {
    // Length - 1 because of hash sign (#)
    const hexLength = hex.length - 1

    // Color length 3 or 6? This color has no alpha, return
    if (hexLength === 3 || hexLength === 6) return hex

    let alphaChannelIndex = hexLength

    // Color length 4 ? remove last 1 char, it is alpha channel
    if (hexLength === 4) alphaChannelIndex = -1

    // Color length 8 ? remove last 2 chars, it is alpha channel
    if (hexLength === 8) alphaChannelIndex = -2

    hex = hex.slice(0, alphaChannelIndex)

    return hex
  }

  const hexColorWithoutAlpha = removeAlphaFrom(hex)
  const whiteOrBlack = lightOrDark(hexColorWithoutAlpha)

  return (
    <div
      onClick={handleClick}
      className="color-container"
      data-color={hexColorWithoutAlpha}
      style={{
        backgroundColor: hexColorWithoutAlpha,
        color: `#${whiteOrBlack}`
      }}
    >
      <div className="color-hexword">
        <div className="color-hex">{hex}</div>
        <div className="color-word">{word}</div>
      </div>
      <div className="clipboard-btn">
        <img
          className="clipboard-img"
          src={`clipboard-${whiteOrBlack}.png`}
          alt="copy"
          title="copy"
        />
      </div>
    </div>
  )
}
