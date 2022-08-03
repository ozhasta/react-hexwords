import { useState } from "react"
import wordsData from "./wordsWithMeanings.json"
import WordElement from "./WordElement"
import ColorInfoModal from "./Components/ColorInfoModal"

export default function WordElements({ setSelectedColor }) {
  const [colorInfo, setColorInfo] = useState({})
  const [showModal, setShowModal] = useState(false)

  function handleModal(id) {
    const [selectedWordElement] = wordsData.filter((word) => word.id === id)

    setColorInfo(selectedWordElement)
    setShowModal(true)

    // disables body scrollbars while modal is shown
    document.body.style.overflow = "hidden"
  }

  const mappedWordElements = wordsData.map((element) => {
    const { id, hex, word } = element
    return (
      <WordElement
        key={id}
        hex={hex}
        word={word}
        // meanings={meanings}
        setSelectedColor={setSelectedColor}
        handleModal={() => handleModal(id)}
        setShowModal={(e) => setShowModal(e, id)}
      />
    )
  })

  return (
    <>
      {showModal && <ColorInfoModal info={colorInfo} setShowModal={setShowModal} />}
      <div className="colors-grid">{mappedWordElements}</div>
    </>
  )
}
