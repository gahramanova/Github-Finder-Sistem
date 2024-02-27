import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar bg-dark navbar-dark">
        <div className="container d-flex justify-content-center">
          <a className="navbar-brand" href="https://github.com/" target="_blank">
          <i className="fa-brands fa-github"></i> Github Finder
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
