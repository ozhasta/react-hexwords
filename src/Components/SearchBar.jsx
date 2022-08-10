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
          placeholder="Kelime ara"
          className="search__input"
          type="search"
          id="search"
          onChange={handleSearchChange}
        />
        <div className="search__button">
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
