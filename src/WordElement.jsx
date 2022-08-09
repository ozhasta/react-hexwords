import { useState } from "react"
import ColorInfoModal from "./ColorInfoModal"
import lightOrDark from "../utils/lightOrDark"
import removeAlphaFrom from "../utils/removeAlphaFrom"
import clipboardIcon from "../images/clipboard-icon.svg"

export default function WordElement({ element, setSelectedColor }) {
  const { hex, word } = element
  const [showModal, setShowModal] = useState(false)
  const hexColorWithoutAlpha = removeAlphaFrom(hex)
  const whiteOrBlack = lightOrDark(hexColorWithoutAlpha)
  const copyToClipboard = (text) => navigator.clipboard.writeText(text)

  return (
    <>
      <div
        onClick={() => setSelectedColor(hex)}
        className="color-box"
        style={{
          backgroundColor: `#${hexColorWithoutAlpha}`,
          color: `#${whiteOrBlack}`,
        }}
      >
        <div className="color-box__info-btn-container">
          <button onClick={() => setShowModal(true)} className="color-box__info-btn" title="bilgi">
            🛈
          </button>
        </div>
        <div>
          <div className="color-box__hex">#{hex}</div>
          <div className="color-box__word">{word}</div>
        </div>
        <div
          className="color-box__clipboard-btn"
          onClick={() => copyToClipboard(hex)}
          title="kopyala"
        >
          <img className="color-box__clipboard-img" src={clipboardIcon} alt="kopyala" />
        </div>
        {showModal && (
          <ColorInfoModal
            hexColorWithoutAlpha={hexColorWithoutAlpha}
            element={element}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </>
  )
}
