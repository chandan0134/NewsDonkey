import React from "react";
import NewsItem from "./NewsItem";
import { useState,useEffect } from "react";



function News() {

  const [data, setData] = useState([]);
  const [page,setPage]=useState(1);
  const [size,setSize]=useState(20)
  const [total,setTotal]=useState(null);



  
  useEffect(() => {
    async function newsdata() {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=84cd15309f79485f99c1d0b82686d4dc&page=${page}&pageSize=${size}`;
        let response = await fetch(url);
        let parsedData = await response.json();
        console.log("result",parsedData)
        setTotal(parsedData.totalResults)
        setData(parsedData.articles); // Update the data state with the fetched articles
        console.log(total,data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    newsdata();
  }, []);


  async function handleNextClick(){
    // if(page+1>Math.ceil(totalResult/20)){

    // }
    
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=84cd15309f79485f99c1d0b82686d4dc&page=${page+1}`;
    let response = await fetch(url);
    let parsedData = await response.json();
    setData(parsedData);
    setPage(page+1);
    setSize()
    
  }

  async function handlePrevClick(){
    console.log("Prev");
    if(page>1){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=84cd15309f79485f99c1d0b82686d4dc&page=${page-1}`;
    let response = await fetch(url);
    let parsedData = await response.json();
    setData(parsedData);
    setPage(page-1);
    }
    
  }
  

  return (
    <div className="container my-3">
      <h3>NewsDonkey</h3>
      <h1>--------------------------------TOP HEADLINES------------------------------</h1>
      <div className="row">
        {data.map((element) => (
          <div className="col-md-3">
            <NewsItem
              key={element.url}
              title={element.title ? element.title.slice(0,45) : " "}
              description={element.description ? element.description.slice(0,80) : " "}
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
