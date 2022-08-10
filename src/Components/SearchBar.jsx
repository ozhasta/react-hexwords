export default function SearchBar({ wordElementsMapped, setWordElements }) {
  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    if (!e.target.value) return setWordElements(wordElementsMapped)
    console.log(e.target.value)

    const results = wordElementsMapped.filter((elem) => {
      return (
        elem.word.includes(e.target.value.toLocaleUpperCase("TR")) ||
        elem.hex.includes(e.target.value.toLocaleUpperCase("TR"))
      )
    })

    setWordElements(results)
  }

  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          placeholder="Kelime ara"
          className="search__input"
          type="search"
          id="search"
          onChange={handleSearchChange}
        />
        <div className="search__search-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 490 490">
            <path
              fill="none"
              stroke="#000"
              strokeWidth="36"
              strokeLinecap="round"
              d="m280,278a153,153 0 1,0-2,2l170,170m-91-117 110,110-26,26-110-110"
            />
          </svg>
        </div>
      </form>
    </header>
  )
}
