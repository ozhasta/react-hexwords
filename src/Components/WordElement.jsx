import { useState, useEffect } from "react"
import ColorInfoModal from "./ColorInfoModal"
import { ClipboardIconSVG, InfoIconSVG, CheckMarkIconSVG } from "./SvgIcons"

export default function WordElement({ element, setSelectedColor }) {
  const { hex, word, hexColorWithoutAlpha, whiteOrBlack } = element
  const [showModal, setShowModal] = useState(false)
  const [justCopied, setJustCopied] = useState(false)
  const copyToClipboard = async (text) => await navigator.clipboard.writeText(text)
  // TODO: Lato font not used yet.
  function handleClick(text) {
    setJustCopied(true)
    copyToClipboard(text)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setJustCopied(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [justCopied])

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
          onClick={() => handleClick(`#${hex}`)}
          title="kopyala"
        >
          <div className="color-box__btn color-box__clipboard-btn">
            {justCopied ? (
              <>
                <CheckMarkIconSVG />
              </>
            ) : (
              <ClipboardIconSVG />
            )}
          </div>
        </div>
        {showModal && <ColorInfoModal element={element} setShowModal={setShowModal} />}
      </div>
    </>
  )
}
