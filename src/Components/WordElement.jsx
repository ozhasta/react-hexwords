import { useState } from "react"
import ColorInfoModal from "./ColorInfoModal"
import { ClipboardIconSVG, InfoIconSVG } from "./SvgIcons"

export default function WordElement({ element, setSelectedColor }) {
  const { hex, word, hexColorWithoutAlpha, whiteOrBlack } = element
  const [showModal, setShowModal] = useState(false)
  const copyToClipboard = (text) => navigator.clipboard.writeText(text)

  return (
    <>
      <div
        onClick={() => setSelectedColor(element)}
        className="color-box"
        style={{
          backgroundColor: `#${hexColorWithoutAlpha}`,
          color: `#${whiteOrBlack}`,
        }}
      >
        <div className="color-box__svg-btn-container">
          <div
            onClick={() => setShowModal(true)}
            className="color-box__btn color-box__info-btn"
            title="bilgi"
          >
            <InfoIconSVG />
          </div>
        </div>
        <div>
          <div className="color-box__hex">#{hex}</div>
          <div className="color-box__word">{word}</div>
        </div>

        <div
          className="color-box__svg-btn-container"
          onClick={() => copyToClipboard(`#${hex}`)}
          title="kopyala"
        >
          <div className="color-box__btn color-box__clipboard-btn">
            <ClipboardIconSVG />
          </div>
        </div>
        {showModal && <ColorInfoModal element={element} setShowModal={setShowModal} />}
      </div>
    </>
  )
}
