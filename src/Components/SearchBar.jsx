import { SearchIconSVG } from "./SvgIcons"

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
          placeholder="Kelime ya da renk ara..."
          className="search__input"
          type="search"
          id="search"
          onChange={handleSearchChange}
        />
        <div className="search__search-icon-container">
          <SearchIconSVG />
        </div>
      </form>
    </header>
  )
}
