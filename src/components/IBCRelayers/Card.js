import React from "react";
import moneyIcon from './assets/money-svgrepo-com.png'


function Card({data}) {
  const { title, isNnknown, value, icon, bgColor, isLast } = data;
  const marginStyle = isLast ? '0px' : '40px';
  return(
    <div className="card" style={{background: bgColor, marginRight: marginStyle }}>
      <div className="card-header" >
        <p>{title}</p>
        {isNnknown ? <p className="unknown">Unknown</p> : ''}
      </div>
      <div className="card-body">
        <p className="amount">{value}</p>
        <p className="money">
          <img src={icon} />
        </p>
      </div>
    </div>
  )
}

export default Card;