import React,{ useState, useEffect } from 'react';
import DataBody from './DataTable';
import Nav from './Nav';
import API from '../utils/API';
import '../styled/DataArea.css'
import DataAreaContext from "../utils/DataAreaContext";
//add css here

const DataArea = () => {
    const [developerState, setDeveloperState] = useState({
        user: [],
        order: "descend",
        filteredUsers: [],
        headings: [
            { name: "Image", width: "10%", order: "descend" },
            { name: "Name", width: "10%", order: "descend" },
            { name: "Phone", width: "15%", order: "descend" },
            { name: "Email", width: "15%", order: "descend" },
            { name: "DOB", width: "10%", order: "descend" }
        ]
    });


const handleSort = heading => {
    let currentOrder = developerState.headings  
    .filter(elem => elem.name === heading)
    .map(elem => elem.order)
    .toString();

    if(currentOrder === "descend") {
        currentOrder = "ascend"
    } else {
        currentOrder = "descend"
    };



    const compareFnc = (a, b) => {
        if (currentOrder === "ascent") {
        if (a[heading] === undefined) {
            return 1;
        } else if (b[heading] ===  undefined) {
            return -1;
        }
        else if (heading === "Name") {
            return a[heading].first.localeCompare(b[heading].first);
        } else if (heading === "DOB") {
            return a[heading].age - b[heading].age;
        } else {
            return a[heading].localeCompare(b[heading]);
        }
    }     else {
        if (a[heading] === undefined) {
            return 1;
        } else if (b[heading] === undefined) {
            return -1;
        }

        else if (heading === "Name") {
            return b[heading].first.localeCompare(a[heading].first);
        }else if (heading === "DOB") {
            return b[heading].age - a[heading].age;
        }else {
            return b[heading].localeCompare(a[heading]);
        } 
    }
};
const sortedUsers = developerState.filteredUsers. sort(compareFnc);

const updatedHeadings = developerState.headings.map(elem => {
    elem.order = elem.name === heading ? currentOrder : elem.order;
    return elem;
});

setDeveloperState({
    ...developerState,
    filteredUsers: sortedUsers,
    headings: updatedHeadings
});

const handleSearchChange = event => {
    const filter = event.target.value;

    const filteredList = developerState.user.filter(item => {
        let values = item.name.first.toLowerCase() + " " +item.name.last.toLowerCase();
        console.log(filter, values)
        if(values.indexOf(filter.toLowerCase()) !== -1){
            return item
        };
    });
    setDeveloperState({ ...developerState, filteredUsers: filteredList});
};

useEffect(() => {
    API.getUsers().then(results => {
        console.log(result.data.results);
        setDeveloperState({
            ...developerState,
            users: results.data.results,
            filteredUsers: results.data.results
        });
    });
}, []);

return (
    <DataAreaContext.Provider 
    value={{ developerState, handleSearchChange, handleSort }}>
    <Nav />
    <div className="data-area" />
    {developerState.filteredUsers.length > 0 ? 
    <dataTable /> : <div />}
    </DataAreaContext.Provider>
 )};
};  
export default DataArea;