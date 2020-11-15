import React from "react";

class Details extends React.Component {
  render() {
    const movieId = this.props.match.params.id;
    console.log(movieId);

    const movie = this.props.movies.find((movie) =>
      movie.posterPath.includes(movieId)
    );
    console.log(movie);
    return (
      <>
        <section className="section hero movieDetails">
          <div className="container">
            <div className="movieVideo">
              <iframe
                src={`https://www.youtube.com/embed/${movie.movieVideos.key}`}
                frameborder="0"
                title="video"
              />
              <div className="movieDetails">
                <h2 className="featured-title">{movie.origianlTitle}</h2>
                <p className="featured-overview">{movie.origianlOverview}</p>
                <p className="movie-general-data">{movie.relaseDate}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section movie-meta-data">
          <div className="container">
            <h3 className="section-title">التفاصيل</h3>
            <ul>
              <li>
                <span className="title">النوع</span>
                <span className="values">{movie.genres.join(" | ")}</span>
              </li>
            </ul>
          </div>
          <div className="plot">
            <h3 className="section-title">القصة</h3>
            <p>{movie.origianlOverview}</p>
          </div>
        </section>
      </>
    );
  }
}

export default Details;
