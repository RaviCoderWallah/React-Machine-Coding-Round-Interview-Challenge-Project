import useFetch from "./hooks/useFetch";
import useToggle from "./hooks/useToggle"
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  const [theme, toggleTheme] = useToggle();
  const {width, height} = useWindowSize();
  const { data, loading, error } = useFetch("https://dummyjson.com/posts");

  console.log(data, loading, error);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle</button>
      {theme ? "Light" : "Dark"}
      <h1 style={{fontSize: "4rem", textAlign: "center"}}>{width} X {height}</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default App