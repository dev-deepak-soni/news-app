import React from "react";

const NewsItem = (props) => {
  let { title, description, urlToImage, newsUrl, date, author, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge badge-primary bg-success">{source.name}</span>
        </div>
        <img src={urlToImage} className="card-img-top" alt="Error Images" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              Last updated on {new Date(date).toGMTString()}
            </small>
          </p>
          <p className="card-text">
            <small className="text-muted">By {author}</small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
