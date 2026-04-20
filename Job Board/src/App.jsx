import { useEffect, useState } from "react"

const App = () => {
  const [jobData, setJobData] = useState([]);
  const [jobDataId, setJobDataId] = useState([]);
  const [renderJobCount, setRenderJobCount] = useState(9);

  useEffect(() => {
    const fetchJobId = fetch("https://hacker-news.firebaseio.com/v0/jobstories.json");
    fetchJobId.then((response) => response.json())
      .then((result) => setJobDataId(result));
  }, [])

  useEffect(() => {
    if (jobDataId.length === 0) return

    const currentId = jobDataId.slice(0, renderJobCount);

    async function fetchJobDetails() {
      const fetchPromises = currentId.map(async (id) => {
        const fetchJobData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return fetchJobData.json();
      })

      const result = await Promise.all(fetchPromises);
      setJobData(result);
    }

    fetchJobDetails();

  }, [renderJobCount, jobDataId])

  const handleLoadMore = () => {
    setRenderJobCount((prev) => prev + 6);
  }

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-semibold">Job Board</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-8">
        {
          jobData.length == 0 && <div>
            <h2 className="text-4xl font-semibold">Loading...</h2>
          </div>
        }
        {
          jobData.length > 0 && jobData.map(({ id, time, title, url }) => {
            return <a href={url} target="_blank">
              <div key={id} className="outline-1 bg-blue-50 shadow-md min-h-34 p-4 flex flex-col gap-2">
                <h2 className="text-2xl text-purple-600 font-semibold">{title.split(")")[0]}</h2>
                <p className="text-base text-gray-600">{title.split(")")[1]}</p>
                <p className="text-right">
                  {
                    new Date(time * 1000).toLocaleDateString()
                  }
                </p>
              </div>
            </a>
          })
        }

      </div>
      {
        (renderJobCount < jobDataId.length) && (jobData.length > 0) && 
        <div className="flex justify-center">
          <button className="px-2 py-1 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer" onClick={handleLoadMore}>Load More..</button>
        </div>
      }

    </div>
  )
}

export default App