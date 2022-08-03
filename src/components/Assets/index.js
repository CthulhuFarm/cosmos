import './style.css'
import Banner from './Banner'
import { Table } from "react-bootstrap";
import logoIcon from './assets/assets-logo.png'

const Assets = () => {
  return (
    <div className='container'>
      <div className='k-assets-title d-flex my-3'>
        <img src={logoIcon} alt='' />
        <h4 className='cosmos-text text-uppercase'>assets</h4>
      </div>
      <Banner />
      <div className="row mt-5 table-responsive">
        <div className="detail-assets">
          <div className="d-flex justify-content-between assets-title">
            <h5 style={{ paddingTop: '5px' }}>Relayed Assets12</h5>
            <div className="assets-right">
              <p style={{ paddingTop: '5px' }}>Asset Type</p>
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
          <table className='table table-hover text-center' >
            <thead className="table_head">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Total Supply</th>
                <th>IBC Out</th>
                <th>In Chain Supply</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row_umee_odd">
                <td>
                  <div className="d-flex">
                    <img src='../../../2.png' style={{ height: '40px' }} />
                    <div className="umee_text">
                      <p className="mb-0">UMEE</p>
                      <p className="mb-0">channle-184(transfer)</p>
                    </div>
                  </div>
                </td>
                <td className="table_title">$0.02</td>
                <td className="">191,103,115,821</td>
                <td className="table_date"><b>$ 8153</b></td>
                <td className="table_status">191,103,115,821</td>
              </tr>
              <tr className="row_umee_odd">
                <td>
                  <div className="d-flex">
                    <img src='../../../2.png' style={{ height: '40px' }} />
                    <div className="umee_text">
                      <p className="mb-0">UMEE</p>
                      <p className="mb-0">channle-184(transfer)</p>
                    </div>
                  </div>
                </td>
                <td className="table_title">$0.02</td>
                <td className="table_status">191,103,115,821</td>
                <td className="table_date"><b>$ 8153</b></td>
                <td className="table_status">191,103,115,821</td>
              </tr>
              <tr className="row_umee_odd">
                <td>
                  <div className="d-flex">
                    <img src='../../../3.png' style={{ height: '40px' }} />
                    <div className="umee_text">
                      <p className="mb-0">UMEE</p>
                      <p className="mb-0">channle-184(transfer)</p>
                    </div>
                  </div>
                </td>
                <td className="table_title">$0.02</td>
                <td className="table_status">191,103,115,821</td>
                <td className="table_date"><b>$ 8153</b></td>
                <td className="table_status">191,103,115,821</td>
              </tr>
              <tr className="row_umee_odd">
                <td>
                  <div className="d-flex">
                    <img src='../../../4.png' style={{ height: '40px' }} />
                    <div className="umee_text">
                      <p className="mb-0">UMEE</p>
                      <p className="mb-0">channle-184(transfer)</p>
                    </div>
                  </div>
                </td>
                <td className="table_title">$0.02</td>
                <td className="table_status">191,103,115,821</td>
                <td className="table_date"><b>$ 8153</b></td>
                <td className="table_status">191,103,115,821</td>
              </tr>
              <tr className="row_umee_odd">
                <td>
                  <div className="d-flex">
                    <img src='../../../5.png' style={{ height: '40px' }} />
                    <div className="umee_text">
                      <p className="mb-0">UMEE</p>
                      <p className="mb-0">channle-184(transfer)</p>
                    </div>

                  </div>
                </td>
                <td className="table_title">$0.02</td>
                <td className="table_status">191,103,115,821</td>
                <td className="table_date"><b>$ 8153</b></td>
                <td className="table_status">191,103,115,821</td>
              </tr>
              <tr className="row_umee_odd">
                <td>
                  <div className="d-flex">
                    <img src='../../../4.png' style={{ height: '40px' }} />
                    <div className="umee_text">
                      <p className="mb-0">UMEE</p>
                      <p className="mb-0">channle-184(transfer)</p>
                    </div>
                  </div>
                </td>
                <td className="table_title">$0.02</td>
                <td className="table_status">191,103,115,821</td>
                <td className="table_date"><b>$ 8153</b></td>
                <td className="table_status">191,103,115,821</td>
              </tr>
              <tr className="row_umee_odd">
                <td>
                  <div className="d-flex">
                    <img src='../../../4.png' style={{ height: '40px' }} />
                    <div className="umee_text">
                      <p className="mb-0">UMEE</p>
                      <p className="mb-0">channle-184(transfer)</p>
                    </div>
                  </div>
                </td>
                <td className="table_title">$0.02</td>
                <td className="table_status">191,103,115,821</td>
                <td className="table_date"><b>$ 8153</b></td>
                <td className="table_status">191,103,115,821</td>
              </tr>
              <tr className="row_umee_odd">
                <td>
                  <div className="d-flex">
                    <img src='../../../4.png' style={{ height: '40px' }} />
                    <div className="umee_text">
                      <p className="mb-0">UMEE</p>
                      <p className="mb-0">channle-184(transfer)</p>
                    </div>
                  </div>
                </td>
                <td className="table_title">$0.02</td>
                <td className="table_status">191,103,115,821</td>
                <td className="table_date"><b>$ 8153</b></td>
                <td className="table_status">191,103,115,821</td>
              </tr>
              <tr className="row_umee_odd">
                <td>
                  <div className="d-flex">
                    <img src='../../../4.png' style={{ height: '40px' }} />
                    <div className="umee_text">
                      <p className="mb-0">UMEE</p>
                      <p className="mb-0">channle-184(transfer)</p>
                    </div>
                  </div>
                </td>
                <td className="table_title">$0.02</td>
                <td className="table_status">191,103,115,821</td>
                <td className="table_date"><b>$ 8153</b></td>
                <td className="table_status">191,103,115,821</td>
              </tr>
              <tr className="row_umee_odd">
                <td>
                  <div className="d-flex">
                    <img src='../../../4.png' style={{ height: '40px' }} />
                    <div className="umee_text">
                      <p className="mb-0">UMEE</p>
                      <p className="mb-0">channle-184(transfer)</p>
                    </div>
                  </div>
                </td>
                <td className="table_title">$0.02</td>
                <td className="table_status">191,103,115,821</td>
                <td className="table_date"><b>$ 8153</b></td>
                <td className="table_status">191,103,115,821</td>
              </tr>
              <tr className="row_umee_odd">
                <td>
                  <div className="d-flex">
                    <img src='../../../4.png' style={{ height: '40px' }} />
                    <div className="umee_text">
                      <p className="mb-0">UMEE</p>
                      <p className="mb-0">channle-184(transfer)</p>
                    </div>
                  </div>
                </td>
                <td className="table_title">$0.02</td>
                <td className="table_status">191,103,115,821</td>
                <td className="table_date"><b>$ 8153</b></td>
                <td className="table_status">191,103,115,821</td>
              </tr>
            </tbody>
          </table>
          <div className="table-footer" style={{ background: '#fff' }}>
            <button className="btn m-2 btn-primary">1</button>
            <button className="btn m-2">2</button>
            <button className="btn m-2">3</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assets
