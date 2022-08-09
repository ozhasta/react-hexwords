import { useState, useEffect } from "react"
import WordElementList from "./Components/WordElementList"
import SearchBar from "./Components/SearchBar"

import lightOrDark from "./utils/lightOrDark"
import removeAlphaFrom from "./utils/removeAlphaFrom"
import browserTheme from "./utils/browserTheme"

import wordsData from "./wordsWithMeanings.json"

function App() {
  const [selectedColor, setSelectedColor] = useState("FFF")
  const hexColorWithoutAlpha = removeAlphaFrom(selectedColor)
  const whiteOrBlack = lightOrDark(hexColorWithoutAlpha)
  const [wordElements, setWordElements] = useState(wordsData)

  useEffect(() => {
    browserTheme(hexColorWithoutAlpha, whiteOrBlack)
  }, [selectedColor])

  return (
    <div
      className="App"
      style={{
        backgroundColor: `#${hexColorWithoutAlpha}`,
        color: `#${whiteOrBlack}`,
      }}
    >
      <header>
        <h1>TURKISH HEXWORDS</h1>
        <h2>
          Akılda kalıcı ve <span className="cafcaf">#CAFCAF</span>'lı renkler varken, neden rastgele
          renk seçiyorsunuz ki?
        </h2>
      </header>
      <SearchBar />
      <WordElementList wordElements={wordElements} setSelectedColor={setSelectedColor} />
    </div>
  )
}

export default App
