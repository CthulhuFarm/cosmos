import React from "react";
import './Lists.css';
import ibcIcon from './assets/IBC.png';
import arrowDownIcon from './assets/arrowDown.svg';
import sciencesIcon from './assets/sciences.svg';
import umeeIcon from './assets/umee.svg';
import Item from './Item';

function Lists() {
  return(
    <div className="container">
      <div className="title mt-4">
        <img src={ibcIcon} alt='ibcIcon' style={{height: '30px'}} />
        <h4 className="title-text">IBC RELAYERS</h4>
      </div>

      <div className="list mt-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img src={arrowDownIcon} />
            <img src={sciencesIcon} />
            <div className="d-flex flex-column mt-4">
              <h5>Cosmos</h5>
              <p>cosmoshub-4</p>
            </div>
          </div>
          <div className="d-flex flex-column mt-4">
            <span className="green-mark">· Opened</span>
            <p>Channel 1/1</p>
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr className="table-stripe">
              <th className="thead-onlytext" scope="col">#</th>
              <th scope="col">
                <img src={umeeIcon} />
                Umee
              </th>
              <th scope="col">
                <img src={sciencesIcon} width={45} />
                Cosmos
              </th>
              <th className="thead-onlytext" scope="col">Operating Period</th>
              <th className="thead-onlytext" scope="col">24h Txs</th>
              <th className="thead-onlytext" scope="col">24h Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td style={{ color: '#027AFF'}}>channel-1</td>
              <td style={{ color: '#027AFF'}}>Channel - 2565</td>
              <td>350 Days</td>
              <td>0</td>
              <td>0.00</td>
            </tr>
            <tr className="table-stripe">
              <th scope="row">2</th>
              <td style={{ color: '#027AFF'}}>channel-1</td>
              <td style={{ color: '#027AFF'}}>Channel - 2565</td>
              <td>350 Days</td>
              <td>0</td>
              <td>0.00</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td style={{ color: '#027AFF'}}>channel-1</td>
              <td style={{ color: '#027AFF'}}>Channel - 2565</td>
              <td>350 Days</td>
              <td>0</td>
              <td>0.00</td>
            </tr>
            <tr className="table-stripe">
              <th scope="row">4</th>
              <td style={{ color: '#027AFF'}}>channel-1</td>
              <td style={{ color: '#027AFF'}}>Channel - 2565</td>
              <td>350 Days</td>
              <td>0</td>
              <td>0.00</td>
            </tr>
            <tr style={{borderBottom: '5px solid #D7EFFB'}}>
              <th scope="row">5</th>
              <td style={{ color: '#027AFF'}}>channel-1</td>
              <td style={{ color: '#027AFF'}}>Channel - 2565</td>
              <td>350 Days</td>
              <td>0</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  )
}

export default Lists;