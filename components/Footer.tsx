import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Zeeshan Ramzan. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/zees123-svg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/zeeshan-ramzan-719845341/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://x.com/Zeeshan56245261?t=yL9Dw9kGac5OzQMxt0D3Pw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="mailto:versatilezeeshan1708@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}