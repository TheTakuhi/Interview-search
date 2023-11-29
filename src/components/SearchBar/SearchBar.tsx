import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"
import {useState} from "react";

const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    let timeoutId;

    const fetchData = async (value) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await response.json();
            const results = json.filter((movie) => {
                return value && movie && movie.name && movie.name.toLowerCase().includes(value);
            });
            setResults(results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleChange = (value) => {
        setInput(value);
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            if (value.length % 2 === 1) {
                fetchData(value);
            }
        }, 300);
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input placeholder="Search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    );
};

export default SearchBar;
