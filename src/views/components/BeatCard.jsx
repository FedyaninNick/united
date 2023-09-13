const React = require("react");

function BeatCard({ beat }) {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <div className="card-body">
        <h5 className="card-title">{beat.title}</h5>
        <h6 className="card-title">janre:{beat.janre}</h6>
        <p className="card-text">price: {beat.price}</p>
        <p>
          <img src={beat.imageFile} alt="Image" style={{ maxWidth: "100%" }} />
        </p>
        <a
          href={`/beats/${beat.id}`}
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Detail
        </a>
      </div>
    </div>
  );
}

module.exports = BeatCard;
