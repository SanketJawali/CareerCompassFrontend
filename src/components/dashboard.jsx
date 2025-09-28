import CareerChat from "./CareerChat";
import { Link } from "react-router";

function Dashboard() {
    // Base styles for all the navigation "button" divs for consistency.
    // This includes styling for flex centering, cursor, transitions, and hover/active feedback.
    const navButtonStyles = `
    flex items-center justify-center 
    text-center font-bold text-lg md:text-xl 
    rounded-lg shadow-md cursor-pointer 
    transition-all duration-300 ease-in-out 
    transform hover:scale-105 hover:shadow-xl active:scale-100
  `;

    return (
        <div className="grid grid-cols-2 md:grid-cols-8 grid-rows-4 md:grid-rows-5 gap-4 m-4">
            {/* Each navigation block is now a Link component. */}
            {/* The Link component itself is styled to be the clickable, colored block. */}
            <Link
                to="/career-quiz"
                className={`${navButtonStyles} col-start-1 row-start-1 bg-sky-300 text-sky-800 md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2 p-4 md:p-10`}
            >
                Career Assessment
            </Link>

            <Link
                to="/notifier"
                className={`${navButtonStyles} col-start-2 row-start-1 bg-violet-300 text-violet-800 md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-3 p-4 md:p-10`}
            >
                Notifier
            </Link>

            <Link
                to="/college-directory"
                className={`${navButtonStyles} col-start-1 row-start-2 bg-teal-300 text-teal-800 md:col-start-5 md:row-start-1 md:col-span-2 md:row-span-2 p-4 md:p-10`}
            >
                College Directory
            </Link>

            <Link
                to="/college-predictor"
                className={`${navButtonStyles} col-start-2 row-start-2 bg-cyan-300 text-cyan-800 md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-3 p-4 md:p-10`}
            >
                College Predictor
            </Link>

            <Link
                to="/career-map"
                className={`${navButtonStyles} col-start-1 row-start-3 bg-emerald-300 text-emerald-800 md:col-start-3 md:row-start-4 md:col-span-2 md:row-span-2 p-4 md:p-10`}
            >
                Career Mapping
            </Link>

            <Link
                to="/gap-filler"
                className={`${navButtonStyles} col-start-2 row-start-3 bg-amber-300 text-amber-800 md:col-start-5 md:row-start-3 md:col-span-2 md:row-span-2 p-4 md:p-10`}
            >
                Education Gap Filler
            </Link>

            <Link
                to="/college-finder"
                className={`${navButtonStyles} col-start-1 row-start-4 bg-rose-300 text-rose-800 md:col-start-5 md:row-start-5 md:col-span-2 md:row-span-1 p-4 md:p-10`}
            >
                College Finder
            </Link>

            {/* This div containing the CareerChat component is left untouched as requested. */}
            <div className="col-start-2 row-start-4 md:col-start-7 md:row-start-1 md:col-span-2 md:row-span-5 p-0">
                <CareerChat />
            </div>
        </div>
    );
}

export default Dashboard;
