import React from "react";

const Detail = () => {
    return (
        <div className="container">
            <p className='blockP pt-4'><img src='../../../block.png' /><b>Details for Block #1853549</b></p>
            <div className="block bg-white container mb-5" style = {{ borderRadius:'14px', fontSize:'14px'}}>
                <div className="row mt-0">
                    <div className="d-flex justify-content-between bg-dark" style = {{ borderTopLeftRadius:'14px', borderTopRightRadius:'14px'}}>
                        <p className= "mt-3 ms-3" style={{ width:'100px', color:'white'}}><strong>Header</strong></p>
                        <div className="d-flex justify-content-end my-2">
                            <button className="me-2 btn btn-primary">Summary</button>
                            <button className="btn btn-basic ms-3" style={{color:'white', borderColor:'white'}}>Json</button>            
                        </div>
                    </div>
                </div>
                <div className='row px-5 pt-4'>
                    <label className='col-md-3'>Chain Id</label>
                    <label className='col-md-1'>:</label>
                    <label className='col-md-7'>umee-1</label>
                </div>
                <hr />
                <div className='row px-5'>
                    <label className='col-md-3'>Height</label>
                    <label className='col-md-1'>:</label>
                    <label className='col-md-7'>1853549</label>
                </div>
                <hr />
                <div className='row px-5'>
                    <label className='col-md-3'>Block Time</label>
                    <label className='col-md-1'>:</label>
                    <label className='col-md-7'>4 days ago (2022-06-23 10:55:34)</label>
                </div>
                <hr />
                <div className='row px-5'>
                    <label className='col-md-3'>Blocl Hash</label>
                    <label className='col-md-1'>:</label>
                    <label className='col-md-7'><p className="text-ellips">A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</p></label>
                </div>
                <hr />
                <div className='row px-5'>
                    <label className='col-md-3'>Chain Id</label>
                    <label className='col-md-1'>:</label>
                    <label className='col-md-7'>umee-1</label>
                </div>
                <hr />
                <div className='row px-5'>
                    <label className='col-md-3'>Number of TX</label>
                    <label className='col-md-1'>:</label>
                    <label className='col-md-7'>13</label>
                </div>
                <hr />
                <div className='row px-5'>
                    <label className='col-md-3'>Gas (used/wanted)</label>
                    <label className='col-md-1'>:</label>
                    <label className='col-md-7'>1003021/2450934</label>
                </div>
                <hr />
                <div className='row px-5'>
                    <label className='col-md-3'>Block Round</label>
                    <label className='col-md-1'>:</label>
                    <label className='col-md-7'>0</label>
                </div>
                <hr />
                <div className='row px-5 pb-3'>
                    <label className='col-md-3'>Proposer</label>
                    <label className='col-md-1'>:</label>
                    <label className='col-md-7'>bitszn</label>
                </div>
            </div>
            <p className='blockP'><img src='../../../block.png' /><b>Transactions</b></p>
            <div className="block bg-white pt-3 table-responsive" style = {{ borderRadius:'14px'}}>
                
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <p className= "mt-2" style={{ width:'100px', marginLeft:'20px'}}><b>Blocks</b></p>
                    </div>
                     
                </div>
                <table className="table table-hover text-center">
                    <thead className='table-dark'>
                        <tr>
                            <th>No</th>
                            <th>Tx Hash</th>
                            <th>Type</th>
                            <th>Result</th>
                            <th>Amount</th>
                            <th>Fee</th>
                            <th>Height</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>delegate</td>
                            <td>success</td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>654233</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>delegate</td>
                            <td>success</td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>654233</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>delegate</td>
                            <td>success</td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>654233</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>delegate</td>
                            <td>success</td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>654233</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>delegate</td>
                            <td>success</td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>654233</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>delegate</td>
                            <td>success</td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>654233</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>delegate</td>
                            <td>success</td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>654233</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>delegate</td>
                            <td>success</td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>0.20000 <i>UMEE</i></td>
                            <td>654233</td>
                            <td>34s ago</td>
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
    )
}

export default Detail;