import { useState } from "react"
import wordsJson from "./words.json"
import WordElement from "./WordElement"
import lightOrDark from "./utils/lightOrDark"

function App() {
  const [selectedColor, setSelectedColor] = useState("#FFF")

  const mappedColors = wordsJson.colors.map((word, i) => {
    return <WordElement key={i} word={word[0]} hexColor={word[1]} />
  })
  const mappedColorsWithAlpha = wordsJson.colorsWithAlpha.map((word, i) => {
    // if color code has 4 chars remove last 1 char if 8 remove last 2
    // so alpha channel removed from hex code
    // and yes 4 chars is valid for hex color code :) FFF2 same as FFFFFF22
    const alphaIndex = word[0].length === 4 ? -1 : -2
    return (
      <WordElement
        key={i + "a"}
        word={word[0]}
        hexColor={word[1]}
        hexColorWithoutAlpha={word[1].slice(0, alphaIndex)}
        onClick={handleClick}
      />
    )
  })

  function handleClick() {}
  // console.log("render")
  return (
    <div className="App">
      <div
        className="app-styler"
        style={{ backgroundColor: selectedColor, color: lightOrDark(selectedColor) }}
      >
        <header>
          <h1>TURKISH HEXWORDS</h1>
          <h2>Why bother with a random green when you can choose to be a #BADA55!</h2>
          <input placeholder="search" type="text" name="search-word" id="search-word" />
        </header>
        <div className="colors-grid">
          {mappedColors}
          {mappedColorsWithAlpha}
        </div>
      </div>
    </div>
  )
}

export default App
