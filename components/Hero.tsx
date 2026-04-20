"use client";

import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const roles = ["Zeeshan Ramzan", "a Web Developer", "a Next.js Developer", "a Web Designer"];
  
  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, roles]);
  
  useEffect(() => {
    setText(roles[index].substring(0, subIndex));
  }, [subIndex, index, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient wrap-break-word">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            I build exceptional and accessible digital experiences that solve real-world problems.
          </p>

          {/* Buttons - stack on small screens */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 text-center"
            >
              View Work
            </a>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-5 sm:gap-6">
            <a href="https://github.com/zees123-svg" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
              <FiGithub size={22} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://linkedin.com/in/zeeshan-ramzan-719845341/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
              <FiLinkedin size={22} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://x.com/Zeeshan56245261?t=yL9Dw9kGac5OzQMxt0D3Pw&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
              <FiTwitter size={22} className="sm:w-6 sm:h-6" />
            </a>
            <a href="mailto:versatilezeeshan1708@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
              <FiMail size={22} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}