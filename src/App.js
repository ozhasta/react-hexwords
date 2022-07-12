import { useState } from "react"
import WordElements from "./WordElements"
import lightOrDark from "./utils/lightOrDark"

function App() {
  const [selectedColor, setSelectedColor] = useState("#ABCDEF")

  function handleClick(e) {
    setSelectedColor(e.target.dataset.color)
  }
  // console.log("render")
  // FIXME: remove # from selected color
  return (
    <div
      className="App"
      style={{ backgroundColor: selectedColor, color: `${lightOrDark(selectedColor)}` }}
    >
      <header>
        <h1>TURKISH HEXWORDS</h1>
        <h2>Akılda kalıcı ve #CAFCAF'lı renkler varken, neden rastgele renk seçiyorsunuz ki?</h2>
        <input placeholder="Renk veya kelime ara" type="text" name="search-word" id="search-word" />
      </header>
      <WordElements handleClick={(e) => handleClick(e)} />
    </div>
  )
}

export default App
