import lightOrDark from "./utils/lightOrDark"

export default function WordElement(props) {
  const whiteOrBlack = lightOrDark(props.hexColorWithoutAlpha || props.hexColor)
  return (
    <>
      <div
        className="color-container"
        style={{
          backgroundColor: props.hexColorWithoutAlpha || props.hexColor,
          color: whiteOrBlack
        }}
      >
        <div className="color-hexword">
          <div className="color-hex">{props.hexColor}</div>
          <div className="color-word">{props.word}</div>
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
    </>
  )
}
