'use client'
import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // Inline styles for demonstration
  const styles = {
    text: {
    },
    readOrHide: {
      cursor: "pointer",
      color: "blue",
      // Add media queries directly in the style object
      "@media (max-width: 768px)": {
        fontSize: "14px", // Smaller font size on mobile devices
      },
      "@media (min-width: 769px)": {
        fontSize: "16px", // Larger font size on laptops/desktops
      },
    },
  };

  return (
    <p className="text" style={styles.text}>
      {isReadMore ? text.slice(0, 100) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        style={styles.readOrHide}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Content = () => {
  // Container styles with media queries
  const containerStyle = {
    color: "white",
    padding: "20px",
    "@media (max-width: 768px)": {
      fontSize: "14px", // Smaller font size for mobile
    },
    "@media (min-width: 769px)": {
      fontSize: "18px", // Larger font size for laptop/desktop
    },
  };

  return (
    <div className="container" style={containerStyle}>
      <ReadMore>
      Who This Course Is For: Beginners with no prior programming experience.
        Programmers transitioning from other languages. Intermediate Python
        developers aiming to deepen their expertise. Professionals seeking
        practical Python applications in data analysis, web development, and
        automation. Course Structure: Module 1: Python Fundamentals Introduction
        to Python: History and Applications Setting Up Your Development
        Environment Variables, Data Types, and Basic Operators Control Flow: If
        Statements, Loops, and Iteration Functions: Definition, Parameters,
        Return Values Python Data Structures: Lists, Tuples, Dictionaries, Sets
        Working with Files: Reading, Writing, and Exception Handling Practical
        Exercises and Mini-Projects Module 2: Intermediate Python
        Object-Oriented Programming: Classes, Inheritance, Polymorphism Advanced
        Data Handling: JSON, XML, and CSV Parsing Understanding Iterators and
        Generators Decorators and Context Managers Working with External
        Libraries and APIs Introduction to Testing in Python: Unit Tests and
        Test-Driven Development Intermediate Projects: Building Command-Line
        Applications Module 3: Advanced Python Concepts Advanced OOP Concepts:
        MetaClasses, Abstract Base Classes Concurrency and Parallelism: Threads,
        Processes, AsyncIO Networking with Python: Sockets, Requests, Beautiful
        Soup Introduction to Data Science and Machine Learning with Python Web
        Development with Django: Models, Views, Templates Building REST APIs
        with Flask Advanced Projects: Web Applications, Data Analysis Reports
        Module 4: Real-World Python Applications Automating Everyday Tasks with
        Python Data Analysis and Visualization with Pandas and Matplotlib
        Introduction to Machine Learning with Scikit-Learn Natural Language
        Processing with NLTK and SpaCy Building Interactive Web Applications
        with Django and Flask Deploying Python Applications to Production
        Learning Outcomes: Upon completing this course, you will: Understand
        Python syntax and programming concepts. Be proficient in using Python
        for various applications, including web development, data analysis,
        machine learning, and automation. Have developed a portfolio of projects
        demonstrating your skills in real-world applications. Be prepared to use
        Python professionally, contributing to projects or starting your own.
        Course Features: Over 100 hours of video lectures and tutorials.
        Hands-on projects and coding exercises. Downloadable resources and
        lecture notes. Access to a community forum for discussion and support.
        Lifetime access to course materials. Certificate of completion. Enroll
        now to start your journey to becoming a Python programming expert,
        equipped with the knowledge and skills to tackle any coding challenge
        and excel in the tech industry.
      </ReadMore>
    </div>
  );
};

export default Content;
