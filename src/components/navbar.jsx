import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <button onClick={() => window.location.replace("/")}>RSVP</button>
      <button onClick={() => window.location.replace("/#details")}>
        Details
      </button>
      <button onClick={() => window.location.replace("/#registry")}>
        Registry
      </button>
      <button onClick={() => window.location.replace("/#our-story")}>
        Our Story
      </button>
      <button onClick={() => window.location.replace("/#wedding-party")}>
        Wedding Party
      </button>
    </nav>
  );
}

export default Navbar;
