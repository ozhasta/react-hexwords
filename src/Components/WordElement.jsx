import { useState } from "react"
import ColorInfoModal from "./ColorInfoModal"

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
          <div className="color-box__clipboard-btn-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              alt="kopyala"
              title="kopyala"
            >
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
            </svg>
          </div>
        </div>
        {showModal && <ColorInfoModal element={element} setShowModal={setShowModal} />}
      </div>
    </>
  )
}
