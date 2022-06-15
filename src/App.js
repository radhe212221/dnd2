import React from 'react'
import Auth from './pages/Auth'
import Site from './pages/Site'
import Dashboard from './pages/Dashboard'
import CRUD from './pages/CRUD'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/preview" element={<Site />} />
                <Route path="/create" element={<CRUD />} />
                <Route path="/edit" element={<CRUD />} />
                <Route path="/update" element={<CRUD />} />
            </Routes>
        </BrowserRouter>
    )
}
