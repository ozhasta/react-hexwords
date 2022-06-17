export default function WordElement(props) {
  return (
    <>
      <div
        className="color-container"
        style={{ backgroundColor: props.hexColorWithoutAlpha || props.hexColor }}
      >
        <div className="color-hexword">
          <div className="color-hex" style={{ color: "black" }}>
            {props.hexColor}
          </div>
          <div className="color-word">{props.word}</div>
        </div>
        <div className="clipboard-btn" style={{ color: "black" }}>
          <img className="clipboard-img" src="clipboard.png" alt="copy" title="copy" />
        </div>
      </div>
    </>
  )
}
