import { useState, useEffect, useMemo } from "react"
// Components
import WordElementList from "./Components/WordElementList"
import SearchBar from "./Components/SearchBar"
// Utils
import lightOrDark from "./utils/lightOrDark"
import removeAlphaFrom from "./utils/removeAlphaFrom"
import browserTheme from "./utils/browserTheme"
// Data
import data from "./wordsWithMeanings.json"

function App() {
  // useMemo hook isn't essential here, because useMemo reducing computational power (CPU) usage,
  // but consuming memory (RAM). This function mimicking API response and mapping 500+ object
  // kinda heavy for every render, "candidate for demonstrating" useMemo hook usage.
  const wordElementsMapped = useMemo(() => {
    return data.map(({ id, word, hex, meanings }) => {
      const hexColorWithoutAlpha = removeAlphaFrom(hex)
      const whiteOrBlack = lightOrDark(hexColorWithoutAlpha)
      return {
        id,
        word,
        hex,
        hexColorWithoutAlpha,
        whiteOrBlack,
        meanings,
      }
    })
  }, [data])

  const [selectedColor, setSelectedColor] = useState({
    hexColorWithoutAlpha: "CAFCAF",
    whiteOrBlack: "000",
  })
  const [wordElements, setWordElements] = useState(wordElementsMapped)

  useEffect(() => {
    if (selectedColor.hexColorWithoutAlpha) {
      browserTheme(selectedColor.hexColorWithoutAlpha, selectedColor.whiteOrBlack)
    }
  }, [selectedColor])

  return (
    <div className="app">
      <header className="app-header">
        <h1>TURKISH HEXWORDS</h1>
        <h2>
          Akılda kalıcı ve{" "}
          <span className="app-header--tinted-word" title="Gösterişli, şatafatlı.">
            #CAFCAF
          </span>
          'lı renkler varken, neden rastgele renk seçiyorsunuz ki?
        </h2>
      </header>
      <div className="app__searchbar-container">
        <SearchBar wordElementsMapped={wordElementsMapped} setWordElements={setWordElements} />
        <div className="app__result-count">Bulunan renk: {wordElements?.length}</div>
      </div>
      <WordElementList wordElements={wordElements} setSelectedColor={setSelectedColor} />
    </div>
  )
}

export default App
