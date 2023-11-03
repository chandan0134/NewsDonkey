import React from "react";
import NewsItem from "./NewsItem";
import { useState,useEffect } from "react";
import spinner from "./spinner";




function News(props) {

  const [data, setData] = useState([]);
  const [page,setPage]=useState(1);
  const [load,setLoad]=useState(true);
 




  
  useEffect(() => {
    async function newsdata() {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.cat}&apiKey=84cd15309f79485f99c1d0b82686d4dc&page=${page}&pageSize=${props.size}`;
        setLoad(true);
        let response = await fetch(url);
        let parsedData = await response.json();
        console.log(parsedData)
      
        setData(parsedData.articles); // Update the data state with the fetched articles
        setLoad(false); 
        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    newsdata();
  }, []);

  async function handleNextClick() {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}apiKey=84cd15309f79485f99c1d0b82686d4dc&page=${page + 1}&pageSize=${props.size}`;
    let response = await fetch(url);
    let parsedData = await response.json();
    setData(parsedData.articles); // Update the data state with the fetched articles
    setPage(page + 1);
  }
  
  async function handlePrevClick() {
    console.log("Prev");
    if (page > 1) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=84cd15309f79485f99c1d0b82686d4dc&page=${page - 1}&pageSize=${props.size}`;
      let response = await fetch(url);
      let parsedData = await response.json();
      setData(parsedData.articles); // Update the data state with the fetched articles
      setPage(page - 1);
    }
  }
  

  return (
    <div className="container  text-center my-3">
      <h3>NewsDonkey</h3>
     
      <h1>---------TOP HEADLINES---------</h1>

      {load &&<spinner/>}
      <div className="row">
        {data.map((element) => (
          <div className="col-md-3 my-6">
            <NewsItem
              key={element.url}
              title={element.title ? element.title.slice(0,50) : " "}
              description={element.description ? element.description.slice(0,130) : " "}
              imageURL={element.urlToImage ? element.urlToImage :'https://guwahatiplus.com/public/web/images/default-news.png' }
              newsURL={element.url}
              
            />
          </div>
      
        ))}
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={page<=1} type="button" class="btn btn-primary" onClick={handlePrevClick}>&larr; Prev</button>
      <button type="button" class="btn btn-primary" onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  );
}

export default News;
