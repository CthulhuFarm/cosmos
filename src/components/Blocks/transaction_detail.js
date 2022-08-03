import React from "react";

const TransacionDetail = () => {
    return (
        <div className="container">
            <p className='blockP pt-4'><img src='../../../block.png' /><b>TRANSACTION DETAILS</b></p>
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
                    <label className='col-md-7'>
                        <p className="text-ellips">A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</p>
                    </label>
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
            
            <p className='blockP'><img src='../../../block.png' /><b>Modify Widraw Address</b></p>
            <div className="table-responsive table-border">
                <p className= "px-3 py-3 mb-0 bg-dark" style={{ color:'white'}}><strong>Messages</strong></p>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <td className="ps-4">Delegator Address</td>
                            <td>umeesadfjkhjkjsjkadfjksdfasdf</td>
                        </tr>
                        <tr>
                            <td className="ps-4">Withraw Address</td>
                            <td>umeesadfjkhjkjsjkadfjksdfasdf</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TransacionDetail;