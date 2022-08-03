import { Card } from "react-bootstrap"
import { Row, Col, Table } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import Chart from "./chart";
const proposalItems = [
  { id: "16", headerTitle: "VOTING PERIOD", title: "Increase minimum commission rate to 5%", proposer: "Umeed232", votingStart: "2022-01-2 19:23:32", votingEnd: "2022-01-2 19:23:32", yes: "80", no: "12", abstain: "9" }, 
  { id: "15", headerTitle: "PASSED", title: "Validator DAO Amendments", proposer: "Umeed232", votingStart: "2022-01-2 19:23:32", votingEnd: "2022-01-2 19:23:32", yes: "80", no: "12", abstain: "9" }, 
  { id: "14", headerTitle: "VOTING PERIOD", title: "Increase minimum commission rate to 5%", proposer: "Umeed232", votingStart: "2022-04-2 19:23:32", votingEnd: "2022-01-2 19:23:32", yes: "80", no: "12", abstain: "9" }, 
  { id: "13", headerTitle: "PASSED", title: "Update Enmos Client on Umee", proposer: "Umeed232", votingStart: "2022-01-2 19:23:32", votingEnd: "2022-11-2 19:23:32", yes: "80", no: "12", abstain: "9" }, 
]

const tableItems = [
  { id: "16", title: "increase minium commisions", status: "Passed", votingStart: "2022-02-1 12:12:32", votingEnd: "2022-11-21 13:12:2", deposit: "0.0200" },
  { id: "12", title: "Validator DAO Amedments", status: "Rejected", votingStart: "2022-12-3 12:32:33", votingEnd: "2022-12-22 12:22:22", deposit: "0.00200" },
  { id: "16", title: "increase minium commisions", status: "Passed", votingStart: "2022-02-1 12:12:32", votingEnd: "2022-11-21 13:12:2", deposit: "0.0200" },
  { id: "12", title: "Validator DAO Amedments", status: "Rejected", votingStart: "2022-12-3 12:32:33", votingEnd: "2022-12-22 12:22:22", deposit: "0.00200" },
  { id: "16", title: "increase minium commisions", status: "Passed", votingStart: "2022-02-1 12:12:32", votingEnd: "2022-11-21 13:12:2", deposit: "0.0200" },
  { id: "12", title: "Validator DAO Amedments", status: "Rejected", votingStart: "2022-12-3 12:32:33", votingEnd: "2022-12-22 12:22:22", deposit: "0.00200" },
  { id: "16", title: "increase minium commisions", status: "Passed", votingStart: "2022-02-1 12:12:32", votingEnd: "2022-11-21 13:12:2", deposit: "0.0200" },
  { id: "12", title: "Validator DAO Amedments", status: "Rejected", votingStart: "2022-12-3 12:32:33", votingEnd: "2022-12-22 12:22:22", deposit: "0.00200" },
  { id: "16", title: "increase minium commisions", status: "Passed", votingStart: "2022-02-1 12:12:32", votingEnd: "2022-11-21 13:12:2", deposit: "0.0200" },
  { id: "12", title: "Validator DAO Amedments", status: "Rejected", votingStart: "2022-12-3 12:32:33", votingEnd: "2022-12-22 12:22:22", deposit: "0.00200" },
  { id: "16", title: "increase minium commisions", status: "Passed", votingStart: "2022-02-1 12:12:32", votingEnd: "2022-11-21 13:12:2", deposit: "0.0200" },
  { id: "12", title: "Validator DAO Amedments", status: "Rejected", votingStart: "2022-12-3 12:32:33", votingEnd: "2022-12-22 12:22:22", deposit: "0.00200" },
]

const Proposals = () => {
  return (
    <div className="proposals container">
      <div className="d-flex align-items-center mb-3 mt-5">
          <img className="proposals_icon" src='/images/validators/1.png' />
          <strong className="proposals_title">PROPOSALS</strong>
      </div>
      <Row>
        { proposalItems.map((item, i) => (
          <Col key={i} className="mb-4" md={6}>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="id">#{item.id}</div>
                <div className="header_title_field">
                  <li>
                    {item.headerTitle}
                  </li>
                </div>
              </Card.Header>
              <Card.Body className="d-flex justify-content-between card_body">
                <div style={{width: "55%"}}>
                  <div className="item_title">{item.title}</div>
                  <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                    <strong className="item_text">Proposer</strong>
                    <strong className="item_text">:</strong>
                    <strong className="item_text">{item.proposer}</strong>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                    <strong className="item_text">Voting Start</strong>
                    <strong className="item_text">:</strong>
                    <strong className="item_date">{item.votingStart}</strong>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                    <strong className="item_text">Voting End</strong>
                    <strong className="item_text">:</strong>
                    <strong className="item_date">{item.votingEnd}</strong>
                  </div>
                </div>
                <div className="vertial_divider"></div>
                <div className="d-flex flex-column align-items-start">
                  <div className=""><Chart /></div>
                  <div className="item_text">Most voted on</div>
                  <div className="item_date1">
                    <li>
                      Yes {' '} {item.yes} %
                    </li>
                  </div>
                  <div className="item_date2">
                    <li>
                      No {' '} {item.no} %
                    </li>
                  </div>
                  <div className="item_date3">
                    <li>
                      Abstain {" "} { item.abstain }
                    </li>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="proposals_table">
        <div className="d-flex justify-content-between align-items-center p-3">
            <strong style={{marginLeft: 30}}>Blocks</strong>
        </div>
        <Table responsive hover>
          <thead className="table_head">
              <tr>
                  <th>#ID</th>
                  <th>Title</th>
                  <th>status</th>
                  <th>Voting Start</th>
                  <th>Submit Time</th>
                  <th>Total Deposit</th>
              </tr>
          </thead>
          <tbody>
            { tableItems.map((tableItem, i) => (
                <tr key={i}>
                    <td>
                        <div className="rank_field">#{tableItem.id} </div>
                    </td>
                    <td>
                      <div className="table_title">{tableItem.title}</div>
                    </td>
                    <td>
                      { tableItem.status === "Rejected" ?
                        <div className="table_status_reject">{tableItem.status}</div> :
                        <div className="table_status">{tableItem.status}</div>
                      }
                    </td>
                    <td>
                      <div className="table_date">{tableItem.votingStart}</div> 
                    </td>
                    <td>
                      <div className="table_date">{tableItem.votingEnd}</div>
                    </td>
                    <td>
                      <div className="d-flex">
                        <div className="table_date">
                          {tableItem.deposit}
                        </div>
                        <div className="table_umee">UMEE</div>
                      </div>    
                    </td>
                </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Proposals