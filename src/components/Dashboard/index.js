import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


import Icon from '../../image/icon.png';
import Icon2 from '../../image/icon2.png';
import Sad from '../../image/sad.png';

import ValIcon1 from '../../image/val-icon1.png';
import ValIcon2 from '../../image/val-icon2.png';
import ValIcon3 from '../../image/val-icon3.png';
import ValIcon4 from '../../image/val-icon4.png';
import ValIcon5 from '../../image/val-icon5.png';
import ValIcon6 from '../../image/val-icon6.png';

import Ellipse from '../../image/Ellipse13.png';
import Time from '../../image/time.png';

import Chart from 'react-apexcharts';


const Dashboard = () => {
    const [series, setSeries] = useState([{
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        color: "#ffd050"
    }, {
        data: [36, 21, 15, 53, 27, 62, 69, 91, 123],
        color: "#14d13c"
    }]);
    const [series2, setSeries2] = useState([{
        data: [120, 111, 98, 67, 49, 45, 34, 23, 10],
        color: "#e76acb"
    }]);
    const [series3, setSeries3] = useState([{
        data: [10, 41, 35, 51, 49, 62, 69],
        color: "#3463fc"
    }, {
        data: [36, 21, 15, 53, 27, 62, 45],
        color: "#ff9262"
    }]);

    const [option, setOption] = useState({
        chart: {
          height: 250,
          width:350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          align: 'left'
        },
        // grid: {
        //   row: {
        //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //     opacity: 0.5
        //   },
        // },
        xaxis: {
          categories: ['Weelk01', 'Weelk02', 'Weelk03', 'Weelk04', 'Weelk05', 'Weelk06', 'Weelk07', 'Weelk08', 'Weelk09','week10'],
        }
    });
    const [option2, setOption2] = useState({
        chart: {
          height: 120,
          width:350,
          type: 'area',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['18:00', '18:20', '18:40', '19:00', '19:20', '19:40', '20:00', '20:20', '20:40','21:00'],
        }
    });
    const [option3, setOption3] = useState({
        chart: {
          height: 120,
          width:350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        }
    });
    return (
        <div>
            <div className='dashboard'>
                <div className='d-flex justify-content-center flex-wrap'>
                    <div className='w-50 min-420'>
                        <div>
                            <img src={Icon} className='icon' />
                            <span className='ps-3'>Umee</span>
                        </div>
                        <div id="chart" className='chart-card mt-3'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <div className='strong'>UMEE</div>
                                    <p className='fs-small'>Block Time 6,012 ms</p>
                                </div>
                                <div className='btn-custom btn btn-primary'>
                                    <span className='fs-12'>Monthly(2021)</span>
                                </div>
                            </div>
                            <Chart options={option} series={series} type="area" height={280} />
                        </div>
                    </div>
                    <div className='d-flex w-50 min-420'>
                        <div><img src={Icon2} className='icon' /></div>
                        <p className='ps-3 pt-1'>Validators Graph</p>
                    </div>
                </div>
                <div className='pt-5'>
                    {/* <div> */}
                        
                        <div className='d-flex justify-content-center flex-wrap'>                            
                            <div id="chart" className=' mt-3 w-60 min-450'>
                                <div className='mx-4'>
                                    <img src={Icon} className='icon' />
                                    <span className='ps-3'>Umee</span>
                                </div>
                                <div className='chart-card mt-3'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <div className='chart-button chat-btn-active'>1D</div>
                                            <div className='chart-button'>7D</div>
                                            <div className='chart-button'>1M</div>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='chart-button chat-btn-active'>price</div>
                                            <div className='chart-button'>volume</div>
                                        </div>
                                    </div>
                                    <Chart options={option2} series={series2} type="area" height={250} width='100%' />
                                </div>
                            </div>
                            <div className='credit-card mt-3 w-20 min-420 mx-4 mt-5'>
                                <div className='d-flex justify-content-between'>
                                    <div><img src={Ellipse} width={30} height={30} className="me-3" /><span className='strong fs-15'>Umee</span></div>
                                    <div><div className='ticket'><span className='text-grey'><img src={Time} width={20} height={20} className="me-2"/>Block Time:</span> 6,001 ms</div></div>
                                </div>
                                <div className='text-center pt-4 strong'>
                                    <h1 className='title'>$0.02</h1>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div><span className='fs-15'>Coingecko</span></div>
                                    <div><div className='ticket text-red'><span className='text-red'>-4.65 %</span> (24H)</div></div>
                                </div>
                                <div className='pt-3'>
                                    <div className='big-ticket d-flex justify-content-between py-2 px-4'>
                                        <div><h6 className='strong'>MarketCap</h6><p className='text-grey mb-0'>$33,564,345</p></div>
                                        <div style={{fontSize:"35px"}}>|</div>
                                        <div><h6 className='strong'>24h Vol</h6><p className='text-grey mb-0'>$359,342</p></div>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            
                <div className='d-flex justify-content-center pt-4 flex-wrap'>
                    <div className='w-50 min-420'>
                        <div>
                            <img src={Icon} className='icon'/> Transaction Graph
                        </div>
                        <div id="chart" className='chart-card mt-3 mx-1'>
                            <div className='d-flex justify-content-between'>
                                <div className='ps-2'>Transaction</div>
                                <div className='d-flex'>
                                    <div class="dropdown">
                                        <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Last 7 days
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Chart options={option3} series={series3} type="area" height={350} width='100%'/>
                        </div>
                    </div>
                    <div className='w-50 min-420'>
                        <div>
                            <img src={Icon} className='icon'/> Price Graph
                        </div>
                        <div id="chart" className='chart-card mt-3 mx-1'>
                            <div className='d-flex justify-content-between'>
                                <div className='ps-2'>Price Table</div>
                                <div className='d-flex'>
                                    <div class="dropdown">
                                        <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Month
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Chart options={option3} series={series3} type="area" height={300} width='100%'/>
                            <div className='d-flex justify-content-between flex-wrap'>
                                <div className='iselector'>1d</div>
                                <div className='iselector'>1w</div>
                                <div className='iselector i-active'>1m</div>
                                <div className='iselector'>3m</div>
                                <div className='iselector'>1y</div>
                                <div className='iselector'>all</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between pt-5'>
                    <div>
                        <div>
                            <img src={Icon} className='icon' />
                            <span className='ps-3'>VALIDATORS</span>
                        </div>
                        <div className='d-flex justify-content-center flex-wrap'>
                            <div className='validator-card mt-3 color-1 mx-2'>
                                <div className='d-flex justify-content-between'>
                                    <div><h5>Height</h5></div>
                                    <div className='ticket'>Last 20s ago</div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between pt-2'>
                                    <h2 className='pt-4'>1,887,170</h2>
                                    <img src={ValIcon1} width={100} height={100}/>
                                </div>
                            </div>
                            <div className='validator-card mt-3 color-2 mx-2'>
                                <h5>Bonded Tokens</h5>
                                <hr />
                                <div className='d-flex justify-content-between pt-3'>
                                    <h2 className='pt-4'>3B / 11B</h2>
                                    <img src={ValIcon2} width={100} height={100}/>
                                </div>
                            </div>
                            <div className='validator-card mt-3 color-3 mx-2'>
                                <h5>Inflation</h5>
                                <hr />
                                <div className='d-flex justify-content-between pt-3'>
                                    <h2 className='pt-4'>14.00%</h2>
                                    <img src={ValIcon3} width={100} height={100}/>
                                </div>
                            </div>
                            <div className='validator-card mt-3 color-4 mx-2'>
                                <h5>Transactions</h5>
                                <hr />
                                <div className='d-flex justify-content-between pt-3'>
                                    <h2 className='pt-4'>17,375,382</h2>
                                    <img src={ValIcon4} width={100} height={100}/>
                                </div>
                            </div>
                            <div className='validator-card mt-3 color-5 mx-2'>
                                <h5>Community Pool</h5>
                                <hr />
                                <div className='d-flex justify-content-between pt-3'>
                                    <h2 className='pt-4'>13M</h2>
                                    <img src={ValIcon5} width={100} height={100}/>
                                </div>
                            </div>
                            <div className='validator-card mt-3 color-6 mx-2'>
                                <h5>Staking APR</h5>
                                <hr />
                                <div className='d-flex justify-content-between pt-3'>
                                    <h2 className='pt-4'>51.55%</h2>
                                    <img src={ValIcon6} width={100} height={100}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={Sad} className='w-100' />
            </div>
            <div className='dashboard'>
                <div className='d-flex justify-content-center flex-wrap'>
                    <div className='w-50 min-420'>
                        <div className='mx-4'>
                            <img src={Icon} className='icon' />
                            <span className='ps-3'>Umee</span>
                        </div>
                        <div className='chart-card mt-3 mx-4'>
                            <p className='fs-15'>Blocks</p>
                            <hr />
                            <table class="table table-striped w-600">
                                <thead>
                                    <tr>
                                    <th scope="col">Height</th>
                                    <th scope="col">Proposer</th>
                                    <th scope="col">Txs</th>
                                    <th scope="col">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='w-50 min-420'>
                        <div className='mx-4'>
                            <img src={Icon} className='icon' />
                            <span className='ps-3'>Transactions</span>
                        </div>
                        <div className='chart-card mt-3 mx-4'>
                            <p className='fs-15'>Transactions</p>
                            <hr />
                            <table class="table table-striped w-600">
                                <thead>
                                    <tr>
                                        <th scope="col">TxHash</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Height</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65421</th>
                                        <td>Delegate</td>
                                        <td>14s ago</td>
                                        <td>6546564</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;