import React from "react";
import News from  "./News";

function NewsItem(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imageURL} className="card-image-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <a href={props.newsURL} target="blank" className="btn btn-sn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
