import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Plans from './components/Plans';
import Footer from './components/Footer';
import Login from './Login';
import DashboardStarter from './dashboards/DashboardStarter';
import DashboardProfessional from './dashboards/DashboardProfessional';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Benefits />
            <Plans />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-starter" element={<DashboardStarter />} />
        <Route path="/dashboard-professional" element={<DashboardProfessional />} />
      </Routes>
    </Router>
  );
}
