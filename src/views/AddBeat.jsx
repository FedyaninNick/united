const React = require("react");
const Layout = require("./Layout");

function AddBeat({ user }) {
  const labelStyle = { fontSize: "25px" }; // Стиль для всех меток
  const maxInputLength = 22; // Максимальная длина символов

  return (
    <Layout user={user}>
      <h1>Add your announcement</h1>
      <form action="/api/beats" method="POST" encType="multipart/form-data">
        <div className="mb-3">
          <label
            htmlFor="title"
            className="form-label text-light"
            style={labelStyle}
          >
            Name of announcement
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Name of beat"
            required
            maxLength={maxInputLength} // Максимальная длина символов
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="janre"
            className="form-label text-light"
            style={labelStyle}
          >
            Type of sport
          </label>
          <input
            className="form-control"
            type="text"
            name="janre"
            placeholder="Genre"
            maxLength={maxInputLength} // Максимальная длина символов
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="price"
            className="form-label text-light"
            style={labelStyle}
          >
            Price
          </label>
          <input
            className="form-control"
            type="text"
            name="price"
            placeholder="Price"
            maxLength={maxInputLength} // Максимальная длина символов
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="autor"
            className="form-label text-light"
            style={labelStyle}
          >
            Autor
          </label>
          <input
            className="form-control"
            type="text"
            name="autor"
            placeholder="Autor"
            maxLength={maxInputLength}
            required // Добавлен атрибут required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="key"
            className="form-label text-light"
            style={labelStyle}
          >
            Key
          </label>
          <input
            className="form-control"
            type="text"
            name="key"
            placeholder="Key"
            maxLength={maxInputLength}
            required // Добавлен атрибут required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="image"
            className="form-label text-dark"
            style={labelStyle}
          >
            Image File (optional)
          </label>
          <input
            className="form-control"
            type="file"
            name="image"
            accept="*/*"
          />
        </div>

        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-primary mx-auto">
            ADD Files
          </button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = AddBeat;
