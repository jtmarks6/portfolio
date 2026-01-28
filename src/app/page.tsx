import Image from "next/image";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const experiences = [
  {
    company: "Credit Karma",
    location: "Charlotte, NC",
    role: "Software Engineering Intern – Backend Data Pipeline Team",
    period: "May 2022 – August 2022",
    achievements: [
      "Implemented event validation to support new version of schemas to improve velocity of team with Scala",
      "Used Talon Toggles to control traffic flow between old and new schema versions",
      "Taught team the benefits of Talon Toggles and how to use it in their code",
      "Worked with Senior Engineer to develop an internal web application for event ingest/flow end to end",
    ],
  },
  {
    company: "Credit Karma",
    location: "Charlotte, NC",
    role: "Software Engineering Intern – Backend Platform Frameworks Team",
    period: "May 2021 – August 2021",
    achievements: [
      "Automated microservice deployment to test environments in Kubernetes with CircleCI",
      "Maintained linter with Scala to enforce new configuration file rules with team's code",
      "Automated storage bucket cleanup and adding dependency scripts to Docker containers",
      "Built demo and researched optimal path for data from PubSub to Splunk and BigQuery",
    ],
  },
];

const projects = [
  {
    title: "Card Matching Robot",
    description: "Built an automated robot to earn top score in the world in a card matching mini game",
    tech: ["Python", "OpenCV", "Tesseract"],
    github: "https://github.com/jtmarks6",
  },
  {
    title: "Tiger Tickets",
    description: "Designed and built ticket buying system for school events using SCRUM project management",
    tech: ["ASP.Net", "Azure", "REST API", "OpenAPI 3.0"],
    github: "https://github.com/jtmarks6",
  },
  {
    title: "Stock Trader",
    description: "Built tools to analyze and trade stocks automatically with web scraping and AI models",
    tech: ["Python", "TensorFlow", "Web Scraping"],
    github: "https://github.com/jtmarks6",
  },
  {
    title: "TigerPark",
    description: "Designed and implemented a system to reserve parking spots on campus",
    tech: ["React", "TypeScript", "NodeJS", "AWS"],
    github: "https://github.com/jtmarks6",
  },
];

const languages = ["Scala", "Java", "Python", "C", "C++", "C#", "Lua", "JavaScript", "TypeScript", "Swift", "React"];
const technologies = ["Docker", "AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Kafka", "GraphQL", "NodeJS", "CircleCI"];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgb(17,17,17)]/90 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-white">
              JM
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <p className="text-blue-500 text-sm font-medium mb-4">Hello, I&apos;m</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Jeremy Marks
              </h1>
              <h2 className="text-2xl md:text-3xl text-neutral-400 mb-6">
                Software Engineer
              </h2>
              <p className="text-neutral-400 text-lg max-w-xl mb-8">
                Backend and data engineering enthusiast with experience at Credit Karma.
                Passionate about building systems that help customers improve their lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-center"
                >
                  Get in Touch
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-3 border border-neutral-700 hover:border-neutral-500 text-white rounded-lg transition-colors text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neutral-800 bg-neutral-800">
                <Image
                  src="/profile.jpg"
                  alt="Jeremy Marks"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              I&apos;m a software engineer with hands-on experience in the financial software industry,
              specifically in backend data pipelines and platform frameworks. I graduated from Clemson
              University with a Bachelor&apos;s in Computer Science and a 3.75 GPA.
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              I&apos;m looking for a data engineering or back-end role at a company that truly helps
              customers improve their lives. I thrive on building scalable systems and automating
              complex processes.
            </p>
            <div className="border-t border-neutral-800 pt-8">
              <h3 className="text-xl font-semibold text-white mb-4">When I&apos;m not coding...</h3>
              <div className="flex flex-wrap gap-3">
                {["Wakeboarding", "Snowboarding", "Guitar", "Volleyball", "Electrical Engineering Projects"].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-blue-500">{exp.company} • {exp.location}</p>
                  </div>
                  <p className="text-neutral-500 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-300">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <p className="text-neutral-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-lg text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-green-600/20 text-green-400 border border-green-600/30 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Education</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Clemson University</h3>
                  <p className="text-blue-500">Bachelor of Computer Science</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="text-neutral-400">Sept 2019 - May 2023</p>
                  <p className="text-green-400 font-semibold">3.75 GPA</p>
                </div>
              </div>
              <div className="border-t border-neutral-800 pt-4 mt-4">
                <h4 className="text-sm font-medium text-neutral-400 mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Algorithms & Data Structures",
                    "Computer Systems Org",
                    "Software Dev Foundations",
                    "Design Analysis of Algorithms",
                    "Network Programming",
                    "Software Engineering",
                    "Programming Systems",
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Get in Touch</h2>
          <p className="text-neutral-400 text-center mb-12 max-w-xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jeremymarks66@yahoo.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/JeremyMarks6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-neutral-700 hover:border-neutral-500 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/jtmarks6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-neutral-700 hover:border-neutral-500 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Jeremy Marks. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
