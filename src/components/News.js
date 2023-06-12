import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  const updateNews = async () => {
    console.log('first time page is ',page);
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(60);
    console.log("parseData", parseData);
    setarticles(parseData.articles);
    settotalResults(parseData.totalResults);
    setloading(false);
    props.setProgress(100);
    
  }
  
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);


  const fetchMoreData = async () => {
    setpage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      setarticles(articles.concat(parseData.articles));
      settotalResults(parseData.totalResults);
  };
    return (
      <>
        <h3 className="text-center" style={{ margin: "35px 0px", marginTop:'90px' }}>
          National News{" "}
        </h3>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element, index) => {
                return (
                  <div key={index} className="col-md-4">
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      urlToImage={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author ? element.author : "unknown"}
                      date={element.publishedAt}
                      source={element.source}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  
}

News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News;
