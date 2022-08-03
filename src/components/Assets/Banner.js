import currencyIcon from './assets/currency-icon.png'

const Banner = () => {
  return (
    <div className='k-assets-banner'>
      <div className='k-assets-banner-title'>
        <h3 className='cosmos-text text-uppercase cosmos-text-secondary' style={{ fontWeight: '200' }}>assets</h3>
      </div>
      <div className='k-assets-banner-content d-flex' style={{ justifyContent: 'space-between'}}>
        <h3 className='cosmos-text text-uppercase cosmos-text-secondary'>$232,057,144.77</h3>
        <div className='k-assets-banner-content-button'>
          <img src={currencyIcon} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Banner;
