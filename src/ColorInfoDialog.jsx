export default function ColorInfoDialog({ hex }) {
  // Return null if false
  // if (!showModal) {
  //   return null
  // }

  return (
    <dialog open>
      <div>Are you sure you want to delete this item? {hex}</div>
      <div>
        <button className="close">Yes</button>
      </div>
    </dialog>
  )
}
