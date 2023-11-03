import React from "react";
import News from "./News";

function NewsItem(props) {
  return (
    <div>
      <div
        className="card"
        style={{  height: '450px',marginBottom: '30px'}}
      >
        <img src={props.imageURL} className="card-image-top" alt="..." 
          style={{ height: '220px' }} />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <a
            href={props.newsURL}
            target="blank"
            className="btn btn-sn btn-primary"  style={{
              position: 'absolute',  // Set position: absolute
              bottom: '10px',        // Adjust as needed
              left: '10px',          // Adjust as needed
            }}
          >
            Read News
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
