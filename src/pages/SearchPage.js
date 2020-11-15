import React, { Component } from "react";
import MovieGrid from "../components/MovieGrid";
export default class SearchPage extends Component {
  render() {
    const searchResult = this.props.movies.filter((movie) => {
      const regex = new RegExp(this.props.match.params.keyword, "gi");

      return movie.originalTitle.match(regex);
    });
    return (
      <div>
        <MovieGrid
          gridType="search-results"
          title={`نتيجة البحث عن ${this.props.match.params.keyword}`}
          limit={searchResult.lenght}
          movies={searchResult}
        />
      </div>
    );
  }
}
