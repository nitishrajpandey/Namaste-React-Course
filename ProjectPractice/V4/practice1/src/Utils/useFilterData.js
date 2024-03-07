// useFilterData.js
import { useState, useEffect } from 'react';

function useFilterData(data) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (data && data.products) {
            setFilteredData(data.products);
        }
    }, [data]);

    const filterByRating = () => {
        // filter the data whose rating greater than 4.6
        const filtered = data.products.filter(product => product.rating > 4.6);
        setFilteredData(filtered);
    };

    const filterBySearch = (searchQuery) => {
        // filter the data with some search condition 
        const newData = data.products.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(newData);
    };

    return { filteredData, filterByRating, filterBySearch };
}

export default useFilterData;




