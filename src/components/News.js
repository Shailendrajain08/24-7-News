import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=87aa1b304df741f186fc67a10ae1e6bf";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News 24/7 - Top Headlines</h2>
        <Spinner/>
        <div className="my-3">
          <Row>
            {this.state.articles.map((element) => {
              return (
                <Col key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    urlToImage={element.urlToImage}
                    name={element.name}
                    newsUrl={element.url}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default News;
