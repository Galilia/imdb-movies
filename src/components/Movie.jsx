function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: imdbId,
    Type: type,
    Poster: poster
  } = props;

  return <div id={imdbId} className="card movie">
    <div className="card-image">
      {
        poster === 'N/A' ? <img className='activator' src={`https://via.placeholder.com/300x150?text=${title}`}/>
          : <img className='activator' src={poster}/>
      }
      <span className="card-title">{title}</span>
    </div>
    <div className="card-content">
      <p>{year} <span className="right">{type}</span></p>
    </div>
  </div>

}

export {Movie};