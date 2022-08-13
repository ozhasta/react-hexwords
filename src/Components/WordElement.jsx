import { useState, useEffect } from "react"
import ColorInfoModal from "./ColorInfoModal"
import { ClipboardIconSVG, InfoIconSVG, CheckMarkIconSVG } from "./SvgIcons"

export default function WordElement({ element, setSelectedColor }) {
  const { hex, word, hexColorWithoutAlpha, whiteOrBlack } = element
  const [showModal, setShowModal] = useState(false)
  const [justCopied, setJustCopied] = useState(false)
  const copyToClipboard = async (text) => await navigator.clipboard.writeText(text)

  function handleClickClipboard(text) {
    setJustCopied(true)
    copyToClipboard(text)
  }

  function handleClickShowModal() {
    setShowModal(true)
    const body = document.body
    body.style.overflow = "hidden"
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
        <div className="svg-btn__container">
          <div onClick={handleClickShowModal} className="svg-btn color-box__info-btn" title="bilgi">
            <InfoIconSVG />
          </div>
        </div>
        <div>
          <div className="color-box__hex">#{hex}</div>
          <div className="color-box__word">{word}</div>
        </div>

        <div
          className="svg-btn__container"
          onClick={() => handleClickClipboard(`#${hex}`)}
          title="kopyala"
        >
          <div className="svg-btn color-box__clipboard-btn">
            {justCopied ? <CheckMarkIconSVG /> : <ClipboardIconSVG />}
          </div>
        </div>
        {showModal && <ColorInfoModal element={element} setShowModal={setShowModal} />}
      </div>
    </>
  )
}
