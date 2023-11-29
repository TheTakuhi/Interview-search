import './App.css'
import SearchBar from "./components/SearchBar";
import {useState} from "react";
import SearchResults from "./components/SearchResults";

function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
      </div>
    </>
  )
}

export default App
