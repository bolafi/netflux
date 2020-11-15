import React from "react";
import Filter from "../components/Filter";
import { suggested, mostViewed, recentRelease } from "../utils/helper";
import MovieGrid from "../components/MovieGrid";

class CategoryPage extends React.Component {
  state = {
    filter: null,
  };

  onFilter = (value) => {
    this.setState({ filter: value });
  };

  renderMoviesGrid = () => {
    return (
      <>
        <MovieGrid
          title="إقتراحتنا لك"
          gridType="is-suggested"
          movies={suggested(this.props.movies)}
          limit={4}
        />
        <MovieGrid
          title="الأكثر مشاهدة"
          gridType="is-suggested"
          movies={mostViewed(this.props.movies)}
          limit={4}
        />
        <MovieGrid
          title={`أحدث ${this.props.typeText}`}
          gridType="is-movies"
          movies={recentRelease(this.props.movies, "Film")}
          limit={32}
        />
      </>
    );
  };

  renderFilterResult = () => {
    const movieCategory = this.props.movies.filter((movie) => {
      return movie.category === this.props.type;
    });

    const filteredMovies = movieCategory.filter((movie) => {
      return movie.genres.includes(this.state.filter);
    });

    console.log(filteredMovies);
    return (
      <MovieGrid
        gridType="is-suggested"
        title={this.state.filter}
        movies={filteredMovies}
      />
    );
  };

  render() {
    return (
      <>
        <Filter
          type={this.props.typeText}
          optionText={this.props.optionText}
          onSelectChange={this.onFilter}
        />
        {this.state.filter
          ? this.renderFilterResult()
          : this.renderMoviesGrid()}
      </>
    );
  }
}

export default CategoryPage;
