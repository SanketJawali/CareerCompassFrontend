import React, { useState } from 'react';

// --- Hardcoded Quiz Data ---
// This structure allows for easy expansion with more sections or question types.
const quizData = [
    {
        id: 1,
        title: 'Artistic & Creative',
        questions: [
            {
                id: 'q1',
                text: 'How much do you enjoy activities like drawing, painting, sculpting, or digital art?',
                type: 'rating',
            },
            {
                id: 'q2',
                text: 'When you listen to a new song, what are you most likely to focus on?',
                type: 'multiple-choice',
                options: ['The emotional feel and the rhythm', 'The lyrics and the story being told', 'The specific instruments and musical structure', 'I just enjoy it without much analysis'],
            },
            {
                id: 'q3',
                text: 'How appealing is a career in creative writing, journalism, or filmmaking to you?',
                type: 'rating',
            },
        ],
    },
    {
        id: 2,
        title: 'Scientific & Analytical',
        questions: [
            {
                id: 'q4',
                text: 'Solving complex logic puzzles or brain-teasers is something I find:',
                type: 'multiple-choice',
                options: ['Extremely satisfying and energizing', 'Fun for a little while', 'A bit frustrating but I push through', 'Generally boring and tedious'],
            },
            {
                id: 'q5',
                text: 'How interested are you in understanding the fundamental principles of how things work (e.g., computers, engines, the human body)?',
                type: 'rating',
            },
            {
                id: 'q6',
                text: 'The idea of working with large sets of data, charts, and spreadsheets to find patterns sounds:',
                type: 'multiple-choice',
                options: ['Fascinating', 'Manageable and useful', 'Unappealing', 'Completely overwhelming'],
            },
        ],
    },
    {
        id: 3,
        title: 'Social & Communicative',
        questions: [
            {
                id: 'q7',
                text: 'How comfortable are you with public speaking or presenting your ideas to a group?',
                type: 'rating',
            },
            {
                id: 'q8',
                text: 'In a team project, you naturally gravitate towards being the:',
                type: 'multiple-choice',
                options: ['Leader who organizes the team and delegates tasks', 'Creative mind who brainstorms innovative ideas', 'Mediator who helps resolve conflicts and ensures harmony', 'Specialist who focuses deeply on their assigned tasks'],
            },
            {
                id: 'q9',
                text: 'A career involving teaching, counseling, sales, or community management is something you would find:',
                type: 'multiple-choice',
                options: ['Very fulfilling', 'Somewhat interesting', 'Draining', 'My worst nightmare'],
            },
        ],
    },
    {
        id: 4,
        title: 'Practical & Hands-On',
        questions: [
            {
                id: 'q10',
                text: 'How much do you enjoy building, fixing, or assembling things with your hands?',
                type: 'rating',
            },
            {
                id: 'q11',
                text: 'Which of these hands-on activities sounds most enjoyable for a free weekend?',
                type: 'multiple-choice',
                options: ['Gardening, landscaping, or working with plants', 'Cooking or baking a new, complex recipe from scratch', 'Working on a car, bike, or other machinery', 'Building a piece of furniture or a model kit'],
            },
            {
                id: 'q12',
                text: 'A career that requires you to be physically active and work outdoors (e.g., a park ranger, a construction manager, an archaeologist) sounds:',
                type: 'multiple-choice',
                options: ['Energizing and ideal', 'Interesting, but maybe not as a long-term plan', 'Too physically demanding', 'The opposite of what I want in a job'],
            },
        ],
    },
];

const InterestQuiz = () => {
    const [currentSection, setCurrentSection] = useState(1);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    const handleSectionClick = (sectionId) => {
        setCurrentSection(sectionId);
    };

    const goToNextSection = () => {
        if (currentSection < quizData.length) {
            setCurrentSection(currentSection + 1);
        }
    };

    const goToPrevSection = () => {
        if (currentSection > 1) {
            setCurrentSection(currentSection - 1);
        }
    };

    const handleSubmit = () => {
        console.log("Final Answers:", answers);
        setShowResults(true); // Show the results modal
    };

    const activeSection = quizData.find(section => section.id === currentSection);
    const totalQuestions = quizData.reduce((acc, section) => acc + section.questions.length, 0);
    const answeredQuestions = Object.keys(answers).length;
    const progress = (answeredQuestions / totalQuestions) * 100;


    return (
        <div className="p-4 md:p-8 bg-base-200 min-h-screen">
            <div className="card w-full max-w-4xl mx-auto bg-base-100 shadow-xl">
                <div className="card-body p-6 md:p-10">
                    <h1 className="card-title text-3xl md:text-4xl font-bold mb-4 text-center">Student Interest Assessment</h1>
                    <p className="text-center mb-6 text-base-content/70">Discover your passions and potential career paths.</p>

                    {/* Stepper Navigation */}
                    <ul className="steps w-full mb-8">
                        {quizData.map(section => (
                            <li
                                key={section.id}
                                className={`step ${currentSection >= section.id ? 'step-primary' : ''} cursor-pointer`}
                                onClick={() => handleSectionClick(section.id)}
                            >
                                <span className="hidden md:inline break-words">{section.title}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Progress Bar */}
                    <div className="mb-8 px-2">
                        <progress className="progress progress-success w-full" value={progress} max="100"></progress>
                        <p className="text-center text-sm mt-1">{answeredQuestions} of {totalQuestions} questions answered</p>
                    </div>

                    {/* Current Section Title */}
                    <h2 className="text-2xl font-semibold mb-6 text-accent-focus">{activeSection.title}</h2>

                    {/* Questions */}
                    <div className="space-y-8">
                        {activeSection.questions.map((q, index) => (
                            <div key={q.id} className="form-control p-4 border rounded-lg shadow-sm bg-base-200/30 overflow-hidden">
                                <label className="label">
                                    <span className="label-text text-lg font-medium whitespace-normal">{index + 1}. {q.text}</span>
                                </label>

                                {q.type === 'rating' && (
                                    <div className="rating rating-lg rating-half mt-2">
                                        <input type="radio" name={q.id} className="rating-hidden" checked={!answers[q.id]} onChange={() => { }} />
                                        {[...Array(10)].map((_, i) => (
                                            <input
                                                key={i}
                                                type="radio"
                                                name={q.id}
                                                className={`bg-amber-400 mask mask-star-2 ${i % 2 === 0 ? 'mask-half-1' : 'mask-half-2'}`}
                                                checked={answers[q.id] === `${(i / 2) + 0.5}`}
                                                onChange={() => handleAnswerChange(q.id, `${(i / 2) + 0.5}`)}
                                            />
                                        ))}
                                    </div>
                                )}

                                {q.type === 'multiple-choice' && (
                                    <div className="flex flex-col space-y-2 mt-2">
                                        {q.options.map(option => (
                                            <label key={option} className="label cursor-pointer justify-start gap-4 p-3 rounded-lg hover:bg-base-300/50">
                                                <input
                                                    type="radio"
                                                    name={q.id}
                                                    className="radio radio-accent"
                                                    checked={answers[q.id] === option}
                                                    onChange={() => handleAnswerChange(q.id, option)}
                                                />
                                                <span className="label-text whitespace-normal">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="card-actions justify-between mt-10">
                        <button className="btn btn-outline" onClick={goToPrevSection} disabled={currentSection === 1}>
                            Previous
                        </button>
                        {currentSection === quizData.length ? (
                            <button className="btn btn-primary" onClick={handleSubmit}>Submit Quiz</button>
                        ) : (
                            <button className="btn btn-secondary" onClick={goToNextSection}>
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Results Modal */}
            <input type="checkbox" id="results-modal" className="modal-toggle" checked={showResults} onChange={() => { }} />
            <div className="modal modal-bottom sm:modal-middle" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl">Quiz Submitted!</h3>
                    <p className="py-4">Thank you for completing the assessment. Your responses have been recorded.</p>
                    <p className="font-semibold">Here's a summary of your answers:</p>
                    <div className="mockup-code my-4 max-h-60 overflow-y-auto">
                        <pre><code>{JSON.stringify(answers, null, 2)}</code></pre>
                    </div>
                    <div className="modal-action">
                        <button className="btn" onClick={() => setShowResults(false)}>Close</button>
                    </div>
                </div>
                <label className="modal-backdrop" onClick={() => setShowResults(false)}>Close</label>
            </div>
        </div>
    );
};

export default InterestQuiz;

