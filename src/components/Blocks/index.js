import React from "react";
import { Link } from "react-router-dom";

const Block = () => {

    return (
        <div className="container">
            <p className='blockP pt-4'><img src='../../../block.png' /><span className="ms-2">BLOCKS</span></p>
            <div className="block bg-white pt-3" style = {{ borderRadius:'14px'}}>
                <div className="row">
                    <div className="d-flex justify-content-between block-header">
                        <p className= "mt-2" style={{ width:'100px', marginLeft:'20px'}}><b>Blocks</b></p>
                        <div className="text-center">
                            <Link to="/blocks"><button className="btn btn-secondary">Blocks</button></Link>
                            <Link to="/transaction"><button className="btn btn-light">Transactions</button></Link>          
                        </div>
                    </div>
                </div>
                <table className="table table-hover text-center">
                    <thead className='table-dark'>
                        <tr>
                            <th>No</th>
                            <th>Height</th>
                            <th>Block Hash</th>
                            <th>Porposer</th>
                            <th>Txs</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>344,818,012</td>
                            <td>A09F4AF9B45CFE31C01FB0FD44741063E166B7FDB</td>
                            <td>Mandragora</td>
                            <td>15</td>
                            <td>34s ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Block;