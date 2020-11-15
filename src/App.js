import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Details from "./pages/Details";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
// Import Data
import data from "./data/movies.json";

class App extends React.Component {
  state = {
    movies: data,
  };
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <Header />

            <>
              <Route
                exact
                path="/"
                render={(props) => {
                  console.log(props);
                  return <HomePage {...props} movies={this.state.movies} />;
                }}
              />
              <Route
                exact
                path="/movies"
                render={(props) => (
                  <CategoryPage
                    {...props}
                    movies={this.state.movies}
                    type="Film"
                    typeText="الافلام"
                    optionText="نوع الفيلم"
                  />
                )}
              />
              <Route
                exact
                path="/shows"
                render={(props) => (
                  <CategoryPage
                    {...props}
                    movies={this.state.movies}
                    type="Show"
                    typeText="مسلسلات"
                    optionText="نوع المسلسل"
                  />
                )}
              />
              <Route
                exact
                path="/details/:id"
                render={(props) => {
                  return <Details {...props} movies={this.state.movies} />;
                }}
              />
              <Route
                exact
                path="/search/:keyword"
                render={(props) => {
                  return <SearchPage {...props} movies={this.state.movies} />;
                }}
              />
            </>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
