import React, { useState } from "react";

const gapData = {
    engineer: {
        steps: [
            {
                title: "Complete 10th grade",
                description: "Focus on Mathematics and Science. Build strong basics for future studies.",
                resources: [
                    { name: "NCERT Science", link: "https://ncert.nic.in/textbook.php" }
                ]
            },
            {
                title: "Choose Science stream (PCM) in 12th",
                description: "Pick Physics, Chemistry, and Mathematics. These are mandatory for engineering entrance exams.",
                resources: [
                    { name: "CBSE Curriculum", link: "https://cbseacademic.nic.in/curriculum.html" }
                ]
            },
            {
                title: "Prepare for engineering entrance exams",
                description: "Start preparing for JEE Main, JEE Advanced, or state CETs. Use online platforms and coaching if needed.",
                resources: [
                    { name: "JEE Main Official", link: "https://jeemain.nta.nic.in/" },
                    { name: "NTA Portal", link: "https://nta.ac.in/" }
                ]
            },
            {
                title: "Apply for B.Tech/B.E programs",
                description: "Fill out applications for colleges via government portals and counseling.",
                resources: [
                    { name: "JoSAA Counseling", link: "https://josaa.nic.in/" }
                ]
            },
            {
                title: "Participate in internships and projects",
                description: "Gain practical experience through internships and college projects.",
                resources: [
                    { name: "Internshala", link: "https://internshala.com/" }
                ]
            },
            {
                title: "Consider higher studies or campus placements",
                description: "Prepare for GATE, CAT, or campus interviews for jobs or PG programs.",
                resources: [
                    { name: "GATE Official", link: "https://gate.iitkgp.ac.in/" }
                ]
            }
        ]
    },
    medical: {
        steps: [
            {
                title: "Complete 10th grade",
                description: "Focus on Biology, Chemistry, and Physics. Build a strong foundation for medical studies.",
                resources: [
                    { name: "NCERT Biology", link: "https://ncert.nic.in/textbook.php" }
                ]
            },
            {
                title: "Choose Science stream (PCB) in 12th",
                description: "Pick Physics, Chemistry, and Biology. These are mandatory for medical entrance exams.",
                resources: [
                    { name: "CBSE Curriculum", link: "https://cbseacademic.nic.in/curriculum.html" }
                ]
            },
            {
                title: "Prepare for medical entrance exams",
                description: "Start preparing for NEET and other medical entrance exams. Use online platforms and coaching if needed.",
                resources: [
                    { name: "NEET Official", link: "https://neet.nta.nic.in/" },
                    { name: "NTA Portal", link: "https://nta.ac.in/" }
                ]
            },
            {
                title: "Apply for MBBS/BDS/BAMS/BHMS programs",
                description: "Fill out applications for medical colleges via government portals and counseling.",
                resources: [
                    { name: "Medical Counseling Committee", link: "https://mcc.nic.in/" }
                ]
            },
            {
                title: "Internships and clinical rotations",
                description: "Gain practical experience through internships and clinical rotations during your medical course.",
                resources: [
                    { name: "AIIMS Internships Info", link: "https://www.aiims.edu/en.html" }
                ]
            },
            {
                title: "Consider PG (MD/MS) or start practice",
                description: "Prepare for PG entrance exams or start medical practice after registration.",
                resources: [
                    { name: "PG Medical Entrance", link: "https://nbe.edu.in/" }
                ]
            }
        ]
    }
};

function CareerMap() {
    const [selected, setSelected] = useState("engineer");
    const info = gapData[selected];

    return (
        <div className="bg-base-200 p-4 md:p-8 min-h-screen">
            <div className="card w-full max-w-4xl mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold mb-6">Career Mapping</h2>

                    <div className="form-control w-full max-w-xs mb-8">
                        <label className="label">
                            <span className="label-text text-lg">Select Your Desired Career Path:</span>
                        </label>
                        <select
                            value={selected}
                            onChange={e => setSelected(e.target.value)}
                            className="select select-primary select-bordered"
                        >
                            <option value="engineer">Software Engineer</option>
                            <option value="lawyer">Corporate Lawyer</option>
                            <option value="medical">Doctor (MBBS)</option>
                        </select>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-primary">{info.title} Roadmap</h3>
                        <div className="relative pl-4"> {/* Timeline container */}
                            {info.steps.map((step, i) => (
                                <div key={i} className="relative pb-10">
                                    {/* The vertical connecting line */}
                                    {i < info.steps.length - 1 && (
                                        <div className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-base-300"></div>
                                    )}
                                    <div className="relative flex items-start space-x-5">
                                        {/* The step number circle */}
                                        <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-content font-bold">
                                            {i + 1}
                                        </div>
                                        {/* The content card for the step */}
                                        <div className="card w-full bg-base-200 shadow-md">
                                            <div className="card-body">
                                                <h4 className="card-title text-xl">{step.title}</h4>
                                                <p>{step.description}</p>
                                                {step.resources && step.resources.length > 0 && (
                                                    <div className="mt-4">
                                                        <h5 className="font-semibold mb-2">Recommended Resources:</h5>
                                                        <div className="flex flex-wrap items-start gap-2">
                                                            {step.resources.map((r, j) => (
                                                                <a
                                                                    key={j}
                                                                    href={r.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="btn btn-sm btn-outline btn-accent"
                                                                >
                                                                    {r.name}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CareerMap;
