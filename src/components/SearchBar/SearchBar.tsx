import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"
import {useState} from "react";

const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(json => {
            const results = json.filter((movie) => {
                return value && movie && movie.name && movie.name.toLowerCase().includes(value);
            });
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input placeholder="Search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    );
};

export default SearchBar;