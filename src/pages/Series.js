import React from "react";
import MovieGrid from "../components/MovieGrid";
import Filter from "../components/Filter";
import { suggested, mostViewed, recentRelease } from "../utils/helper";

class Series extends React.Component {
  render() {
    return (
      <>
        <Filter Filter type="مسلسلات" optionText="نوع المسلسل" />
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
          title="أحدث المسلسلات"
          gridType="is-movies"
          movies={recentRelease(this.props.movies, "Show")}
          limit={32}
        />
      </>
    );
  }
}

export default Series;
