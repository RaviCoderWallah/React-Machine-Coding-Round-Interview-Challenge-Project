import { useEffect, useState } from "react"

const App = () => {
  const [cryptoAmount, setCryptoAmount] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [liveData, setLiveData] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fetchData = async () => {
        const response = await fetch(`https://api.frontendeval.com/fake/crypto/${currency}`);
        const result = await response.json();
        setLiveData(result.value);
      }
      fetchData();
    }, 2000)
    return () => clearInterval(intervalId);
  }, [currency, cryptoAmount])

  const total = liveData * cryptoAmount;

  return (
    <div className="max-w-3xl mx-auto my-8">
      <h1 className="text-2xl font-semibold text-center my-8">Crypto converter</h1>
      <div className="flex flex-col items-center gap-8">
        <div className="flex gap-4">
          <input
            type="number"
            className="outline-1 text-lg p-1"
            placeholder="Enter amount.."
            value={cryptoAmount}
            onChange={(e) => setCryptoAmount(e.target.value)}
          />
          <select
            name=""
            id=""
            className="outline-1 p-2 bg-blue-100"
            onChange={(e) => setCurrency(e.target.value)}
          >
            {
              ["usd", "eur", "gbp", "cny", "jpy"].map((opt) => {
                return <option key={opt} value={opt}>{opt.toUpperCase()}</option>
              })
            }
          </select>
        </div>
        {
          <div className="flex items-center gap-8">
            <p className="text-xl">{total.toFixed(2)} WUC</p>
          </div>
        }

      </div>
    </div>
  )
}

export default App