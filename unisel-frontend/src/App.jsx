import Menubar from "./components/Menubar/Menubar";
import Sidebar from "./components/Sidebar/Sidebar";
import {Routes, Route } from "react-router-dom";
import AddUni from "./pages/AddUni/AddUni";
import ListUni from "./pages/ListUni/ListUni";
import { useState } from "react";


const App = () => {
const [sidebarVisible, setSidebarVisible] = useState(true);

const toggleSidebar=()=>{
  setSidebarVisible(!sidebarVisible);
}



  return (
    <div className="d-flex" id="wrapper">
      <Sidebar sidebarVisible={sidebarVisible} />
      <div id="page-content-wrapper">
        <Menubar toggleSidebar={toggleSidebar} />

        <div className="container-fluid">
          <Routes>
            <Route path="/add" element={<AddUni />} />
            <Route path="/list" element={<ListUni />} />
            <Route path="/" element={<ListUni />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
