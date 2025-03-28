import { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './CareerTimeline.css';

const timelineData = [
  {
    id: 1,
    type: 'education',
    date: '2022',
    title: 'Secondary School',
    institution: 'Rukmini Devi Public School Affiliated by CBSE',
    details: '',
  },
  {
    id: 2,
    type: 'education',
    date: '2024',
    title: 'Senior Secondary School',
    institution: 'Rukmini Devi Public School Affiliated by CBSE',
    details:
      'Worked on developing and maintaining web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
  },
  {
    id: 3,
    type: 'work',
    date: '2024',
    title: 'Web Developer Intern',
    institution: 'Zap Infotech',
    details:
      'Focused on advanced topics in html, css, js and php. Made a project in php.',
  },
  {
    id: 4,
    type: 'education',
    date: '2024',
    title: 'Full Stack Web Development Course',
    institution: ' TGC Institute',
    details:
      'Focused on advanced topics in machine learning, big data analytics, and statistical modeling. Completed a project on predictive analytics for e-commerce platforms.',
  },
  {
    id: 5,
    type: 'work',
    date: '2024 October - Present',
    title: 'Social Media Marketing Intern',
    institution: 'Zing Enterprises',
    details:
      'Focused on advanced topics in machine learning, big data analytics, and statistical modeling. Completed a project on predictive analytics for e-commerce platforms.',
  },
  {
    id: 6,
    type: 'education',
    date: '2024 - Present',
    title: 'Pursuing (BCA)',
    institution: 'Maharishi Dayanand University',
    details:
      'Lead developer for multiple high-profile projects. Responsible for architecting scalable solutions, mentoring junior developers, and implementing best practices in software development.',
  },
];

const TimelineItem = ({ item, isVisible }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`timeline-item ${item.type} ${isVisible ? 'animate' : ''}`}>
      <div className="timeline-icon">
        {item.type === 'education' ? <FaGraduationCap /> : <FaBriefcase />}
      </div>
      <div className="timeline-content">
        <h3>{item.title}</h3>
        <p className="timeline-date">{item.date}</p>
        <p className="timeline-institution">{item.institution}</p>
        <button
          className="timeline-expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {isExpanded && <p className="timeline-details">{item.details}</p>}
      </div>
    </div>
  );
};

const CareerTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section className="career-timeline" ref={timelineRef}>
      <h2>My Work</h2>
      <div className="timeline">
        {timelineData.map(item => (
          <TimelineItem key={item.id} item={item} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;
