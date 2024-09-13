import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

function News(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreData = async () => {
    try {
      const nextPage = page + 1;
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.cat}&apiKey=42da80676fef4926a50e0288683aa7f7&page=${nextPage}&pageSize=${props.size}`;
      
      let response = await fetch(url);
      let parsedData = await response.json();

      if (parsedData.articles.length > 0) {
        setData([...data, ...parsedData.articles]);
        setPage(nextPage);
      } else {
        setHasMore(false);  // No more data to load
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    async function fetchNewsData() {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.cat}&apiKey=42da80676fef4926a50e0288683aa7f7&page=1&pageSize=${props.size}`;
        
        let response = await fetch(url);
        let parsedData = await response.json();
        
        setData(parsedData.articles);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    
    fetchNewsData();
  }, [props.cat, props.size]);

  return (
    <div className="container text-center my-3">
      <h3>NewsDonkey</h3>
      <h1>---------TOP HEADLINES---------</h1>

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

      {hasMore && (
        <button className="btn btn-primary my-3" onClick={loadMoreData}>
          Load More
        </button>
      )}
    </div>
  );
}

export default News;
