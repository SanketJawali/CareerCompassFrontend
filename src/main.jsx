import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import './App.css'
import Dashboard from "./components/dashboard";
import Homepage from "./components/homepage";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Homepage />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    </BrowserRouter>,
);
