import React from "react";

function Card({data}) {
  const { title, content, color } = data;
  return(
    <div className="col-md-2 param-card" style={{ borderBottom: `6px solid ${color}` }}>
      <span className="card-title">{title}</span>
      <p className="text-bold">{content}</p>
    </div>
  )
}

export default Card;