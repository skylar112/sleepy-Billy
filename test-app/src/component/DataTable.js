import React, { useContext } from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";
import DataAreaContext from "../Util/DataAreaContext";

const DataTable = () => {
    const context = useContext(DataAreaContext);

    return(
<div className="datatable mt-5">
    <table id="table" className="table table-striped table-dover table-condensed">
        <thread>
        <tr>
        {context.developerState.headings.map(({ name, width }) => {
        return(
        <th
            className="col"
            key={name}
            style={{ width }}
            onClick={() => {
            context.handleSort(name);
        }}>
            {name}
            <span className="pointer" />
        </th>);
        })}
        </tr>
        </thread>
    <DataBody />
    </table>
</div> 
    )
}

export default DataTable;
