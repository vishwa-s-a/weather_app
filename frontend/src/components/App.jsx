import React, { useState , useEffect } from 'react';

function SearchComponent() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [initialFetchDone, setInitialFetchDone] = useState(false);

    const fetchData = (query) => {
        fetch(`http://127.0.0.1:8000/api/${query}`)
            .then((response) => response.json())
            .then((data) => {
                let temp=[data["name"],data["main"]["temp"],data["main"]["humidity"],data["weather"][0]["description"]]
                if (Array.isArray(temp)) {
                    // console.log(temp)
                    setResults(temp);
                  } else {
                    console.error('Data is not an array:', data);
                    // Handle the case where data is not an array
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        // Only fetch 'vellore' data once when the component initially renders
        if (!initialFetchDone) {
            fetchData('vellore');
            setInitialFetchDone(true);
        }
    }, [initialFetchDone]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(query);
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <ul>
                {
                    results.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchComponent;
