const React = require("react");

function NavBar({ user }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home page
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/beats">
                  announcement
                </a>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/beats/new">
                      Add Your announcement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/users/profile">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <span
                      id="logout"
                      className="nav-link"
                      style={{ userSelect: "none" }}
                    >
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">
                      Register
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <script src="/js/logout.js" />
    </>
  );
}

module.exports = NavBar;
