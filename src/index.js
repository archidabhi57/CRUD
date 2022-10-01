import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "/Home";
import Match from "/Match";
import MatchDetail from "/MatchDetail";
import Layout from "/Layout";
import AddMatch from "/AddMatch";
import EditMatchs from "/EditMatchs";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/matchies" element={<Match />}></Route>
          <Route path="/match/:id" element={<MatchDetail />}></Route>
          <Route path="/matchies/add" element={<AddMatch />}></Route>
          <Route path="/EditMatchs/:id" element={<EditMatchs />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
