
import React from "react";
import "./Achievements.css";
import pythonIcon from "../../assets/python-logo.svg";
import leetcodeIcon from "../../assets/leetcode-logo.svg";

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <h2>Achievements</h2>
      <div className="achievements-container">
        <div className="achievement-box">
          <h3>Python Essential 1 Badge</h3>
          <p>
            Earned through Cisco Networking Academy in collaboration with OpenEDG Python Institute, demonstrating foundational Python programming skills.
          </p>
        </div>
        <div className="achievement-box">
          <h3>LeetCode – 150+ Problems Solved</h3>
          <p>
            Solved 150+ algorithmic problems on LeetCode focusing on arrays, trees, graphs, and dynamic programming.
          </p>
        </div>
      </div>
    </section>
  );
}
