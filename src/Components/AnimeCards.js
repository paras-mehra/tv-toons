import React from "react";

function AnimeCards() {
  const cardInfo = [
    {
      id:1,
      img: "./images/Pokemon.jpg",
      title: `Pokemon All Seasons Hindi Dubbed Download
          [480p/720p/1080p]`,
    },
    {
      id:2,
      img: "./images/Tokyo-Revengers.jpg",
      title: `Tokyo Revengers Episodes Hindi Download [480p/720p/1080p]`,
    },
    {
      id:3,
      img: "./images/Shinchan.jpg",
      title: `Shinchan All Seasons Hindi Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:4,
      img: "./images/Demon-Slayer.jpg",
      title: `Demon Slayer Episodes Hindi Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:5,
      img: "./images/Naruto.jpg",
      title: `Naruto (2002-2007) All Episodes Hindi Download [480p/720p/1080p/4]`,
    },
    {
      id:6,
      img: "./images/Death-Note.jpg",
      title: `Death Note All Episodes Hindi Dubbed Download [480p/720/1080p]`,
    },
    {
      id:7,
      img: "./images/DBZ.jpg",
      title: `Dragon Ball Z All Episodes Hindi Download [480p/720/1080p]`,
    },
    {
      id:8,
      img: "./images/One-Punch-Man.jpg",
      title: `One Punch Man All Episodes Hindi Download [480p/720/1080p]`,
    },
    {
      id:9,
      img: "./images/Beyblade.png",
      title: `Beyblade Season 2 All Episodes Hindi Download [480p/720/1080p]`,
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
        <div className="card">
          <img
            src={card.img}
            className="card-img-top w-100"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-text">{card.title}</h5>
            <button
              type="button"
              className="btn border-radius-0 px-4 py-2 fs-6 my-3"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container text-center my-3">
      <h2 className="bg-white py-3 mb-3">ANIMES</h2>
      <div className="row g-3">{cardInfo.map(renderCard)}</div>
    </div>
  );
}

export default AnimeCards;
