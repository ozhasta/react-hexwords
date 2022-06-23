import WordElement from "./WordElement"
import wordsJson from "./words.json"

export default function WordElements({ handleClick }) {
  const mappedWordElements = wordsJson.map((el, i) => {
    const hex = el[1]
    const word = el[0]

    let alphaIndex = hex.length
    if (word.length === 4) alphaIndex = -1
    else if (word.length === 8) alphaIndex = -2

    const hexColorWithoutAlpha = hex.slice(0, alphaIndex)

    return (
      <WordElement
        key={i}
        hex={hex}
        word={word}
        handleClick={handleClick}
        hexColorWithoutAlpha={hexColorWithoutAlpha}
      />
    )
  })
  return <div className="colors-grid">{mappedWordElements}</div>
}
