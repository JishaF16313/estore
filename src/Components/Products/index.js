import { useState, useEffect } from "react";
import axios from "axios";
const Products = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await response.json();
            setData(data);
        };

        fetchData();

    }, []);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const selectedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    return (
        <>
            <div>
                {selectedData.map(item => (
                    /* render your data here */
                    <li>{item.title}</li>
                ))}
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={startIndex + ITEMS_PER_PAGE >= data.length}>
                    Next
                </button>
            </div>
        </>
    )
}
export default Products