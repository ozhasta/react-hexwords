import WordElement from "../Components/WordElement"

export default function WordElementList({ wordElements, setSelectedColor }) {
  const wordElementsMapped = wordElements.map((element) => {
    return <WordElement key={element.id} element={element} setSelectedColor={setSelectedColor} />
  })

  const content = wordElementsMapped?.length ? (
    wordElementsMapped
  ) : (
    <article>
      <p>Eşleşen kelime yok.</p>
    </article>
  )

  return (
    <>
      <main className="colors-grid">{content}</main>
    </>
  )
}
