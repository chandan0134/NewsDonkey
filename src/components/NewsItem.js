import React from "react";
import News from  "./News";

function NewsItem(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" ,margin: " 2rem",height : "400px"}}>
        <img src={props.imageURL} className="card-image-top h-30" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <a href={props.newsURL} target="blank" className="btn btn-sn btn-primary">
            Read News
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
