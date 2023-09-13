const React = require("react");
const Layout = require("./Layout");

function Login({ user }) {
  return (
    <Layout user={user}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card shadow-lg bg-light" style={{ width: "18rem" }}>
          <h4 className="card-header text-center">Login</h4>
          <div className="card-body">
            <form action="/api/users/login" method="POST">
              <div className="mb-3 text-center mx-auto">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  User name
                </label>
                <input
                  name="userName"
                  className="form-control mx-auto"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 text-center mx-auto">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control mx-auto"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="text-center mx-auto">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Login;
