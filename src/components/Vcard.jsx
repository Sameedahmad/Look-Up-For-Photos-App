import React from "react";

function Vcard(props) {
  return (
    <div className="flip flip-vertical">
      <div
        className="front"
        style={{ backgroundImage: "url(" + props.img + ")" }}
      >
        <h1 className="text-shadow">{props.title}</h1>
      </div>
      <div className="back">
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

// <Hcard img= title= heading= content=/>

export default Vcard;
