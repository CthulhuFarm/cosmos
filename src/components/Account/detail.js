import React from 'react';
import { Table } from 'react-bootstrap';
import chainumeeIcon from '../IBCRelayers/assets/umee.png'

const AccountDetail = () => {
    return (
        <>
            <div className="container">
                <p className='blockP pt-4'><img src='../../../users.png' /><span className="ms-2">Account DETAIL</span></p>
                <div className="row block bg-white table-responsive" style={{ borderRadius: '14px', overflowX: 'auto' }}>
                    <div className='col-lg-4 bg-dark ps-3 py-4' style={{ color: 'white' }}>
                        <h4>Address</h4>
                        <p>umeevaloper1pn3sx7778dwvdtrp8djstjwpsjq6cr7d7x4lz6</p>
                        <h4>Reward AddressCouple</h4>
                        <p>umee1p0vuk5ve3dyvhydfz6qqr4cwl8u0k3xq7a8rxx</p>
                        <hr />
                        <div className='text-center'>
                            <h4 >QR Code Scanner</h4>
                            <img src='../../../scanQode.png' />
                        </div>
                        <div className='text-center my-4' style={{ backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
                            <p>Total Value</p>
                            <h3>$40.77</h3>
                        </div>
                    </div>
                    <div className='col-lg-8'>
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
                        <Table striped hover>
                            <thead className="table_head">
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Total Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row_umee_even">
                                    <td>
                                        <div className="d-flex">
                                            <img src={chainumeeIcon} style={{ height: '40px' }} />
                                            <div className="umee_text">
                                                <p className='text-blue mb-0'>UMEE</p>
                                                <p className="mb-0">channle-184(transfer)</p>
                                            </div>

                                        </div>
                                    </td>
                                    <td className="table_title">368,121</td>
                                    <td className="table_status">191,103,115,821758</td>
                                    <td className="table_date"><b>$ 8153</b> <i className='text-blue'>$ 0.02</i></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                <div className='row block bg-white table-responsive mt-5' style={{ borderRadius: '14px', overflowX: 'auto' }}>
                    <div className='col-lg-8'>
                        <div className='row mt-3'>
                            <div className='col-lg-3'>
                                <button className='btn btn-primary'>Delegations</button>
                            </div>
                            <div className='col-lg-3'>
                                <button className='btn btn-light'>Unbondings</button>
                            </div>
                            <div className='col-lg-3'>
                                <button className='btn btn-light'>Redelegations</button>
                            </div>
                            <div className='col-lg-3'>
                                <button className='btn btn-light'>Vestings</button>
                            </div>
                        </div>
                        <Table striped hover style={{ fontSize:'16px'}}>
                            <thead className="table_head">
                                <tr>
                                    <th>Validator</th>
                                    <th>Amount</th>
                                    <th>Reward</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row_umee_even">
                                    <td>Auto-compound 🥇 TienThuatToan Capital</td>
                                    <td>1,734.00000</td>
                                    <td><b>3.571523</b> <i className='text-blue'>UMEE</i></td>
                                </tr>
                                <tr className="row_umee_even">
                                    <td>Auto-compound 🥇 TienThuatToan Capital</td>
                                    <td>1,734.00000</td>
                                    <td><b>3.571523</b> <i className='text-blue'>UMEE</i></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-lg-4'>
                        <div className='d-flex justify-content-between pt-4 px-3'>
                            <h3 className='text-blue'>Umee Total</h3>
                            <h4>6546542654</h4>
                        </div>
                        <div className='bg-grey'>
                            <div className='text-center my-1'>
                                <img src='../../../circle.png' />
                            </div>
                            <div className='d-flex justify-content-between pt-3 px-3'>
                                <h4>Available</h4>
                                <h5>479.779432</h5>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between pt-3 px-3'>
                                <h4>Delegatable Vesting</h4>
                                <h5>479.779432</h5>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between pt-3 px-3'>
                                <h4>Unbonding</h4>
                                <h5>479.779432</h5>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between pt-3 px-3'>
                                <h4>Staking Reward</h4>
                                <h5>479.779432</h5>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between pt-3 px-3'>
                                <h4>Delegated</h4>
                                <h5>479.779432</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className='blockP pt-4'><img src='../../../block.png' /><span className="ms-2">TRANSACTION</span></p>
                <div className="block bg-white table-responsive" style={{ borderRadius: '14px', overflowX: 'auto' }}>
                    <p className="pt-3" style={{ width: '100px', marginLeft: '20px' }}><b>Blocks</b></p>
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
                            <tr >
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
                    <div className="table-footer" style={{ background: '#fff' }}>
                        <button className="btn m-2 btn-primary">1</button>
                        <button className="btn m-2">2</button>
                        <button className="btn m-2">3</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDetail;