import React from "react";
import WorkCard from "./WorkCard";

// Example data
const projects = [
  {
    image: "/images/project1.jpg",
    title: "E-Commerce Platform",
    description: "Built scalable MERN stack e-commerce system with admin panel.",
    tech: "React, Node.js, MongoDB"
  },
  {
    image: "/images/project2.jpg",
    title: "Enterprise CRM",
    description: "Spring Boot based CRM system for a mid-size enterprise.",
    tech: "Java, Spring Boot, MySQL"
  },
  {
    image: "/images/project3.jpg",
    title: "Automation Dashboard",
    description: "Python and React-based dashboard automating workflow.",
    tech: "Python, React, APIs"
  }
];

const OurWork = () => {
  return (
    <section className=" bg-slate-50 dark:bg-slate-950 py-24" id="our-work">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-sky-400">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We deliver high-quality software solutions that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <WorkCard
              key={i}
              image={p.image}
              title={p.title}
              description={p.description}
              tech={p.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
