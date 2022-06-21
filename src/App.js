import { useState } from "react"
import WordElements from "./WordElements"
import lightOrDark from "./utils/lightOrDark"

function App() {
  const [selectedColor, setSelectedColor] = useState("FFF")

  // console.log("render")
  return (
    <div className="App" style={{ backgroundColor: "#AC1512", color: lightOrDark(selectedColor) }}>
      <header>
        <h1>TURKISH HEXWORDS</h1>
        <h2>Why bother with a random green when you can choose to be a #BADA55!</h2>
        <input placeholder="search" type="text" name="search-word" id="search-word" />
      </header>
      <WordElements />
    </div>
  )
}

export default App
