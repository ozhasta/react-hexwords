import { useEffect, useState } from "react"
import { CloseIconSVG } from "./SvgIcons"

export default function ColorInfoModal({ element, setShowModal }) {
  const { word, hex, hexColorWithoutAlpha, meanings } = element
  const [colorFormats, setColorFormats] = useState(null)

  // Meanings array not a moving part, it is safe to use index as a key prop
  const meaningsMapped = meanings.map((meaning, i) => <li key={i}>{meaning}</li>)

  // Dynamic styles
  const modalHeaderStyle = { backgroundColor: `#${hexColorWithoutAlpha}` }
  const colorPreviewStyle = {
    backgroundColor: `#${hexColorWithoutAlpha}`,
  }

  function handleClickHideModal(e) {
    if (e.target !== e.currentTarget) return
    setShowModal(false)
    const body = document.body
    body.style.overflow = "auto"
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://www.thecolorapi.com/id?hex=${hexColorWithoutAlpha}`)
      const colorData = await res.json()
      setColorFormats(colorData)
    }

    fetchData()
  }, [hex])

  return (
    <aside className="modal" onClick={(e) => handleClickHideModal(e)}>
      <div className="modal__content">
        <section className="modal__header" style={modalHeaderStyle}>
          <h2 className="modal__tittle">
            {word} &#10140; #{hex}
          </h2>
          <div className="svg-btn__container" onClick={(e) => handleClickHideModal(e)}>
            <div className="svg-btn modal__close-btn">
              <CloseIconSVG />
            </div>
          </div>
        </section>

        <section className="modal__body">
          <h3>Kelimenin anlamları:</h3>
          <ol>{meaningsMapped}</ol>
          <h3>Rengin ön izlemesi:</h3>

          <div className="modal__color-preview-container">
            <div className="modal__color-preview" style={colorPreviewStyle}></div>
          </div>

          <>
            <div className="modal__color-usage">
              <h3>Rengin kullanımı:</h3>
              <p>HEX: #{hex}</p>
              {colorFormats ? (
                <>
                  <p>RGB: {colorFormats.rgb.value}</p>
                  <p>HSL: {colorFormats.hsl.value} </p>
                  <p>CMYK: {colorFormats.cmyk.value}</p>
                </>
              ) : (
                <p>Yükleniyor...</p>
              )}
            </div>
            <small>
              Not: Transparan renkler için; rengin ön izlemesi ve kullanımı bölümlerinde,
              transparanlık göz ardı edilmiştir.
            </small>
          </>
        </section>
      </div>
    </aside>
  )
}
