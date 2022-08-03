import lightOrDark from "./utils/lightOrDark"
import clipboardWhite from "./images/clipboard-white.png"
import clipboardBlack from "./images/clipboard-black.png"

export default function WordElement({ hex, word, setSelectedColor, handleModal }) {
  function handleColorChange(e) {
    // console.log(e.target)
    if (e.target.dataset.color) {
      setSelectedColor(e.target.dataset.color)
    }
  }

  function removeAlphaFrom(hex) {
    // Color length 3 or 6? This color has no alpha, return it as is
    if (hex.length === 3 || hex.length === 6) return hex

    let alphaChannelIndex = hex.length

    // Color length 4 ? remove last 1 char, it is alpha channel
    if (hex.length === 4) alphaChannelIndex = -1

    // Color length 8 ? remove last 2 chars, it is alpha channel
    if (hex.length === 8) alphaChannelIndex = -2

    hex = hex.slice(0, alphaChannelIndex)

    return hex
  }

  const hexColorWithoutAlpha = removeAlphaFrom(hex)
  const whiteOrBlack = lightOrDark(hexColorWithoutAlpha)
  const clipboardImageSrc = whiteOrBlack === "FFF" ? clipboardWhite : clipboardBlack

  return (
    <div
      onClick={handleColorChange}
      className="color-container"
      data-color={hexColorWithoutAlpha}
      style={{
        backgroundColor: `#${hexColorWithoutAlpha}`,
        color: `#${whiteOrBlack}`,
      }}
    >
      <div className="color-info">
        <button onClick={handleModal} data-hex={hex} className="color-info-btn" title="info">
          🛈
        </button>
      </div>

      <div className="color-hexword">
        <div className="color-hex">#{hex}</div>
        <div className="color-word">{word}</div>
      </div>
      <div className="clipboard-btn">
        <img className="clipboard-img" src={`${clipboardImageSrc}`} alt="copy" title="copy" />
      </div>
    </div>
  )
}
