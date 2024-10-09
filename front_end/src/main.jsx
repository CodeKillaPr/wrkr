import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Worker from "./wrkr_index.jsx";
import Patron from "./patron_index.jsx";
import Form from "./form.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/patron" element={<Patron />} />
        <Route path="/wrkr" element={<Worker />} />
        <Route path="/" element={<Form />} />
      </Routes>
    </Router>
  </StrictMode>
);
