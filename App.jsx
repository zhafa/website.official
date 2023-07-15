import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Frame1 from "./components/Frame1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|frame-1)">
          <Frame1 {...frame1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const frame1Data = {
    kanan: "https://anima-uploads.s3.amazonaws.com/projects/64b1ab0c875e5cbdc119f47d/releases/64b2ada969a82661e57b3be5/img/kanan.png",
    title: "PROFILE",
    place1: "HOME",
    ellipse1: "https://anima-uploads.s3.amazonaws.com/projects/64b1ab0c875e5cbdc119f47d/releases/64b2ada969a82661e57b3be5/img/ellipse-1@2x.png",
    icon: "icon",
    group2: "https://anima-uploads.s3.amazonaws.com/projects/64b1ab0c875e5cbdc119f47d/releases/64b2ada969a82661e57b3be5/img/group-2@2x.png",
    group3: "https://anima-uploads.s3.amazonaws.com/projects/64b1ab0c875e5cbdc119f47d/releases/64b2ada969a82661e57b3be5/img/group-3@2x.png",
    place2: "MORE",
    kiri: "https://anima-uploads.s3.amazonaws.com/projects/64b1ab0c875e5cbdc119f47d/releases/64b2ada969a82661e57b3be5/img/kiri.png",
    tengah: "https://anima-uploads.s3.amazonaws.com/projects/64b1ab0c875e5cbdc119f47d/releases/64b2ada969a82661e57b3be5/img/tengah-.png",
};

