import React from 'react';

const Resturant = () => {

    const handleSearchField = (e) => {
        const searchText = e.target.value;
        console.log(searchText);
    }
    return (
        <div>
            <input onChange={handleSearchField} placeholder="Search meal Here" type="text"></input>
        </div>
    );
};

export default Resturant;