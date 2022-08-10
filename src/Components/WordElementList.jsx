import WordElement from "../Components/WordElement"

export default function WordElementList({ wordElements, setSelectedColor }) {
  const wordElementList = wordElements.map((element) => {
    return <WordElement key={element.id} element={element} setSelectedColor={setSelectedColor} />
  })

  const pageContent = wordElementList?.length ? (
    wordElementList
  ) : (
    <article>
      <p>Eşleşen kelime yok.</p>
    </article>
  )

  return (
    <>
      <main className="colors-grid">{pageContent}</main>
    </>
  )
}
