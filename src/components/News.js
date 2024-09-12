import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

import InfiniteScroll from 'react-infinite-scroller';

function News(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMoreData = async () => {
    try {
      const nextPage = currentPage + 1;
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.cat}&apiKey=42da80676fef4926a50e0288683aa7f7&page=${nextPage}&pageSize=${props.size}`;
     
      let response = await fetch(url);
      let parsedData = await response.json();
      setData([...data, ...parsedData.articles]); // Append new data to the existing data
      setCurrentPage(nextPage);
    
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  
  // Trigger API call whenever the component mounts or props.cat changes
  useEffect(() => {
    async function fetchNewsData() {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.cat}&apiKey=42da80676fef4926a50e0288683aa7f7&page=${page}&pageSize=${props.size}`;
  
        let response = await fetch(url);
        let parsedData = await response.json();
        console.log(parsedData);
      
        setData(parsedData.articles); // Update the data state with the fetched articles

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    // Call the function whenever the category (props.cat) changes
    fetchNewsData();
  }, [[page, props.cat, props.size]]);  // Add props.cat to the dependency array

  return (
    <div className="container text-center my-3">
      <h3>NewsDonkey</h3>
      <h1>---------TOP HEADLINES---------</h1>
     
      {/* Infinite scrolling component */}
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreData}
        hasMore={true}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <div className="row">
          {data.map((element) => (
            <div className="col-md-3 my-6" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0,50) : " "}
                description={element.description ? element.description.slice(0,130) : " "}
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
