import React from "react";
import { suggested, mostViewed, recentRelease } from "../utils/helper";
import Hero from "../components/Hero";
import MovieGrid from "../components/MovieGrid";

// Import Data

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Hero />
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
          limit={8}
        />
        <MovieGrid
          title="أحدث الأفلام"
          gridType="is-movies"
          movies={recentRelease(this.props.movies, "Film")}
          limit={8}
        />
      </>
    );
  }
}

export default HomePage;
