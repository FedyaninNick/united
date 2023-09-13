const React = require("react");
const Layout = require("./Layout");
const BeatCard = require("./components/BeatCard");

function Profile({ beats, user }) {
  return (
    <Layout user={user}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            {/* Контейнер с информацией о пользователе */}
            <h1>{user.userName}, Welcome to your profile!</h1>
            <h3 className="name">Your name:</h3>
            <p className="name2">{user.userName}</p>
            <h4 className="mail2">Your email:</h4>
            <p className="mail">{user.email}</p>
            <h4 className="mail2">Your birthday:</h4>
            <p className="mail">{user.birthday}</p>
            <h4 className="mail2">Your city:</h4>
            <p className="mail">{user.city}</p>
            <h4 className="mail2">Sports what you like :</h4>
            <p className="mail">{user.sports}</p>
            <h4 className="mail2">Your acount was created:</h4>
            <p className="mail">{user.createdAt}</p>
          </div>
          <div className="col-md-8">
            {/* Контейнер с карточками */}
            <h2 className="left">Your Beats:</h2>
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
          </div>
        </div>
      </div>

      <script src="/js/beat-edit.js" />
      <script src="/js/beat-delete.js" />
    </Layout>
  );
}

module.exports = Profile;
