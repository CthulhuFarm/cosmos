import React from "react";
import { Link } from "react-router-dom";

const Transaction = () => {
    return (
        <>
        <div className="container">
            <p className='blockP pt-4'><img src='../../../block.png' /><span className="ms-2">TRANSACTION DETAIL</span></p>
            <div className="block bg-white pt-3 table-responsive" style = {{ borderRadius:'14px', overflowX: 'auto'}}>
                <div className="row">
                    <div className="d-flex justify-content-between block-header">
                        <p className= "mt-2" style={{ width:'100px', marginLeft:'20px'}}><b>Blocks</b></p>
                        <div className="text-center">
                            <Link to="/blocks"><button className="btn btn-light">Blocks</button></Link>
                            <Link to="/transaction"><button className="btn btn-secondary">Transactions</button></Link>   
                        </div>
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
                            <td><p className='text-circle'>1</p></td>
                            <td><p className='text-blue'>344,818,012</p></td>
                            <td><span className='text-type'>delegate</span></td>
                            <td><p className="text-success">success</p></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td><p className='text-blue'>654233</p></td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td><p className='text-circle'>2</p></td>
                            <td><p className='text-blue'>344,818,012</p></td>
                            <td><span className='text-type'>delegate</span></td>
                            <td><p className="text-success">success</p></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td><p className='text-blue'>654233</p></td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td><p className='text-circle'>3</p></td>
                            <td><p className='text-blue'>344,818,012</p></td>
                            <td><span className='text-type'>delegate</span></td>
                            <td><p className="text-canceled">canceled</p></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td><p className='text-blue'>654233</p></td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td><p className='text-circle'>4</p></td>
                            <td><p className='text-blue'>344,818,012</p></td>
                            <td><span className='text-type'>delegate</span></td>
                            <td><p className="text-canceled">canceled</p></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td><p className='text-blue'>654233</p></td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td><p className='text-circle'>5</p></td>
                            <td><p className='text-blue'>344,818,012</p></td>
                            <td><span className='text-type'>delegate</span></td>
                            <td><p className="text-success">success</p></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td><p className='text-blue'>654233</p></td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td><p className='text-circle'>6</p></td>
                            <td><p className='text-blue'>344,818,012</p></td>
                            <td><span className='text-type'>delegate</span></td>
                            <td><p className="text-success">success</p></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td><p className='text-blue'>654233</p></td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td><p className='text-circle'>7</p></td>
                            <td><p className='text-blue'>344,818,012</p></td>
                            <td><span className='text-type'>delegate</span></td>
                            <td><p className="text-success">success</p></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td><p className='text-blue'>654233</p></td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td><p className='text-circle'>8</p></td>
                            <td><p className='text-blue'>344,818,012</p></td>
                            <td><span className='text-type'>delegate</span></td>
                            <td><p className="text-success">success</p></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td>0.20000 <i className='text-blue'>UMEE</i></td>
                            <td><p className='text-blue'>654233</p></td>
                            <td>34s ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Transaction;