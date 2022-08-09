import searchIcon from "../images/search-icon.svg"

export default function SearchBar({ posts, setSearchResults }) {
  const handleSubmit = (e) => e.preventDefault()

  function handleSearchChange(e) {
    if (!e.target.value) return setSearchResults(posts)

    const resultsArray = posts.filter(
      (post) => post.title.includes(e.target.value) || post.body.includes(e.target.value)
    )

    setSearchResults(resultsArray)
  }

  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          placeholder="Renk veya kelime ara"
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
        <button className="search__button">
          <img src={searchIcon} alt="ara" />
        </button>
      </form>
    </header>
  )
}
