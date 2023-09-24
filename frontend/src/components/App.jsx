import React, { useState, useEffect } from 'react';

function SearchComponent() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [initialFetchDone, setInitialFetchDone] = useState(false);

    const fetchData = (query) => {
        fetch(`http://127.0.0.1:8000/api/${query}`)
            .then((response) => response.json())
            .then((data) => {
                let temp = [data["name"], data["main"]["temp"], data["main"]["humidity"], data["weather"][0]["description"], data["weather"][0]["icon"] ]
                setResults(temp);
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

    let img_link="https://source.unsplash.com/600x900/?"+results[3]
    let imageURL="http://openweathermap.org/img/wn/"+results[4]+"@2x.png";
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date().toLocaleDateString('en-US', options);

    return (
        <div>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <div class="card shadow-lg text-white text-center border-0">
                            <img src={img_link} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <form onSubmit={handleSubmit}>
                                    <div class="input-group mb-4 w-75 mx-auto">
                                        <input 
                                            type="text" class="form-control" 
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon2"

                                        />
                                        <button  type="submit" class="input-group-text" id="basic-addon2"><i className='fas fa-search'></i></button>
                                    </div>
                                </form>
                                <div className='bg-dark bg-opacity-50 py-3 rounded'>
                                    <h5 class="card-title">{results[0]}</h5>
                                    <p class="card-text lead">
                                        {today}
                                    </p>
                                    <hr className='mb-0'/>
                                    <img src={imageURL} alt="..."/>
                                    <h1 className='fw-bolder mb-2'>{results[1]} &deg;C</h1>
                                    <p className='lead fw-bolder mb-0'>{results[3]}</p>
                                    <div className='row mt-3'>
                                       <div className='col-md-6 pe-0'>
                                            <img src="humidity.png" className='humid flex-fill' alt="humidity.png"/> 
                                       </div>
                                       <div className='col-md-6 d-flex align-items-center justify-content-center ps-0 '>
                                            <p className='lead fw-bolder mb-0'>humidity: {results[2]}%</p>
                                       </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchComponent;
