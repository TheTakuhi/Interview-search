import {useState} from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import {User} from "./models/User";

import './App.css'


function App() {
    const [results, setResults] = useState<User[]>([]);

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
