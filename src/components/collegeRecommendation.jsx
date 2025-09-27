import React, { useState } from 'react';

// Mock data that simulates an API response.
const mockApiResponse = [
    {
        college_name: 'Government College of Engineering, Pune',
        district: 'Pune',
        category: 'Engineering',
        contact_number: '020-25507000',
        email: 'contact@gcoep.ac.in',
        website: 'https://www.gcoep.ac.in',
    },
    {
        college_name: 'Fergusson College',
        district: 'Pune',
        category: 'Arts & Science',
        contact_number: '020-67656000',
        email: 'info@fergusson.edu',
        website: 'https://www.fergusson.edu',
    },
    {
        college_name: 'Symbiosis College of Arts and Commerce',
        district: 'Pune',
        category: 'Arts & Commerce',
        contact_number: '020-25653903',
        email: 'contact@symbiosiscollege.edu.in',
        website: 'https://symbiosiscollege.edu.in',
    },
];

// A mock fetch function to simulate a network request.
const fetchRecommendations = (location, interest) => {
    console.log(`Fetching colleges for location: ${location} and interest: ${interest}`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockApiResponse);
        }, 2000); // Simulate a 2-second network delay
    });
};


function CollegeFinder() {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setShowResults(true); // Switch to the results view

        const location = event.target.location.value;
        const interest = event.target.interest.value;

        const data = await fetchRecommendations(location, interest);
        setResults(data);
        setIsLoading(false);
    };

    const handleBack = () => {
        setShowResults(false);
        setResults([]);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">
            {!showResults ? (
                // --- FORM SECTION ---
                <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h2 className="card-title justify-center">Find Your Match</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                type="text"
                                name="location"
                                placeholder="e.g., Pune"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Interest</span>
                            </label>
                            <select name="interest" className="select select-bordered w-full" defaultValue="">
                                <option disabled value="">Pick your interest</option>
                                <option>Engineering</option>
                                <option>Arts & Science</option>
                                <option>Arts & Commerce</option>
                                <option>Medical</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                // --- RESULTS SECTION ---
                <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Top Recommended Colleges</h2>
                        {isLoading ? (
                            <div className="text-center p-10">
                                <span className="loading loading-lg loading-spinner text-primary"></span>
                                <p>Finding the best colleges for you...</p>
                            </div>
                        ) : (
                            <div>
                                <ul className="menu p-0">
                                    {results.map((college, index) => (
                                        <li key={index} className="mb-2 border rounded-box border-base-300 p-4">
                                            <div className="flex flex-col items-start w-full">
                                                <strong className="text-lg">{college.college_name}</strong>
                                                <p className="text-sm text-base-content/70">{college.district}</p>
                                                <div className="divider my-2"></div>
                                                <p><span className="font-semibold">Category:</span> {college.category}</p>
                                                <p><span className="font-semibold">Contact:</span> {college.contact_number}</p>
                                                <p><span className="font-semibold">Email:</span> {college.email}</p>
                                                <p><span className="font-semibold">Website:</span>
                                                    <a href={college.website} target="_blank" rel="noopener noreferrer" className="link link-primary ml-1">
                                                        Visit Website
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="card-actions justify-end mt-4">
                                    <button onClick={handleBack} className="btn btn-ghost">
                                        &larr; Back to Search
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CollegeFinder;
