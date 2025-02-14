import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import ContentTable from "./components/ContentTable";
import "./App.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
        <header>
          <h2>Transaction Contents</h2>
        </header>
        <ContentTable />
      </div>
    </div>
  );
}

export default App;
