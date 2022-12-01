import React from "react";

function MovieCards() {
  const cardInfo = [
    {
      id:1,
      img: "./Images/movie.jpg",
      title: `Dragon Ball Super Broly Movie Hindi Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:2,
      img: "./Images/movie1.jpg",
      title: `The Lion King Movie Hindi/English/Tamil Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:3,
      img: "./Images/Hanumanji.jpg",
      title: `Return of Hanuman Movie 2017 Hindi/English Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:4,
      img: "./Images/movie3.jpg",
      title: `All Harry Potter Movies Hindi/English Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:5,
      img: "./Images/movie4.jpg",
      title: `Ice Age 2002 Movie English/Hindi/Tamil Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:6,
      img: "./Images/movie5.jpg",
      title: `The Angry Birds Movie Hindi/English Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:7,
      img: "./Images/movie6.jpg",
      title: `Doraemon Nobita's Chronicle of the Moon Exploration Hindi/English Download 4k`,
    },
    {
      id:8,
      img: "./Images/movie7.jpg",
      title: `Pokemon Movie Victini aur Reshiram Hindi/English Download [480p/720p/1080p]`,
    },
    {
      id:9,
      img: "./Images/movie8.jpg",
      title: `Tom and Jerry Movie Hindi/English/Tamil Dubbed Download [480p/720p/1080p]`,
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
      <h2 className="bg-white py-3 mb-3">MOVIES</h2>
      <div className="grid row g-3">{cardInfo.map(renderCard)}</div>
    </div>
  );
}
export default MovieCards;
