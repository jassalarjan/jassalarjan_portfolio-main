import { useEffect, useRef, useState } from 'react';
import './skill.css';

const skills = [
  { name: 'HTML5', level: 100 },
  { name: 'CSS3', level: 100 },
  { name: 'JavaScript', level: 95 },
  { name: 'PHP', level: 95 },
  { name: 'React', level: 90 },
  { name: 'JSON', level: 75 },
  { name: 'JQUERY', level: 70 },
  { name: 'GIT & GITHUB', level: 85 },
  { name: 'PWA', level: 85 },
  { name: 'WORDPRESS & WIX', level: 80 },
  { name: 'Python', level: 90 },
  { name: 'DJANGO', level: 65 },
  { name: 'FLASK', level: 50 },
];

const SkillBadge = ({ name, level, isVisible }) => (
  <div className="skill-badge">
    <div className="skill-info">
      <span className="skill-name">{name}</span>
      <br />
      <div className="skill-bar">
        <div
          className={`skill-level ${isVisible ? 'animate' : ''}`}
          style={{ '--skill-level': `${level}%` }}
        ></div>
      </div>
    </div>
  </div>
);

export default function Skill() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="skills-technologies" ref={sectionRef}>
      <div className="contet">
        <h2>Skills & Technologies</h2>
<p style={{ lineHeight: "1.5", padding:'1rem' }}>
          With over 5 years of experience in web development, I specialize in creating
          robust and scalable websites using cutting-edge technologies.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillBadge key={index} {...skill} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
