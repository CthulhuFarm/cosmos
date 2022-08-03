import { Col, Row, Button, Table, Container, Pagination } from 'react-bootstrap'

import validatorIcon from './validator-icon.png'
import userGroupIcon from './user-group.png'

import './validator.detail.style.css'

const pagenationItems = [1,2,3]
const ValidatorTablePanel = (props) => {
  return (
    <div className='validator-detail-table'>
      <div className="block bg-white pt-3" style={{ borderRadius:'14px'}}>
          <div className="row">
              <div className="d-flex justify-content-between">
                  <p className= "mt-2 ms-3"><b>{props.title}</b></p>
                  <div className="justify-content-end">
                    <p className='cosmos-text cosmos-text-disabled'>Total : 184,318 blocks</p>           
                  </div>
              </div>
          </div>
          <table className="table table-hover text-center">
              <thead className='table-dark'>
                  <tr>
                      <th>Height</th>
                      <th>Block Hash</th>
                      <th>Txs</th>
                      <th>Time</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>344,818,012</td>
                      <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                      <td>15</td>
                      <td>34s ago</td>
                  </tr>
                  <tr>
                      <td>344,818,012</td>
                      <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                      <td>15</td>
                      <td>34s ago</td>
                  </tr>
                  <tr>
                      <td>344,818,012</td>
                      <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                      <td>15</td>
                      <td>34s ago</td>
                  </tr>
                  <tr>
                      <td>344,818,012</td>
                      <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                      <td>15</td>
                      <td>34s ago</td>
                  </tr>
                  <tr>
                      <td>344,818,012</td>
                      <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                      <td>15</td>
                      <td>34s ago</td>
                  </tr>
              </tbody>
          </table>
          <div className='validator-detail-table-pagination'>
            <Pagination>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
            </Pagination>
          </div>
      </div>
    </div>
  )
}
const UptimeItem = () => {
  return (
    <div style={{ display: 'flex' }}>
      <span className='validator-detail-uptime-item'></span>
    </div>
  )
}
const ValidatorUptimePanel = () => {
  return (
    <div className="validator-detail-uptime-panel">
      <div className="block bg-white pt-3" style = {{ borderRadius:'14px', height: '100%'}}>
          <div className="row validator-detail-uptime-panel-header">
              <div className="d-flex justify-content-between">
                  <p className= "mt-2 ms-3"><b>Uptime</b></p>
                  <div className="justify-content-end">
                    <p className='cosmos-text cosmos-text-disabled'>Last 100 Blocks</p>
                  </div>
              </div>
          </div>
          <div className='validator-detail-uptime-panel-content'>
            {new Array(50).fill(1).map((_, key) => <UptimeItem key={key} />)}
          </div>
      </div>
    </div>
  )
}
const Validator2 = () => {
  return (
    <Container>
      <div className="validator-detail">
        <div className="validator-detail-title d-flex">
          <img src={validatorIcon} alt="" />
          <h3 className="cosmos-text cosmos-text-secondary" style={{ textTransform: 'uppercase' }}>validator details</h3>
        </div>
        <Row className='p-12'>
          <div className="validator-detail-intro">
            <Row className='validator-detail-intro-title cosmos-bg-secondary'>
              <Col className="d-flex">
                <img src={userGroupIcon} alt='' width='90px' height='90px' />
                <div className=''>
                  <h5 className='cosmos-text'>Deluminators</h5>
                  <p className='cosmos-text'>Operator Address</p>
                  <p className='cosmos-text'>umeevaloper1w06vvkmtz62we48d3qmq5p22tj5evmw5zpmrdv</p>
                </div>
              </Col>
              <Col className='d-flex' style={{ justifyContent: 'space-between' }}>
                <div className=''>
                  <h5 className='cosmos-text' style={{ visibility: 'hidden' }}>Deluminators</h5>
                  <p className='cosmos-text'>Address</p>
                  <p className='cosmos-text cosmos-text-info'>umeevaloper1w06vvkmtz62we48d3qmq5p22tj5evmw5zpmrdv</p>
                </div>
                <div>
                  <Button>Active</Button>
                </div>
              </Col>
            </Row>
            <Row className='validator-detail-intro-content'>
              <div>
                <Table>
                  <tr>
                    <td>website</td>
                    <td style={{ width: '100px', textAlign: 'right'}}>:</td>
                    <td className='cosmos-text-info'>www.stake.fish/en/</td>
                  </tr>
                  <tr>
                    <td>commission</td>
                    <td style={{ width: '100px', textAlign: 'right'}}>:</td>
                    <td>4.00%</td>
                  </tr>
                  <tr>
                    <td>uptime</td>
                    <td style={{ width: '100px', textAlign: 'right'}}>:</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Voting Power</td>
                    <td style={{ width: '100px', textAlign: 'right'}}>:</td>
                    <td>9.07%(251,791,657.122610 <span className='cosmos-text-info'>UMEE</span> )</td>
                  </tr>
                  <tr>
                    <td>Bonded Height</td>
                    <td style={{ width: '100px', textAlign: 'right'}}>:</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Self Bonded</td>
                    <td style={{ width: '100px', textAlign: 'right'}}>:</td>
                    <td>1.000000<span className='cosmos-text-info'>UMEE</span>(0.00%)</td>
                  </tr>
                  <tr>
                    <td>Details</td>
                    <td style={{ width: '100px', textAlign: 'right'}}>:</td>
                    <td>We are the leading staking service provider for blockchain projects. Join our community to help secure networks and earn rewards. We know staking.</td>
                  </tr>
                </Table>
              </div>
            </Row>
          </div>
        </Row>
        <Row>
          <Col className='validator-detail-proposed-blocks'>
            <ValidatorTablePanel title='Proposed Blocks' />
          </Col>
          <Col className='validator-detail-uptime'>
            <ValidatorUptimePanel />
          </Col>
        </Row>
        <Row>
          <Col className='validator-detail-delegators'>
            <ValidatorTablePanel title='Delegators' />
          </Col>
          <Col className='validator-detail-power-events'>
            <ValidatorTablePanel title='Power Events' />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Validator2
