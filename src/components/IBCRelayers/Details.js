import React from "react";
import { Table } from "react-bootstrap";
import './Details.css';
import ibcIcon from './assets/IBC.png';
import usersIcon from './assets/users.png';
import Card from "./Card";
import moneyIcon from './assets/money-svgrepo-com.png'
import ibcTxsIcon from './assets/ibcTxs.png';
import settingIcon from './assets/setting.png';
import timeIcon from './assets/time.png';
import crescentIcon from './assets/crescent.png';
import umeeIcon from './assets/umee.png';
import chainumeeIcon from './assets/chain_umee.png';

function Details() {

  const total = {
    title: 'Total Transfer Value',
    isNnknown: true,
    value: '$ 0',
    icon: moneyIcon,
    bgColor: '#ebfdef',
    isLast: false
  };
  const ibc = {
    title: 'IBC Total Txs',
    isNnknown: false,
    value: '37',
    icon: ibcTxsIcon,
    bgColor: '#d7effb',
    isLast: false
  };
  const operating = {
    title: 'Operating Period',
    isNnknown: false,
    value: '----',
    icon: settingIcon,
    bgColor: '#fbebe2',
    isLast: false
  };
  
  const last = {
    title: 'Last Update Time',
    isNnknown: false,
    value: '2 days ago',
    icon: timeIcon,
    bgColor: '#fef8e4',
    isLast: true
  };

  const tableItems = [
    { name: "16", txs: "increase minium commisions", amount: "Passed", value: "2022-02-1 12:12:32"},
  ]

  return(
    <div className="container">
      <div className="title mt-4">
        <img src={ibcIcon} alt='ibcIcon' style={{height: '30px'}} />
        <h4 className="title-text">IBC RELAYER Detail</h4>
      </div>
      <div className="card-group mt-4">
        <Card data={total} />
        <Card data={ibc} />
        <Card data={operating} />
        <Card data={last} />
      </div>

      <div className="row mt-5">
        <div className="col-md-6 cosmos-item" style = {{ borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px' }}>
          <div className="d-flex justify-content-between cosmos-header" style={{alignItems: 'center'}}>
            <div className="d-flex">
              <img src={crescentIcon} />
              <div className="d-flex flex-column mt-4">
                <h5>Cosmos</h5>
                <p>cosmoshub-4</p>
              </div>
            </div>
            <div className="d-flex flex-column mt-4">
              <span className="pending-mark">Pending: 0</span>
            </div>
          </div>
          <div className="cosmos-body">
            <span className="d-flex justify-content-between mt-2">
              <p><b>IBC Send Txs</b></p>
              <p><b>5</b> <i>$ 0.00</i></p>
            </span>
            <span className="d-flex justify-content-between mt-2">
              <p><b>IBC Received Txs</b></p>
              <p><b>25</b> <i>$ 0.00</i></p>
            </span>
            <span className="d-flex justify-content-between mt-2">
              <p><b>IBC Timeout Txs</b></p>
              <p><b>5</b> <i>$ 0.00</i></p>
            </span>
          </div>
        </div>
        <div className="col-md-6 umme-item" style = {{ borderTopRightRadius:'10px', borderBottomRightRadius:'10px' }}>
          <div className="d-flex justify-content-between cosmos-header" style={{alignItems: 'center'}}>
            <div className="d-flex">
              <img src={umeeIcon} />
              <div className="d-flex flex-column mt-4">
                <h5>Umme</h5>
                <p>Channel 125</p>
              </div>
            </div>
            <div className="d-flex flex-column mt-4">
              <span className="pending-mark">Pending: 0</span>
            </div>
          </div>
          <div className="cosmos-body">
            <span className="d-flex justify-content-between mt-2">
              <p><b>IBC Send Txs</b></p>
              <p><b>5</b> <i>$ 0.00</i></p>
            </span>
            <span className="d-flex justify-content-between mt-2">
              <p><b>IBC Received Txs</b></p>
              <p><b>25</b> <i>$ 0.00</i></p>
            </span>
            <span className="d-flex justify-content-between mt-2">
              <p><b>IBC Timeout Txs</b></p>
              <p><b>5</b> <i>$ 0.00</i></p>
            </span>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 detail-assets">
          <div className="d-flex justify-content-between assets-title">
            <h5 style={{paddingTop: '5px'}}>Relayed Assets12</h5>
            <div className="assets-right">
              <p style={{paddingTop: '5px'}}>Asset Type</p>
              <div className="dropdown dropdown-padding">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  All Assets
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
          </div>
          
          <Table striped hover>
            <thead className="table_head">
                <tr>
                    <th>Name</th>
                    <th>Total Txs</th>
                    <th>Total Amount</th>
                    <th>Total Value</th>
                </tr>
            </thead>
            <tbody>
              <tr className="row_umee_even">
                  <td>
                      <div className="d-flex">
                        <img src={chainumeeIcon} style={{ height: '40px'}}/>
                        <div className="umee_text">
                          <p className="mb-0">UMEE</p>
                          <p className="mb-0">channle-184(transfer)</p>
                        </div>
                        
                      </div>
                  </td>
                  <td className="table_title">368,121</td>
                  <td className="table_status">191,103,115,821758</td>
                  <td className="table_date"><b>$ 8153</b> <i>$ 0.02</i></td>
              </tr>
              <tr className="row_umee_odd">
                  <td>
                      <div className="d-flex">
                        <img src={chainumeeIcon} style={{ height: '40px'}}/>
                        <div className="umee_text">
                          <p className="mb-0">UMEE</p>
                          <p className="mb-0">channle-184(transfer)</p>
                        </div>
                        
                      </div>
                  </td>
                  <td className="table_title">368,121</td>
                  <td className="table_status">191,103,115,821758</td>
                  <td className="table_date"><b>$ 8153</b> <i>$ 0.02</i></td>
              </tr>
              <tr className="row_umee_even">
                  <td>
                      <div className="d-flex">
                        <img src={chainumeeIcon} style={{ height: '40px'}}/>
                        <div className="umee_text">
                          <p className="mb-0">UMEE</p>
                          <p className="mb-0">channle-184(transfer)</p>
                        </div>
                        
                      </div>
                  </td>
                  <td className="table_title">368,121</td>
                  <td className="table_status">191,103,115,821758</td>
                  <td className="table_date"><b>$ 8153</b> <i>$ 0.02</i></td>
              </tr>
              <tr className="row_umee_odd">
                  <td>
                      <div className="d-flex">
                        <img src={chainumeeIcon} style={{ height: '40px'}}/>
                        <div className="umee_text">
                          <p className="mb-0">UMEE</p>
                          <p className="mb-0">channle-184(transfer)</p>
                        </div>
                        
                      </div>
                  </td>
                  <td className="table_title">368,121</td>
                  <td className="table_status">191,103,115,821758</td>
                  <td className="table_date"><b>$ 8153</b> <i>$ 0.02</i></td>
              </tr>
              <tr className="row_umee_even">
                  <td>
                      <div className="d-flex">
                        <img src={chainumeeIcon} style={{ height: '40px'}}/>
                        <div className="umee_text">
                          <p className="mb-0">UMEE</p>
                          <p className="mb-0">channle-184(transfer)</p>
                        </div>
                        
                      </div>
                  </td>
                  <td className="table_title">368,121</td>
                  <td className="table_status">191,103,115,821758</td>
                  <td className="table_date"><b>$ 8153</b> <i>$ 0.02</i></td>
              </tr>
            </tbody>
          </Table>
          <div className="table-footer" style={{background: '#fff'}}>
            <button className="btn m-2 btn-primary">1</button>
            <button className="btn m-2">2</button>
            <button className="btn m-2">3</button>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="umee-panel">
            <h5 className="umee-text">Weekly Transfered Value</h5>
            <h2 className="money-text">$ 0</h2>
            <div className="d-flex justify-content-between">
              <button className="btn btn-receive">Receive</button>
              <button className="btn btn-receive">Send</button>
            </div>
          </div>
        </div>
      </div>

      <div className="title mt-5">
        <img src={usersIcon} alt='ibcIcon' style={{height: '30px'}} />
        <h4 className="title-text">Relayer Operator</h4>
      </div>
      <div className="row mt-2">
        <div className="col-md-12 detail-assets">
          <Table striped hover>
            <thead className="table_head">
                <tr>
                    <th>operator Address</th>
                    <th>IBC Received Txs</th>
                    <th>Last Update at</th>
                </tr>
            </thead>
            <tbody>
              <tr className="row_umee_even">
                  <td className="table_title">368,121</td>
                  <td className="table_status">10818</td>
                  <td className="table_date">2022-05-12 23:00:00</td>
              </tr>
              <tr className="row_umee_odd">
                  <td className="table_title">368,121</td>
                  <td className="table_status">10818</td>
                  <td className="table_date">2022-05-12 23:00:00</td>
              </tr>
              <tr className="row_umee_even">
                  <td className="table_title">368,121</td>
                  <td className="table_status">10818</td>
                  <td className="table_date">2022-05-12 23:00:00</td>
              </tr>
              <tr className="row_umee_odd">
                  <td className="table_title">368,121</td>
                  <td className="table_status">10818</td>
                  <td className="table_date">2022-05-12 23:00:00</td>
              </tr>
              <tr className="row_umee_even">
                  <td className="table_title">368,121</td>
                  <td className="table_status">10818</td>
                  <td className="table_date">2022-05-12 23:00:00</td>
              </tr>
            </tbody>
          </Table>
          <div className="table-footer" style={{background: '#fff'}}>
            <button className="btn m-1 btn-primary">1</button>
            <button className="btn m-1">2</button>
            <button className="btn m-1">3</button>
          </div>
        </div>
      </div>

      <div className="title mt-5">
        <img src={ibcIcon} alt='ibcIcon' />
        <h4 className="title-text">Transactions</h4>
      </div>
      <div className="row mt-2">
        <div className="col-md-12 detail-assets">
          <Table striped hover>
            <thead className="txs_header">
                <tr>
                    <th style={{color: '#fff'}}>No</th>
                    <th style={{color: '#fff'}}>Tx Hash</th>
                    <th style={{color: '#fff'}}>Type</th>
                    <th style={{color: '#fff'}}>Result</th>
                    <th style={{color: '#fff'}}>Amount</th>
                    <th style={{color: '#fff'}}>Free</th>
                    <th style={{color: '#fff'}}>Height</th>
                    <th style={{color: '#fff'}}>TIme</th>
                </tr>
            </thead>
            <tbody>
              <tr className="row_umee_even">
                  <td className="table_title"><p className="row_no">01</p></td>
                  <td className="table_status">344,818,012</td>
                  <td className="table_date"><p className="row_delegate">Delegate</p></td>
                  <td className="table_date"><p className="row_success"><b>Success</b></p></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date">654233</td>
                  <td className="table_date">34s ago</td>
              </tr>
              <tr className="row_umee_odd">
                  <td className="table_title"><p className="row_no">01</p></td>
                  <td className="table_status">344,818,012</td>
                  <td className="table_date"><p className="row_delegate">Delegate</p></td>
                  <td className="table_date"><p className="row_cancel"><b>Canceled</b></p></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date">654233</td>
                  <td className="table_date">34s ago</td>
              </tr>
              <tr className="row_umee_even">
                  <td className="table_title"><p className="row_no">01</p></td>
                  <td className="table_status">344,818,012</td>
                  <td className="table_date"><p className="row_delegate">Delegate</p></td>
                  <td className="table_date"><p className="row_success"><b>Success</b></p></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date">654233</td>
                  <td className="table_date">34s ago</td>
              </tr>
              <tr className="row_umee_odd">
                  <td className="table_title"><p className="row_no">01</p></td>
                  <td className="table_status">344,818,012</td>
                  <td className="table_date"><p className="row_delegate">Delegate</p></td>
                  <td className="table_date"><p className="row_cancel"><b>Canceled</b></p></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date">654233</td>
                  <td className="table_date">34s ago</td>
              </tr>
              <tr className="row_umee_even">
                  <td className="table_title"><p className="row_no">01</p></td>
                  <td className="table_status">344,818,012</td>
                  <td className="table_date"><p className="row_delegate">Delegate</p></td>
                  <td className="table_date"><p className="row_success"><b>Success</b></p></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date">654233</td>
                  <td className="table_date">34s ago</td>
              </tr>
              <tr className="row_umee_odd">
                  <td className="table_title"><p className="row_no">01</p></td>
                  <td className="table_status">344,818,012</td>
                  <td className="table_date"><p className="row_delegate">Delegate</p></td>
                  <td className="table_date"><p className="row_cancel"><b>Canceled</b></p></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date">654233</td>
                  <td className="table_date">34s ago</td>
              </tr>
              <tr className="row_umee_even">
                  <td className="table_title"><p className="row_no">01</p></td>
                  <td className="table_status">344,818,012</td>
                  <td className="table_date"><p className="row_delegate">Delegate</p></td>
                  <td className="table_date"><p className="row_success"><b>Success</b></p></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date">654233</td>
                  <td className="table_date">34s ago</td>
              </tr>
              <tr className="row_umee_odd">
                  <td className="table_title"><p className="row_no">01</p></td>
                  <td className="table_status">344,818,012</td>
                  <td className="table_date"><p className="row_delegate">Delegate</p></td>
                  <td className="table_date"><p className="row_cancel"><b>Canceled</b></p></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date"><b>0.02000</b><i>UMEE</i></td>
                  <td className="table_date">654233</td>
                  <td className="table_date">34s ago</td>
              </tr>
            </tbody>
          </Table>
          <div className="table-footer" style={{background: '#fff'}}>
            <button className="btn m-1 btn-primary">1</button>
            <button className="btn m-1">2</button>
            <button className="btn m-1">3</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;