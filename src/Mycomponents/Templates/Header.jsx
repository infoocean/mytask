import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
              height="30"
              alt=""
              loading="lazy"
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  TV Shows
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Recently Added
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  My List
                </a>
              </li>
            </ul>

            <form class="d-flex input-group w-auto">
              <input
                type="search"
                class="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-primary"
                type="button"
                data-mdb-ripple-color="dark"
                style={{padding:'padding: .45rem 1.5rem .35rem'}}
              >
                Search
              </button>
            </form>
            <ul class="navbar-nav mb-2 mb-lg-0" style={{marginLeft:'20px', marginRight:"20px"}}>
              <li class="nav-item dropdown">
                <a
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                    class="rounded-circle img-fluid"
                    height="35"
                    width="35"
                  />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end p-1"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Manage Profilses
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Your Account
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Help
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
