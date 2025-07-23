import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements card-style" id="achievements">
      <h2>Achievements</h2>
      <ul className="achievement-list">
        <li>
          <h4>Academic Excellence</h4>
          <p>Secured 3rd rank in 1st semester and 2nd rank consistently in 2nd, 3rd, and 4th semesters.</p>
        </li>
        {/* Add more achievements as needed */}
      </ul>
    </section>
  );
};

export default Achievements;
