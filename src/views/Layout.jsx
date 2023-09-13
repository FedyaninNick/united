const React = require("react");
const NavBar = require("./components/NavBar");

function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <title>React SSR</title>
      </head>
      <body>
        <header>
          <NavBar user={user} />
        </header>
        <main>
          <div className="d-flex flex-column align-items-center">
            {children}
          </div>
        </main>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
          crossorigin="anonymous"
        />
        <script src="/js/shazAm.js"></script>
      </body>
    </html>
  );
}

module.exports = Layout;
