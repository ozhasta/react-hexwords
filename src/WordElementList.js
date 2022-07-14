import { useState } from "react"
import wordsJson from "./wordsWithMeanings.json"
import WordElement from "./WordElement"
import ColorInfoDialog from "./ColorInfoDialog"

export default function WordElements({ handleColorChange }) {
  const [dialog, setDialog] = useState({
    selected: "ABE",
    show: true,
  })

  function handleDialog(e) {
    setDialog((prevDialog) => ({
      ...prevDialog,
      selected: e.target.dataset.hex,
      show: true,
    }))
  }

  const mappedWordElements = wordsJson.map((element) => {
    const { id, hex, word, meanings } = element
    return (
      <WordElement
        key={id}
        hex={hex}
        word={word}
        meanings={meanings}
        handleColorChange={handleColorChange}
        handleDialog={(e) => handleDialog(e)}
      />
    )
  })

  return <div className="colors-grid">{mappedWordElements}</div>
}
