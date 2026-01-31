import React from "react";
import Image from "next/image";

export default function AboutMe() {
  const technologies = [
    ["Python", "TensorFlow/PyTorch", "MLOps", "AWS SageMaker", "React/Node.js"],
    ["Flask/Streamlit", "MongoDB/MySQL", "Docker", "MLflow", "REST APIs"],
  ];

  return (
    <section className="w-full bg-AAprimary min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-AAsecondary font-mono text-xl">01.</span>
          <h2 className="text-3xl font-bold text-theme-primary">About Me</h2>
          <div className="flex-grow h-[1px] bg-theme-muted ml-4"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Text Content */}
          <div className="md:w-2/3 space-y-6 text-theme-secondary">
            <p className="text-lg">
              Hello! My name is Aakashdeep, and I&apos;m a passionate{" "}
              <span className="text-AAsecondary">AI Engineer</span> with a creative twist.
              My journey began with a{" "}
              <span className="text-AAsecondary">Bachelor&apos;s in Mechanical Engineering</span> at
              ITGGU, where I learned to blend analytical thinking with creative problem-solving.
              This unique perspective led me to pursue a parallel degree in{" "}
              <span className="text-AAsecondary">Data Science at IIT Madras</span>, where I
              discovered the perfect fusion of technology and innovation.
            </p>

            <p className="text-lg">
              Beyond the code, I&apos;m an avid hackathon enthusiast who has participated in{" "}
              <span className="text-AAsecondary">100+ hackathons</span>, turning complex
              challenges into innovative solutions. As the{" "}
              <span className="text-AAsecondary">Design Head</span> for our departmental
              newsletter, I&apos;ve led a creative team in crafting compelling visual narratives.
              My role as Corporate Executive at IIT Madras allowed me to secure{" "}
              <span className="text-AAsecondary">₹5 Lakhs in sponsorships</span> while
              organizing <span className="text-AAsecondary">18 successful hackathons</span> for
              Paradox&apos;23.
            </p>

            <p className="text-lg mb-8">
              I believe in creating technology that combines creativity with functionality. 
              Here are some of the technologies I&apos;ve been working with:
            </p>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 gap-4 font-mono">
              {technologies.map((columnTechs, colIndex) => (
                <ul key={colIndex} className="space-y-2">
                  {columnTechs.map((tech, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-AAsecondary">▹</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Image Container */}
          <div className="md:w-1/3 relative group">
            <div className="relative w-full max-w-[300px] mx-auto">
              {/* Border Frame */}
              <div className="absolute inset-0 border-2 border-AAsecondary translate-x-5 translate-y-5
                            transition-transform duration-300 group-hover:translate-x-3
                            group-hover:translate-y-3 rounded image-frame"></div>
              
              {/* Image Wrapper */}
              <div className="relative rounded overflow-hidden aspect-square">
                <Image
                  src="/images/sky.jpg"
                  alt="Profile Image"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded transition-opacity duration-300 group-hover:opacity-80"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-AAsecondary opacity-20 transition-opacity
                              duration-300 group-hover:opacity-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}