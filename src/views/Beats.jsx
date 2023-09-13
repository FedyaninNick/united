const React = require("react");
const Layout = require("./Layout");
const BeatCard = require("./components/BeatCard");

function Beats({ beats, user }) {
  return (
    <Layout user={user}>
      <h1>announcement</h1>
      <div
        className="beats"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {beats.map((beat) => (
          <BeatCard beat={beat} key={beat.id} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Beats;
