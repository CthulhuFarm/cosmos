import React from "react";
import infoIcon from './assets/i.png';
import Card from "./Card";

function Item({data}) {
  const { title, datas } = data;
  return(
    <div className="main-panel">
      <div className="param-title">
        <div className="info-title">
          <img src={infoIcon} alt='infoIcon' style={{height: '30px'}} />
          <h3 className="p-3">{title}</h3>
        </div>
      </div>
      <div className="row cards">
        {datas.map((item, idx) => {
          return (
            <Card data={item} />
          )
        })}
      </div>
      </div>
  )
}

export default Item;