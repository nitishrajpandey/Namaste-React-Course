import { useEffect, useState } from "react";


const useFetchApi = () => {
    const [product, setProduct] = useState(null);

    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products");
        const json = await data.json();
        setProduct(json);

    }
    useEffect(() => {
        fetchData();
    }, [])

    return product;
}


export default useFetchApi; 