import WordElement from "./WordElement"
// import wordsJson from "./words.json"
import wordsJson from "./wordsWithMeanings.json"

export default function WordElements({ handleClick }) {
  const mappedWordElements = wordsJson.map((el, i) => {
    const { hex, word, meanings } = el
    // let word = el[0]
    // let hex = el[1]

    return (
      <WordElement
        key={i}
        hex={hex}
        word={word}
        // meanings={meanings}
        handleClick={handleClick}
        // hexColorWithoutAlpha={hexColorWithoutAlpha}
      />
    )
  })

  return <div className="colors-grid">{mappedWordElements}</div>
}
