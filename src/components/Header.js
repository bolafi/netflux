import React from "react";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  state = {
    searchTerm: "",
    origin: "",
  };

  onChangeHandler = (event) => {
    if (event.target.value) {
      this.setState({
        searchTerm: event.target.value,
        origin: this.props.location.pathname.includes("/search")
          ? this.state.origin
          : this.props.location.pathname,
      });
      return this.props.history.push(`/search/${event.target.value}`);
    } else {
      this.setState({
        searchTerm: "",
      });
      return this.props.history.push(this.state.origin);
    }
  };
  render() {
    return (
      <header className="section" role="navigation">
        <div className="container">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="navbar-burger" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <Logo />
          <MenuBar />
          <div className="navbar-search">
            <button>
              <i className="fas fa-search"></i>
            </button>
            <input
              onChange={this.onChangeHandler}
              className="searchInput"
              type="text"
              name="search"
              placeholder="إبحث عن فيلم أو مسلسل..."
            />
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
