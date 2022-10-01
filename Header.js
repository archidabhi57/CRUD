import { Link } from "react-router-dom";
import "./src/styles.css";

function Header() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <nav class="navbar ">
            <div class="container-fluid">
              <a class="navbar-brand" href=" " alt="">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png"
                  alt=""
                  width="15%"
                  height=""
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
          </nav>

          <button
            class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse ms-auto w-100"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav fs-6 ms-auto">
              <li class="nav-item">
                <Link to="/" class="text-dark nav-link menu">
                  Home
                  <hr />
                </Link>
              </li>
              <li class="nav-item">
                <Link to="./Matchies" class="text-dark nav-link menu ">
                  All Match
                  <hr />
                </Link>
              </li>
              <li class="nav-item">
                <Link to="./Matchies/add" class="text-dark nav-link menu">
                  {" "}
                  Add Match
                  <hr />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* 
      <Link to="./Matchies">All Match</Link> &nbsp; &nbsp;
      <Link to="./Matchies/add">Add Match</Link> */}
    </>
  );
}

export default Header;
