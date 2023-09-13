const React = require("react");
const Layout = require("./Layout");

function HomePage({ user }) {
  return (
    <Layout user={user}>
      <h2 className="navnav">Welcome </h2>
      {user?.userName && <h2>{`${user.userName}`}</h2>}
    </Layout>
  );
}

module.exports = HomePage;
