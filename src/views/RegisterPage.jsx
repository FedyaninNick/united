const React = require("react");
const Layout = require("./Layout");

function Register({ user }) {
  return (
    <Layout user={user}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card shadow-lg bg-light" style={{ width: "18rem" }}>
          <h4 className="card-header text-center">Registration</h4>
          <div className="card-body">
            <form action="/api/users/register" method="POST">
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
                <label htmlFor="exampleInputEmail2" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control mx-auto"
                  id="exampleInputEmail2"
                  required // Добавлен атрибут required
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
              <div className="mb-3 text-center mx-auto">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  birthday
                </label>
                <input
                  name="birthday"
                  type="birthday"
                  className="form-control mx-auto"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 text-center mx-auto">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  city
                </label>
                <input
                  name="city"
                  type="city"
                  className="form-control mx-auto"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 text-center mx-auto">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  sports
                </label>
                <input
                  name="sports"
                  type="sports"
                  className="form-control mx-auto"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="text-center mx-auto">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Register;
