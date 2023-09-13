const React = require("react");
const Layout = require("./Layout");

function BeatEdit({ user, beat }) {
  const labelStyle = { fontSize: "25px" }; // Стиль для всех меток
  return (
    <Layout user={user}>
      <h1 className="text-center">Edit menu</h1>
      <form id="editForm" name="edit" data-beatid={beat.id}>
        <div className="mb-3">
          <label
            htmlFor="title"
            className="form-label text-light"
            style={labelStyle}
          >
            Change a beat name
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Beat name"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="janre"
            className="form-label text-light"
            style={labelStyle}
          >
            Change janre
          </label>
          <input
            type="text"
            className="form-control"
            id="janre"
            name="janre"
            placeholder="Janre"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="key"
            className="form-label text-light"
            style={labelStyle}
          >
            Change Key
          </label>
          <input
            type="text"
            className="form-control"
            id="key"
            name="key"
            placeholder="Key"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="autor"
            className="form-label text-light"
            style={labelStyle}
          >
            Change Autor
          </label>
          <input
            type="text"
            className="form-control"
            id="autor"
            name="autor"
            placeholder="Autor"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="price"
            className="form-label text-light"
            style={labelStyle}
          >
            Change price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            placeholder="Price"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary btn-success" type="submit">
            Apply changes
          </button>
        </div>
      </form>

      <script src="/js/beat-edit.js" />
    </Layout>
  );
}

module.exports = BeatEdit;
