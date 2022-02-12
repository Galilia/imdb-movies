import React from "react";

class Search extends React.Component {
  state = {
    search: '',
    type: 'all'
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  }

  handleFilter = (event) => {
    this.setState(() => ({ type: event.target.dataset.type }), () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
      )
  }

  render() {

    return (
      <div className="row">
          <div className="input-field">
            <input
              id="email_inline"
              placeholder="search"
              type="search"
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
              onKeyDown={this.handleKey}
              className="validate" />
            <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
          </div>
        <div className="radiobutton">
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                checked={this.state.type === 'all'}
                data-type="all"

                onChange={this.handleFilter}/>
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                checked={this.state.type === 'movie'}
                data-type="movie"
                onChange={this.handleFilter}/>
              <span>Movies only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                checked={this.state.type === 'series'}
                data-type="series"
                onChange={this.handleFilter}/>
              <span>Series only</span>
            </label>
          </p>
        </div>
      </div>
    )
  }
}

export {Search};