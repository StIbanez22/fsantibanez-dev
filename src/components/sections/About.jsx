import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Typescript",
    "Next.js",
 ];

    const backendSkills = [
    "Node.js",
    "Firebase",
    "AWS",
    "Docker",
    "Python",
 ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
<div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                Frontend developer with a passion for crafting beautiful and functional web experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-cl p-6 hover:-translate-y-1 transition-all">
                     <h3 className="text-xl font-bold mb-4">Frontend</h3>
                     <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                        </span>
                        ))}
                     </div>
                    </div>
                
                    <div className="rounded-cl p-6 hover:-translate-y-1 transition-all">
                     <h3 className="text-xl font-bold mb-4">Backend</h3>
                     <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                        </span>
                        ))}
                     </div>
                    </div>
                </div>    
             </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4"> 📚 Education </h3>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>
        <strong>Responsive Web design</strong> - freeCodeCamp (July 13, 2023)
      </li>
      <li>Relevant Coursework: semantic HTML, CSS Grid & Flexbox, accessibility, mobile-first design  
      </li>
      <li>
        <strong>Legacy JavaScript Algorithms and Data Structures</strong> - freeCodeCamp (December 18, 2023)
      </li>
      <li>Relevant Coursework: core JavaScript, algorithms, problem-solving
      </li>
      
    </ul>
  </div>
  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4"> 💻 Personal Projects </h3>
    <div className="space-y-4 text-gray-300">
      <div>
       <h4 className="font-semibold">
          FSantibanez.dev - Portfolio Website
        </h4>
        <p>
          A personal portfolio website showcasing my skills, projects, and contact information. Built with React and Tailwind CSS.
        </p>
      </div>
      <div>
       <h4 className="font-semibold">
          ReelFinder - Movie Recommendation App
        </h4>
        <p>
          A movie recommendation app that suggests films based on user preferences. Built with React, Node.js, and the TMDB API.
        </p>
      </div>
      <div>
       <h4 className="font-semibold">
          NamiSushi - Landing Page
        </h4>
        <p>
          A fictional sushi restaurant landing page built as a frontend layout project using HTML & CSS.
        </p>
      </div>

    </div>
  </div>
</div>              
            </div>
      </RevealOnScroll>
    </section>
  )
}