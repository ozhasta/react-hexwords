import { useState } from "react"
import WordElementList from "./WordElementList"
import lightOrDark from "./utils/lightOrDark"

function App() {
  const [selectedColor, setSelectedColor] = useState("FFF")

  // console.log("render")

  return (
    <div
      className="App"
      style={{ backgroundColor: `#${selectedColor}`, color: `#${lightOrDark(selectedColor)}` }}
    >
      <header>
        <h1>TURKISH HEXWORDS</h1>
        <h2>Akılda kalıcı ve #CAFCAF'lı renkler varken, neden rastgele renk seçiyorsunuz ki?</h2>
        <input placeholder="Renk veya kelime ara" type="text" name="search-word" id="search-word" />
      </header>
      <WordElementList setSelectedColor={setSelectedColor} />
    </div>
  )
}

export default App
