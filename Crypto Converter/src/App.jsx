import { useEffect, useState } from "react"

const App = () => {
  const [cryptoAmount, setCryptoAmount] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [liveData, setLiveData] = useState(null);
  const [isIncreased, setIsIncreased] = useState(false);
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fetchData = async () => {
        const response = await fetch(`https://api.frontendeval.com/fake/crypto/${currency}`);
        const result = await response.json();
        setLiveData(result.value);
        
        let preVal = window.sessionStorage.getItem("Prev Value");
        
        if (preVal !== null) {
          // We have a previous value to compare
          preVal = parseFloat(preVal);
          let difference = Math.abs(result.value - preVal);
          setDiff(difference.toFixed(2));
          
          // Check if increased or decreased
          if (result.value > preVal) {
            setIsIncreased(true);
          } else {
            setIsIncreased(false);
          }
        }
        
        // Store current value as previous for next comparison
        window.sessionStorage.setItem("Prev Value", result.value);
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
            <p className={`text-xl ${diff !== null ? (isIncreased ? "text-green-500" : "text-red-500") : "text-gray-400"}`}>
              {diff !== null ? `${isIncreased ? "↑" : "↓"} ${diff}` : "—"}
            </p>
          </div>
        }

      </div>
    </div>
  )
}

export default App