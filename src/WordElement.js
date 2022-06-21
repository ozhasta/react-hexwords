import lightOrDark from "./utils/lightOrDark"

export default function WordElement({ hex, word }) {
  // if color code has 4 chars remove last 1 char if 8 remove last 2
  // so alpha channel removed from hex code
  // and yes 4 chars is valid for hex color code :) FFF2 same as FFFFFF22
  let alphaIndex = hex.length
  if (word.length === 4) alphaIndex = -1
  if (word.length === 8) alphaIndex = -2

  const hexColorWithoutAlpha = hex.slice(0, alphaIndex)
  const whiteOrBlack = lightOrDark(hexColorWithoutAlpha)

  return (
    <div
      // onClick={handleClick}
      className="color-container"
      style={{
        backgroundColor: hexColorWithoutAlpha,
        color: whiteOrBlack
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
