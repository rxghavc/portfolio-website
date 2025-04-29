import React from 'react';
import './About.css';
import { FaDna, FaFlask, FaAtom, FaSquareRootAlt, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const subjects = [
    {
      icon: <FaDna />,
      title: "Biology",
      boards: ["AQA", "Edexcel", "OCR"],
      levels: "GCSE/A-Level Tutors Available"
    },
    {
      icon: <FaFlask />,
      title: "Chemistry",
      boards: ["AQA", "Edexcel", "OCR"],
      levels: "GCSE/A-Level Tutors Available"
    },
    {
      icon: <FaAtom />,
      title: "Physics",
      boards: ["AQA", "Edexcel", "OCR"],
      levels: "GCSE/A-Level Tutors Available"
    },
    {
      icon: <FaSquareRootAlt />,
      title: "Maths",
      boards: ["AQA", "Edexcel", "OCR"],
      levels: "GCSE/A-Level Tutors Available"
    },
    {
      icon: <FaLaptopCode />,
      title: "Computer Science",
      boards: ["AQA", "Edexcel", "OCR"],
      levels: "GCSE/A-Level Tutors Available"
    }
  ];

  return (
    <section className="about" id="about">
      <h2>Subjects we cover</h2>
      <p>We will expand to more exam boards being covered so stay tuned through our platforms for more information!</p>
      <p><br /></p>
      <div className="subject-cards">
        {subjects.map((subject, index) => (
          <div className="card fade-in" key={index}>
            <i>{subject.icon}</i>
            <h3>{subject.title}</h3>
            <p>Exam Boards Taught:</p>
            {subject.boards.map((board, i) => (
              <p key={i}>{board}</p>
            ))}
            <p>{subject.levels}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;