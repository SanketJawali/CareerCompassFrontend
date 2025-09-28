import React, { useState, useEffect, useMemo } from 'react';

// Hardcoded data as a placeholder for your API call
const hardcodedColleges = [
    { id: 1, name: 'Indian Institute of Technology Bombay', location: 'Mumbai, Maharashtra', type: 'Government' },
    { id: 2, name: 'Vellore Institute of Technology', location: 'Vellore, Tamil Nadu', type: '' },
    { id: 3, name: 'National Institute of Technology Tiruchirappalli', location: 'Tiruchirappalli, Tamil Nadu', type: 'Government' },
    { id: 4, name: 'SRM Institute of Science and Technology', location: 'Chennai, Tamil Nadu', type: '' },
    { id: 5, name: 'Indian Institute of Technology Delhi', location: 'New Delhi, Delhi', type: 'Government' },
    { id: 6, name: 'Manipal Institute of Technology', location: 'Manipal, Karnataka', type: '' },
    { id: 7, name: 'College of Engineering, Pune', location: 'Pune, Maharashtra', type: 'Government' },
    { id: 8, name: 'Birla Institute of Technology and Science, Pilani', location: 'Pilani, Rajasthan', type: '' },
];

const CollegeDirectory = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const fetchColleges = () => {
            setLoading(true);

            // --- UNCOMMENT THIS BLOCK TO USE A REAL API ---
            // fetch('/api/colleges')
            //   .then(response => {
            //     if (!response.ok) {
            //       throw new Error('Network response was not ok');
            //     }
            //     return response.json();
            //   })
            //   .then(data => {
            //     setColleges(data);
            //   })
            //   .catch(error => {
            //     console.error("Failed to fetch colleges:", error);
            //     // Optionally, set an error state to display a message to the user
            //   })
            //   .finally(() => {
            //     setLoading(false);
            //   });
            // -----------------------------------------

            // Using hardcoded data for demonstration. Remove this when using the API.
            setTimeout(() => { // Simulate network delay
                setColleges(hardcodedColleges);
                setLoading(false);
            }, 500);
        };

        fetchColleges();
    }, []);

    const processedColleges = useMemo(() => {
        return colleges
            .filter(college => {
                const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    college.location.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesType = filterType === 'All' || college.type === filterType;
                return matchesSearch && matchesType;
            })
            .sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
    }, [colleges, searchTerm, filterType, sortOrder]);

    return (
        <div className="bg-base-200 p-4 md:p-8 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-2 text-center">College Directory</h1>
                <p className="text-center text-base-content/70 mb-8">Browse and search for colleges across the country.</p>

                <div className="form-control mb-4">
                    <div className="input-group justify-center">
                        <input
                            type="text"
                            placeholder="Search by name or location…"
                            className="input input-bordered w-full max-w-lg focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-square btn-primary" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
                    <div className="btn-group">
                        <button className={`btn ${filterType === 'All' ? 'btn-active btn-primary' : ''}`} onClick={() => setFilterType('All')}>All Types</button>
                        <button className={`btn ${filterType === 'Government' ? 'btn-active btn-primary' : ''}`} onClick={() => setFilterType('Government')}>Government</button>
                    </div>
                    <select className="select select-bordered" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="asc">Sort by Name (A-Z)</option>
                        <option value="desc">Sort by Name (Z-A)</option>
                    </select>
                </div>

                {loading ? (
                    <div className="text-center py-10">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {processedColleges.length > 0 ? (
                            processedColleges.map(college => (
                                <div key={college.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    <div className="card-body">
                                        <h2 className="card-title text-lg">{college.name}</h2>
                                        <p className="text-base-content/70">{college.location}</p>
                                        <div className="card-actions justify-end mt-2">
                                            <div className={`badge ${college.type === 'Government' ? 'badge-accent' : 'badge-secondary'}`}>
                                                Government
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-full text-lg text-base-content/60 mt-10">
                                No colleges found matching your criteria.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollegeDirectory;

