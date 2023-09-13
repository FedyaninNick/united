const React = require("react");
const Layout = require("./Layout");

function BeatInfo({ beat, user }) {
  const isLoggedIn = user !== undefined; // Проверяем, есть ли пользователь

  return (
    <Layout user={user}>
      <div className="container mt-4 custom-container">
        <div className="row">
          <div className="col-md-6">
            {/* Описание музыки */}
            <h3 className="mb-3">Name of beat:</h3>
            <p className="mb-4">{beat.title}</p>
            <h4>Janre:</h4>
            <p className="mb-4">{beat.janre}</p>
            <h4>Key:</h4>
            <p className="mb-4">{beat.key}</p>
            <h4>Autor:</h4>
            <p className="mb-4">{beat.autor}</p>
            <h4>Price:</h4>
            <p className="mb-4">{beat.price}</p>
            {isLoggedIn && (
              <div className="d-flex align-items-center mb-3">
                <button className="btn btn-primary ">Buy this beat</button>
                <a href="/beats" className="btn btn-primary mx-2">
                  Back to shop
                </a>

                <button
                  className="btn btn-primary btn btn-danger"
                  type="button"
                  data-beatid={beat.id}
                  id="deleteBtn"
                >
                  DELETE
                </button>
                <a
                  href={`/beats/${beat.id}/edit`}
                  className="btn btn-primary mx-2 btn-warning "
                >
                  EDIT
                </a>
              </div>
            )}
          </div>
          <div className="col-md-6">
            <h3>{beat.title}:</h3>
            <div className="container mt-4"></div>
            <h3>image:</h3>
            <img src={beat.imageFile} alt="Image" className="custom-image" />
          </div>
        </div>
      </div>

      <script src="/js/beat-delete.js" />
    </Layout>
  );
}

module.exports = BeatInfo;
