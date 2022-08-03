import React from "react";
import './Index.css';
import symbolIcon from './assets/para.png';

import Item from "./Item";

function Parameters() {

  const mint = {
    title: 'Minting Parameters',
    datas: [
      {
        title: 'Blocks per Year',
        content: '4,360,000',
        color: '#71367B'
      },
      {
        title: 'Goal Banded',
        content: '33.00%',
        color: '#F5A826'
      },
      {
        title: 'Inflation Max',
        content: '14.00%',
        color: '#02D0FF'
      },
      {
        title: 'Inflation Min',
        content: '7.00%',
        color: '#F5A826'
      },
      {
        title: 'Inflation Rate Change',
        content: '1',
        color: '#71367B'
      },
      {
        title: 'Mint Denom',
        content: 'Umee',
        color: '#FF6259'
      }
    ]
  }

  const staking = {
    title: 'Staking Parameters',
    datas: [
      {
        title: 'Unbonding Time',
        content: '14 days',
        color: '#71367B'
      },
      {
        title: 'Max Validators',
        content: '100',
        color: '#F5A826'
      },
      {
        title: 'Max Entries',
        content: '7',
        color: '#02D0FF'
      },
      {
        title: 'Historical Entries',
        content: '10,000',
        color: '#F5A826'
      },
      {
        title: 'Bond Denom',
        content: 'uumee',
        color: '#71367B'
      }
    ]
  }

  const governance = {
    title: 'Governance Parameters',
    datas: [
      {
        title: 'Min Deposit',
        content: '10,000 UMEE',
        color: '#71367B'
      },
      {
        title: 'Max Deposit Period',
        content: '14 days',
        color: '#F5A826'
      },
      {
        title: 'Voting Period',
        content: '5 days',
        color: '#02D0FF'
      },
      {
        title: 'Quorum',
        content: '40.00%',
        color: '#F5A826'
      },
      {
        title: 'Threshold',
        content: '50.00%',
        color: '#71367B'
      },
      {
        title: 'Veto Threshold',
        content: '33.40%',
        color: '#FF6259'
      }
    ]
  }

  const distribution = {
    title: 'Distribution Parameters',
    datas: [
      {
        title: 'Base Proposer Reward',
        content: '1.00%',
        color: '#71367B'
      },
      {
        title: 'Bonus Proposer Reward',
        content: '4.00%',
        color: '#F5A826'
      },
      {
        title: 'Community Tax',
        content: '2.00%',
        color: '#02D0FF'
      },
      {
        title: 'Withdraw Addr Enabled',
        content: 'true',
        color: '#F5A826'
      }
    ]
  }

  const slashing = {
    title: 'Slashing Parameters',
    datas: [
      {
        title: 'Signed Blocks Window',
        content: '10,000',
        color: '#71367B'
      },
      {
        title: 'Min Signed Per Window',
        content: '5.00%',
        color: '#F5A826'
      },
      {
        title: 'Downtime Jail Duration',
        content: '600s',
        color: '#02D0FF'
      },
      {
        title: 'Slash Fraction Doublesign',
        content: '5.00%',
        color: '#F5A826'
      },
      {
        title: 'Slash Fraction Downtime',
        content: '0.01%',
        color: '#71367B'
      }
    ]
  }

  return(
    <div className="container">
      <div className="title my-3">
        <img src={symbolIcon} alt='symbolIcon' style={{height: '30px'}} />
        <h4 className="title-text">PARAMETERS</h4>
      </div>
      <Item data={mint} />
      <Item data={staking} />
      <Item data={governance} />
      <Item data={distribution} />
      <Item data={slashing} />
    </div>
  )
}

export default Parameters;