import { useEffect, useState } from "react"
import "./ColorInfoModal.css"

export default function ColorInfoModal({ element, hexColorWithoutAlpha, setShowModal }) {
  const { word, hex, meanings } = element
  const [colorFormats, setColorFormats] = useState(null)

  // Meanings array not a moving part, it is safe to use index as a key prop
  const meaningsMapped = meanings.map((meaning, i) => <li key={i}>{meaning}</li>)

  // Dynamic styles
  const modalHeaderStyle = { backgroundColor: `#${hexColorWithoutAlpha}` }
  const colorPreviewStyle = {
    backgroundColor: `#${hexColorWithoutAlpha}`,
  }

  function closeModal(e) {
    if (e.target !== e.currentTarget) return
    setShowModal(false)
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
    <aside className="modal" onClick={(e) => closeModal(e)}>
      <div className="modal__content">
        <section className="modal__header" style={modalHeaderStyle}>
          <h2 className="modal__tittle">
            {word} &#10140; #{hex}
          </h2>
          <span className="modal__close-btn" onClick={(e) => closeModal(e)}>
            &times;
          </span>
        </section>

        <section className="modal__body">
          <h3>Kelimenin anlamları:</h3>
          <ol>{meaningsMapped}</ol>
          <h3>Rengin ön izlemesi:</h3>

          <div className="modal__color-preview-container">
            <div className="modal__color-preview" style={colorPreviewStyle}></div>
          </div>

          {colorFormats && (
            <>
              <div className="modal__color-usage">
                <h3>Rengin kullanımı:</h3>
                <p>HEX: #{hex}</p>
                <p>RGB: {colorFormats.rgb.value}</p>
                <p>HSL: {colorFormats.hsl.value} </p>
                <p>CMYK: {colorFormats.cmyk.value}</p>
              </div>
              <small>
                Not: Rengin ön izlemesinde ve kullanımında transparanlık göz ardı edilmiştir.
              </small>
            </>
          )}
        </section>
      </div>
    </aside>
  )
}
