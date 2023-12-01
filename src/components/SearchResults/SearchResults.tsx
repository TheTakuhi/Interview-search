import SearchResult from "../SearchResult";
import {User} from "../../models/User";

import "./SearchResults.css"
import {FC} from "react";

interface SearchResultsProps {
    results: User[];
}

const SearchResults: FC<SearchResultsProps> = ({ results }) => {
    return (
        <div className="results-list">
            {
                results.map((result: User, id: number) => {
                    return <SearchResult result={result} key={id}/>
                })
            }
        </div>
    );
};

export default SearchResults;
