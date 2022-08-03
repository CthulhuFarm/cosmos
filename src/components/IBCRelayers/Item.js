import React from "react";
import arrowRightIcon from './assets/arrowRight.svg';
import pearlIcon from './assets/pearl.svg';

function Item() {

  return (
    <div className="d-flex justify-content-between" style={{borderTop: 'solid 1px #EBEBEB'}}>
      <div className="d-flex" style={{alignItems: 'center'}}>
        <img src={arrowRightIcon} style={{ height: '25px' }} />
        <img src={pearlIcon} style={{height: '80px'}} />
        <div className="d-flex flex-column item-text">
          <span>DESMOS</span>
          <p className="mb-0">desmos-mainnet</p>
        </div>
      </div>
      <div className="d-flex flex-column mt-2">
        <span className="green-mark">· Opened</span>
        <p className="mb-0">Channel 1/1</p>
      </div>
    </div>
  );
}

export default Item;