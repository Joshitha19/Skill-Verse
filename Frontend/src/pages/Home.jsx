// D:\Skill-Verse\Frontend\src\pages\Home.jsx
import React from "react";

export default function Home() {
  return (
    <div id="root">
      <nav>
        <button className="signin">Sign In</button>
        <button className="signup">Sign Up</button>
      </nav>
      <div className="flex-grow">
        <h1>Welcome to SkillVerse</h1>
        <p>Find your perfect skill match 🔥</p>
      </div>
    </div>
  );
}
