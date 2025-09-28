import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import './App.css'
import Dashboard from "./components/dashboard";
import LoginSignupPages from "./components/homepage";
import Quiz from "./components/quiz";
import CollegePredictor from "./components/CollegePredictor"
import CareerChat from "./components/CareerChat";
import CollegeFinder from "./components/CollegeFinder";
import CollegeDirectory from "./components/collegeDirectory";
import CareerMap from "./components/CareerMap";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<LoginSignupPages />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="career-quiz" element={<Quiz />} />
                <Route path="college-predictor" element={<CollegePredictor />} />
                <Route path="college-finder" element={<CollegeFinder />} />
                <Route path="career-chat" element={<CareerChat />} />
                <Route path="college-directory" element={<CollegeDirectory />} />
                <Route path="career-map" element={<CareerMap />} />
            </Route>
        </Routes>
    </BrowserRouter>,
);
