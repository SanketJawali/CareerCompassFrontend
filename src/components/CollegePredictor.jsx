import React, { useState } from "react";

function CollegePredictor() {
    const [form, setForm] = useState({ location: "", interests: "", field: "" });
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        setResults(data);
        setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-base-100 rounded-md shadow border-2 border-gray-500">
            <h2 className="text-2xl font-bold mb-6 text-center">College Predictor</h2>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                    name="location"
                    placeholder="Location"
                    value={form.location}
                    onChange={handleChange}
                    required
                    className="input input-bordered w-full"
                />
                <input
                    name="interests"
                    placeholder="Interests"
                    value={form.interests}
                    onChange={handleChange}
                    required
                    className="input input-bordered w-full"
                />
                <input
                    name="field"
                    placeholder="Field"
                    value={form.field}
                    onChange={handleChange}
                    required
                    className="input input-bordered w-full"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full md:w-auto"
                >
                    {loading ? "Loading..." : "Predict"}
                </button>
            </form>
            {results.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>College Name</th>
                                <th>Location</th>
                                <th>Category</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((college, i) => (
                                <tr key={i}>
                                    <td className="font-semibold">{college.college_name}</td>
                                    <td>{college.location}</td>
                                    <td>{college.category}</td>
                                    <td>{college.contact_number}</td>
                                    <td>
                                        <a href={`mailto:${college.email}`} className="text-blue-600 underline">
                                            {college.email}
                                        </a>
                                    </td>
                                    <td>
                                        <a href={college.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                            Visit
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {results.length === 0 && !loading && (
                <p className="text-center text-gray-500">No results yet. Fill the form and click Predict.</p>
            )}
        </div>
    );
}

export default CollegePredictor;
