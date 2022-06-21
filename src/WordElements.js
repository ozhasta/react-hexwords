import WordElement from "./WordElement"
import wordsJson from "./words.json"

export default function WordElements() {
  // function handleClick(e) {
  //   // console.log(e.target)
  //   console.log("ha")
  //   // setSelectedColor()
  // }
  const mappedWordElements = wordsJson.map((el, i) => {
    const hex = el[1]
    const word = el[0]

    return <WordElement key={i} hex={hex} word={word} />
  })
  return <div className="colors-grid">{mappedWordElements}</div>
}
