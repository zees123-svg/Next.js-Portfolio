export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-600">
              <div className="w-full h-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white text-5xl sm:text-6xl md:text-7xl">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">Passionate Developer & Creative Thinker</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              I'm a full-stack developer with 6+ months of experience building web applications. 
              I specialize in React, Next.js, and modern JavaScript frameworks.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              When I'm not coding, you can find me contributing to open-source projects or exploring new technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div>
                <p className="font-semibold text-sm sm:text-base">Name:</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Zeeshan Ramzan</p>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">Email:</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base break-all">versatilezeeshan1708@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">Location:</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Okara, Pakistan</p>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">Availability:</p>
                <p className="text-green-600 text-sm sm:text-base">Available for work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}