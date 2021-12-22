// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = details
  return (
    <tr>
      <td className="d-flex">
        <img alt={currencyName} src={currencyLogo} className="logoImg mr-2" />
        <p>{currencyName}</p>
      </td>
      <td>{usdValue}</td>
      <td>{euroValue}</td>
    </tr>
  )
}
export default CryptocurrencyItem
