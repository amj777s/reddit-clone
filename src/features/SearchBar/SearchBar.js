import React,{ useState} from "react";
import './SearchBar.css'
import { getSearchResults } from "./seachBarSlice";
import { useDispatch } from "react-redux";

export default function SearchBar() {
    const [search_term, setSearchTerm] = useState('');
    const BASE_URL = 'https://www.reddit.com/search/.json?q=';
    const dispatch = useDispatch();
    
    const formatSearch = (search) => {
        let formatted_term = search.split().join("%20");
        return formatted_term;
    }

    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term)
    }

    const handleEnter = (e) => {
        if (e.key === "Enter"){
            const search = BASE_URL + search_term;
            dispatch(getSearchResults(search));
            setSearchTerm('');
    
        }
    }
    
    
    return (
        <input  className="SearchBar" 
                type="text" 
                placeholder="Search Reddit..."  
                onChange={handleChange} 
                onKeyDown={handleEnter}
                value={search_term}/>
    );
}   