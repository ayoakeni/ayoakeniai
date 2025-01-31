import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Navbar from './components/nav';
import About from './pages/about';
import AssignmentUploader from './pages/assignment';
import ViewAssignment from './pages/viewAssignment';
import Contact from './pages/contact';
import ScrollToTopButton from './components/scrotoTop';
import WhatsappChatBox from './components/whatsapp';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/assignment" element={<AssignmentUploader />} />
        <Route path="/assignments/:id" element={<ViewAssignment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton />
      <WhatsappChatBox />
      <footer style={{ textAlign: "center", padding: "10px", fontSize: "14px", color: "#666" }}>
        © {currentYear} ayoakeni.ai. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
