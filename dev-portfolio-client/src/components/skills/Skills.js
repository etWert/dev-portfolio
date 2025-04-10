import React, { useState } from 'react';
import "./skills.css";
import skillsData from "./skillsData"

const Skills = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryToggle = (index) => {
    if (openCategory === index) {
      setOpenCategory(null); // סגירת הקטגוריה אם היא כבר פתוחה
    } else {
      setOpenCategory(index); // פתיחת הקטגוריה
    }
  };
console.log(skillsData);

  return (
    <section id="skills">
      <h2>מיומנויות</h2>
      <div className="skills-list">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <div className="category-header" onClick={() => handleCategoryToggle(index)}>
              <h3>{category.title}</h3>
              <span className="expand-icon">{openCategory === index ? '▲' : '▼'}</span>
            </div>
            {openCategory === index && (
              <ul className="skills-list-items">
                {category.items.map((skill, i) => (
                  <li key={i} className="skill-card">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
