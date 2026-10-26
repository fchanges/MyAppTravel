import "../styles/Info.css";

function Info() {
  return (
    <div className="container-info">
      <div className="info-flex">
        <div className="info-items">
          <a href="#calendar">
            <span className="material-symbols-outlined">calendar_month</span>
            <div className="judul-items">Schedule/day</div>
            <p>We are available</p>
          </a>
        </div>
        <div className="info-items">
          <a href="#members">
            <span className="material-symbols-outlined">person</span>
            <div className="judul-items">Members</div>
            <p>Professional served</p>
          </a>
        </div>
        <div className="info-items">
          <a href="#chat">
            <span className="material-symbols-outlined">chat</span>
            <div className="judul-items">Chat Us</div>
            <p>Fast Respons</p>
          </a>
        </div>
        <div className="info-items">
          <a href="#search">
            <span className="material-symbols-outlined">search</span>
            <div className="judul-items">Search</div>
            <p>Find destinations</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
