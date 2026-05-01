"use client";

import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import CubeGrid from "@/components/CubeGrid/CubeGrid";
import Section from "@/components/Section/Section";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <CubeGrid />

      <Section id="about" title="About Me">
        <div className={styles.twoColGrid}>
          <div>
            <p className={styles.paragraph}>
              Software Engineer and IT graduate student with experience in backend and full-stack development using <strong>Node.js, FastAPI, PostgreSQL, and AWS</strong>.
            </p>
            <p className={styles.paragraph}>
              Skilled in designing scalable RESTful APIs, optimizing data models, and building secure, maintainable backend systems. Strong team collaborator with hands-on experience working in Agile environments, debugging complex issues, and delivering production-ready solutions.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardHeader}>Contact Information</h3>
            <ul className={styles.list}>
              <li><strong>Location:</strong> Charlotte, NC</li>
              <li><strong>Email:</strong> lakshnadhanaraj@gmail.com</li>
              <li><strong>Phone:</strong> +1 (704) 490-9574</li>
              <li><strong>Connect:</strong> <a href="https://www.linkedin.com/in/lakshna-dhanaraj-b63199234/" className={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.itemTitle}>Graduate Teaching Assistant — Human-Centered AI</h3>
            <p className={styles.itemMeta}>University of North Carolina at Charlotte &bull; Jan 2025 – Present</p>
            <ul className={styles.list}>
              <li>Supported instruction for a graduate-level course on ethical, user-centered AI system design.</li>
              <li>Conducted code reviews, debugging support, and guided project development.</li>
              <li>Held office hours to mentor students and reinforce academic integrity.</li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.itemTitle}>Junior Software Engineer (Android & Backend Systems)</h3>
            <p className={styles.itemMeta}>Sporada Secure India Pvt. Ltd. &bull; Aug 2023 – Mar 2024</p>
            <ul className={styles.list}>
              <li>Developed and maintained Android applications using Java and Android Studio for secure mobile workflows.</li>
              <li>Integrated RESTful APIs to enable reliable communication between mobile applications and backend services.</li>
              <li>Optimized UI components to enhance responsiveness and consistency across screen sizes.</li>
              <li>Collaborated in Agile processes including sprint planning, daily stand-ups, and code reviews.</li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.itemTitle}>Associate Software Engineer – Intern</h3>
            <p className={styles.itemMeta}>Techfinite Systems, Coimbatore &bull; May 2023 – Aug 2023</p>
            <ul className={styles.list}>
              <li>Developed and customized ERPNext modules using Python and Frappe framework.</li>
              <li>Implemented workflows including approval processes, role-based access control (RBAC), and data validations.</li>
              <li>Debugged and optimized Python code through unit testing, log analysis, and performance tuning.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        {/* Featured Case Study */}
        <div className={styles.featuredCaseStudy}>
          <div className={styles.featuredBadge}>📖 Featured Case Study</div>
          <h3 className={styles.featuredTitle}>EECS Department Website Redesign</h3>
          <p className={styles.featuredDesc}>
            A full UX redesign of UC Berkeley&apos;s EECS department site — from heuristic critique through user testing with 3 participants, to a mobile-first final build achieving 100% task completion.
          </p>
          <div className={styles.featuredTags}>
            <span>UX Design</span><span>User Testing</span><span>HTML/CSS/JS</span><span>Mobile-First</span>
          </div>
          <Link href="/case-study" className={styles.featuredLink}>Read the Case Study →</Link>
        </div>

        <div className={styles.threeColGrid}>
          <ProjectCard
            title="Annotation Tool"
            tech="Python, JSON, ML Workflows"
            desc="Designed and developed a scalable ML annotation tool for structured dataset labeling in supervised pipelines. Implemented support for multiple data formats and dataset versioning."
          />
          <ProjectCard
            title="Price Tracker"
            tech="FastAPI, Selenium, Chart.js"
            desc="Full-stack web application to track product prices across major e-commerce platforms. Features automated web scraping, caching mechanisms, and historical trend visualization."
          />
          <ProjectCard
            title="Movie Review System"
            tech="Node.js, PostgreSQL, REST APIs"
            desc="RESTful backend application managing movies, users, and reviews. Implemented full CRUD operations, secure request handling, and role-based access control."
          />
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className={styles.card}>
          <h3 className={styles.cardHeader}>University of North Carolina at Charlotte, USA</h3>
          <p className={styles.itemTitle}>Master of Science in Information Technology</p>
          <p className={styles.itemMeta}>Jan 2025 – Dec 2026</p>
          <p className={styles.paragraph}>GPA: <strong>4.00 / 4.00</strong></p>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className={styles.fourColGrid}>
          <SkillCategory title="Programming" skills={["Python", "Java", "JavaScript", "SQL"]} />
          <SkillCategory title="Backend" skills={["Node.js", "Express", "FastAPI", "Prisma", "REST APIs"]} />
          <SkillCategory title="Frontend" skills={["React", "HTML", "CSS", "Chart.js"]} />
          <SkillCategory title="Tools & Cloud" skills={["AWS (EC2, S3)", "Git/GitHub", "Docker", "Postman", "Selenium"]} />
        </div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className={styles.card}>
          <ul className={styles.list}>
            <li>AWS Certified Cloud Practitioner</li>
            <li>Pentaho (PDI): Data Warehouse Fundamentals</li>
            <li>Full Stack Web Development (HTML, CSS, JS, React, Node.js)</li>
          </ul>
        </div>
      </Section>

      <footer className={styles.footer}>
        <p>Lakshna Dhanaraj &bull; Charlotte, NC &bull; lakshnadhanaraj@gmail.com</p>
        <p>&copy; {new Date().getFullYear()} Portfolio. Built with Next.js.</p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, tech, desc }: { title: string, tech: string, desc: string }) {
  return (
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectTech}>{tech}</p>
      <p className={styles.projectDesc}>{desc}</p>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className={styles.skillCategory}>
      <h3 className={styles.skillTitle}>{title}</h3>
      <ul className={styles.skillList}>
        {skills.map(s => <li key={s} className={styles.skillItem}>{s}</li>)}
      </ul>
    </div>
  );
}
