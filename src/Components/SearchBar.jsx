import { SearchIconSVG } from "./SvgIcons"

export default function SearchBar({ wordElementsMapped, setWordElements }) {
  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    if (!e.target.value) return setWordElements(wordElementsMapped)

    const results = wordElementsMapped.filter((elem) => {
      return (
        elem.word.includes(e.target.value.toLocaleUpperCase("tr")) ||
        elem.hex.includes(e.target.value.toLocaleUpperCase("tr"))
      )
    })

    setWordElements(results)
  }

  return (
    <header>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          placeholder="Kelime ya da renk ara..."
          className="search-bar__search-input"
          type="search"
          onChange={handleSearchChange}
        />
        <div className="search-bar__search-icon-container">
          <SearchIconSVG />
        </div>
      </form>
    </header>
  )
}
