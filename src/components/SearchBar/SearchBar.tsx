import {FC, useState} from "react";
import {FaSearch} from "react-icons/fa"
import {User} from "../../models/User";

import "./SearchBar.css"

interface SearchBarProps {
    setResults: React.Dispatch<React.SetStateAction<User[]>>;
}

const SearchBar: FC<SearchBarProps> = ({ setResults }) => {
    const [input, setInput] = useState("");
    let timeoutId: number;

    const fetchData = async (value: string) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await response.json();
            const results = json.filter((user: User) => {
                return value && user && user.name && user.name.toLowerCase().includes(value);
            });
            setResults(results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleChange = (value: string) => {
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
