import "./ColorInfoModal.css"

export default function ColorInfoModal({ info, setShowModal }) {
  const { word, hex, meanings } = info
  function closeModal(e) {
    if (e.target !== e.currentTarget) return
    setShowModal(false)

    // enables body scrollbars while modal is hidden
    document.body.style.overflow = "unset"
  }

  return (
    <div className="modal" onClick={(e) => closeModal(e)}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-tittle">{word}</h2>
          <span className="close" onClick={(e) => closeModal(e)}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <p>Hex: {hex}</p>
          <h3>Anlamlar:</h3>
          <ol>
            {meanings.map((meaning) => (
              <li>{meaning}</li>
            ))}
          </ol>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus assumenda fugit
          eveniet, molestias facilis vel repellendus? Magni quisquam laudantium corporis doloribus
          non nesciunt, nisi dolores eveniet, tempora aperiam veniam voluptas nemo necessitatibus
          fuga laborum. Enim ipsam aliquid consequatur? Iste recusandae architecto reprehenderit
          aperiam reiciendis consequuntur deleniti beatae eveniet. Eos unde quae laboriosam veniam
          et! Ducimus quod eaque odit minima alias inventore cumque, corporis voluptatibus suscipit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quis, suscipit commodi saepe
          quisquam corporis voluptas laudantium maiores quo ipsam, praesentium quae obcaecati et hic
          eligendi fugiat doloribus, impedit labore odio perferendis similique.lorem120 Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dicta nesciunt inventore accusantium ratione
          quo earum vel eveniet consectetur minus aliquid vitae ducimus quibusdam magni aut enim
          harum numquam, repudiandae, molestias nisi maxime? Error mollitia quia nemo veritatis cum
          magnam voluptate unde officia minus! Dolorem magni sed perferendis nihil hic quos, vitae
          corrupti recusandae laborum quidem nostrum eum neque eos dignissimos porro soluta, quod
          veniam ullam, dicta deleniti unde. Distinctio, necessitatibus dolorum veritatis porro
          quibusdam maxime vero, accusamus neque minima sed voluptatem nostrum explicabo velit
          laboriosam eveniet ea eligendi tempora blanditiis asperiores aliquam animi, sunt ducimus
          eos. Obcaecati, facilis sunt reiciendis quidem officiis optio accusantium! Cum nam
          voluptate ab dolorum quidem fuga, rem eum optio neque iure at, officiis mollitia modi?
        </div>
        {/* <div className="modal-footer">
          <button onClick={() => closeModal(e)}>Kapat</button>
        </div> */}
      </div>
    </div>
  )
}
