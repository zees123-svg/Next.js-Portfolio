import { skills } from "@/lib/data";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

const iconMap: { [key: string]: any } = {
  html: SiHtml5,
  css: SiCss,
  tailwind: SiTailwindcss,
  javascript: SiJavascript,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-20 bg-white dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          My <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={index}
                className="flex flex-col items-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {Icon && <Icon className="text-3xl sm:text-4xl text-blue-600 mb-2 sm:mb-3" />}
                <span className="font-semibold text-base sm:text-lg text-center">{skill.name}</span>
                <div className="w-full mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div className="bg-linear-to-r from-blue-600 to-purple-600 h-1.5 sm:h-2 rounded-full" style={{ width: `${skill.level}%` }} />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.level}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}