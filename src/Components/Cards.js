import React from "react";
function Cards() {
  const cardInfo = [
    {
      id:1,
      img: "./images/siya-ram.jpg",
      title: `Ramayana: The Legend of Prince Rama Hindi Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:2,
      img: "./images/post2.png",
      title: `Spider-Man: Into the Spider-Verse Hindi Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:3,
      img: "./images/post3.jpg",
      title: `Ben 10 Movie 2021 Hindi/English Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:4,
      img: "./images/post4.jpg",
      title: `Cars (2006) Full Movie Hindi/English Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:5,
      img: "./images/post5.jpg",
      title: `Doraemon The Movie Stand By Me 2 Hindi Dubbed Download [480p/720p/1080p]`,
    },
    {
      id:6,
      img: "./images/post6.jpg",
      title: `Dragon Ball Super All Episodes Hindi Dubbed  Download [480p/720p/1080p]`,
    },
    {
      id:7,
      img: "./images/post7.jpg",
      title: `How to Train Your Dragon: The Hidden World Movie Hindi/English Dubbed Download 4k`,
    },
    {
      id:8,
      img: "./images/post8.jpg",
      title: `Tangled (2010) Full Movie Hindi/English Dubbed Download [480P, 720P, 1080P]`,
    },
    {
      id:9,
      img: "./images/post9.jpg",
      title: `Bey blade All Seasons Episodes Hindi/English Dubbed Download [480/720/1080p]`,
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
            <h5 className="card-text">
              {card.title}
            </h5>
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
    <div className="container text-center py-4">
      <div className="row g-3">{cardInfo.map(renderCard)}</div>
    </div>
  );
}

export default Cards;
