import React from "react";
import "./Search.css";

const Search = () => {
    return (
        <div className="body" >
            <div className="input-group">
                <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                />
                <button type="button" className="btn btn-outline-primary" >
                    Search
                </button>
            </div>
        </div>
    );
};
export default Search;