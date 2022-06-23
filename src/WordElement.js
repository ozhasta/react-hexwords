import lightOrDark from "./utils/lightOrDark"

export default function WordElement({ hex, word, handleClick, hexColorWithoutAlpha }) {
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
