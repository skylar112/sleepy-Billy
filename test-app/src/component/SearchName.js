import React, { userContext } from "react";
import "../styles/SearchName.css"
import DataAreaContext from "../Util/DataAreaContext";

const SearchName = () => {
    const context = userContext(DataAreaContext);
    return(
        <div className="searchbox">
            <div className="input-group" />
            <div className="input-group-prepend">
                <span className="input-group-text" id="">Search</span>
            </div>
            <input className="form-control mr-sm-2"
            type="search"
            placeholder="name"
            aria-label="Search"
            onChange={e => context.handleSearchChange(e)}
            />
        </div>
    );
};
export default SearchName;