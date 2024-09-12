import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroller';

function News(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreData = async () => {
    try {
      const nextPage = currentPage + 1;
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.cat}&apiKey=42da80676fef4926a50e0288683aa7f7&page=${nextPage}&pageSize=${props.size}`;
      
      let response = await fetch(url);
      let parsedData = await response.json();

      // Check if there are any more articles to fetch
      if (parsedData.articles.length > 0) {
        setData([...data, ...parsedData.articles]);
        setCurrentPage(nextPage);
      } else {
        setHasMore(false);  // Stop fetching when there's no more data
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    async function fetchNewsData() {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.cat}&apiKey=42da80676fef4926a50e0288683aa7f7&page=${page}&pageSize=${props.size}`;
        
        let response = await fetch(url);
        let parsedData = await response.json();
        
        setData(parsedData.articles);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    
    fetchNewsData();
  }, [page, props.cat, props.size]);  // Correct dependency array

  return (
    <div className="container text-center my-3">
      <h3>NewsDonkey</h3>
      <h1>---------TOP HEADLINES---------</h1>
      
      {/* Infinite scrolling component */}
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreData}
        hasMore={hasMore}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <div className="row">
          {data.map((element) => (
            <div className="col-md-3 my-6" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 50) : " "}
                description={element.description ? element.description.slice(0, 130) : " "}
                imageURL={element.urlToImage ? element.urlToImage : 'https://guwahatiplus.com/public/web/images/default-news.png'}
                newsURL={element.url}
                ath={element.author}
                publish={element.publishedAt}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default News;
