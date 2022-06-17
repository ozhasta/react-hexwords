import wordsJson from "./words.json"
import WordElement from "./WordElement"

const mappedColors = wordsJson.colors.map((word, i) => {
  return <WordElement key={i} word={word[0]} hexColor={word[1]} />
})
const mappedColorsWithAlpha = wordsJson.colorsWithAlpha.map((word, i) => {
  const alphaIndex = word[0].length === 4 ? -1 : -2
  return (
    <WordElement
      key={i + "a"}
      word={word[0]}
      hexColor={word[1]}
      hexColorWithoutAlpha={word[1].slice(0, alphaIndex)}
      hasAlpha={true}
    />
  )
})

function App() {
  return (
    <div className="App">
      <div className="colors-grid">
        {mappedColors}
        {mappedColorsWithAlpha}
      </div>
    </div>
  )
}

export default App
