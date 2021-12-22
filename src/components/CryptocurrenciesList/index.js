import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {trackerData} = props
  return (
    <table>
      <thead className="theadbar">
        <tr>
          <th className="">Coin Type</th>
          <th>USD</th>
          <th>EURO</th>
        </tr>
      </thead>
      <tbody>
        {trackerData.map(eachItem => (
          <CryptocurrencyItem details={eachItem} key={eachItem.id} />
        ))}
      </tbody>
    </table>
  )
}
export default CryptocurrenciesList
