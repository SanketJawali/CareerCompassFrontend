import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CollegeFinder = () => {
    const [colleges, setColleges] = useState([]);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        // Mock fetch for demonstration. Replace with your actual API call.
        const mockColleges = [
            { college_name: 'Indian Institute of Technology Bombay', location: 'Mumbai, Maharashtra', latitude: 19.1334, longitude: 72.9154 },
            { college_name: 'Indian Institute of Technology Delhi', location: 'New Delhi, Delhi', latitude: 28.5456, longitude: 77.1926 },
            { college_name: 'Indian Institute of Science', location: 'Bengaluru, Karnataka', latitude: 13.0227, longitude: 77.5667 },
            { college_name: 'Vellore Institute of Technology', location: 'Vellore, Tamil Nadu', latitude: 12.9717, longitude: 79.1594 },
        ];
        setColleges(mockColleges);
        // fetch("http://localhost:5000/api/colleges")
        //   .then(res => res.json())
        //   .then(data => setColleges(data));
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!search.trim()) {
            setSelected(null);
            return;
        };
        // Mock search for demonstration. Replace with your actual API call.
        const found = colleges.find(c => c.college_name.toLowerCase().includes(search.toLowerCase()));
        if (found) {
            setSelected(found);
        } else {
            alert("College not found!");
            setSelected(null);
        }
        // const res = await fetch(`http://localhost:5000/api/college-location?name=${encodeURIComponent(search)}`);
        // const data = await res.json();
        // if (!data.error) setSelected(data);
        // else setSelected(null);
    };

    const center = selected
        ? [selected.latitude, selected.longitude]
        : [22.9734, 78.6569]; // Default center

    const zoom = selected ? 13 : 5;

    const filteredColleges = search.trim() === ''
        ? colleges
        : colleges.filter(c =>
            c.college_name.toLowerCase().includes(search.toLowerCase()) ||
            c.location.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <div className="card w-full h-[85vh] flex-col md:flex-row bg-base-100 overflow-hidden">
            {/* Left Panel: Search and List */}
            <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col bg-base-200/50 p-4 space-y-4">
                <div className='flex-none'>
                    <h2 className="card-title text-2xl mb-4">📍 College Finder</h2>
                    <form onSubmit={handleSearch} className="form-control w-full">
                        <div className="input-group flex items-center flex-col justify-center">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by name..."
                                className="input input-bordered w-full focus:outline-none"
                            />
                            <button type="submit" className="btn btn-primary m-2">
                                Search
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </form>
                </div>

                {/* College List - Hidden on mobile */}
                <div className="hidden md:block flex-grow overflow-y-auto">
                    <ul className="menu bg-base-100 rounded-box p-2">
                        {filteredColleges.length > 0 ? (
                            filteredColleges.map((c, i) => (
                                <li key={i} onClick={() => setSelected(c)}>
                                    <a className={selected?.college_name === c.college_name ? 'active' : ''}>
                                        <div>
                                            <p className="font-semibold">{c.college_name}</p>
                                            <p className="text-xs opacity-60">{c.location}</p>
                                        </div>
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li className="p-4 text-center text-sm opacity-70">No results found.</li>
                        )}
                    </ul>
                </div>
            </div>

            {/* Right Panel: Map */}
            <div className="w-full h-full flex-grow">
                <MapContainer
                    key={`${center[0]}-${center[1]}`} // Add key to force re-render on center change
                    center={center}
                    zoom={zoom}
                    style={{ height: "100%", width: "100%" }}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {colleges.map((c, i) =>
                        c.latitude && c.longitude ? (
                            <Marker key={i} position={[c.latitude, c.longitude]}>
                                <Popup>
                                    <strong>{c.college_name}</strong><br />{c.location}
                                </Popup>
                            </Marker>
                        ) : null
                    )}
                </MapContainer>
            </div>
        </div>
    );
};

export default CollegeFinder;
