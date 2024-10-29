import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Worker from "./wrkr_index.jsx";
import Patron from "./patron_index.jsx";
import Form from "./form.jsx";
import RevenueCard from "./component/revenue_card.jsx";
import "./index.css";
import Employs from "./component/wrkrs_card.jsx";

createRoot(document.getElementById("root")).render(
  <Router basename="/wrkr-web/">
    <Routes>
      <Route path="/wrkrcard" element={<Employs />} />
      <Route path="/patron" element={<Patron />} />
      <Route path="/wrkr" element={<Worker />} />
      <Route path="/" element={<Form />} />
      <Route path="/revenue" element={<RevenueCard />} />
    </Routes>
  </Router>
);
