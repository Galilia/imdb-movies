import React, {useState} from "react";

const Search = (props) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const { searchMovies } = props;

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  }

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  }

  return (
    <div className="row">
        <div className="input-field">
          <input
            id="email_inline"
            placeholder="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
            className="validate" />
          <button className="btn search-btn" onClick={() => searchMovies(search)}>Search</button>
        </div>
      <div className="radiobutton">
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              checked={type === 'all'}
              data-type="all"

              onChange={handleFilter}/>
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              checked={type === 'movie'}
              data-type="movie"
              onChange={handleFilter}/>
            <span>Movies only</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              checked={type === 'series'}
              data-type="series"
              onChange={handleFilter}/>
            <span>Series only</span>
          </label>
        </p>
      </div>
    </div>
  )
}

export default Search;