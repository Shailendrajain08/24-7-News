import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, name, newsUrl } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            style={{ width: "18rem", height: "14rem" }}
            src={
              !urlToImage
                ? "https://image.cnbcfm.com/api/v1/image/107346331-1702387083648-gettyimages-1841164880-HOPE_GLOBAL_FORUMS.jpeg?v=1702387167&w=1920&h=1080"
                : urlToImage
            }
            className="card-img-top"
            alt={name}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
              rel="noreferrer"
            >
              Read Full News
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
