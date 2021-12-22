import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, trackerData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const modifData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    console.log(modifData)
    this.setState({trackerData: modifData, isLoading: false})
  }

  render() {
    const {isLoading, trackerData} = this.state
    return (
      <div className="bgContainer">
        {isLoading ? (
          <div className="d-flex flex-column align-items-center pt-5">
            <Loader type="Oval" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="pt-5">
            <h1 className="text-light font-weight-bold text-center">
              Cryptocurrency Tracker
            </h1>
            <img
              className="w-100 mb-2"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            />
            <CryptocurrenciesList trackerData={trackerData} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
