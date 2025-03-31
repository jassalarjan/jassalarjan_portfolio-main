import { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './CareerTimeline.css';

const timelineData = [
  {
    id: 1,
    type: 'education',
    date: '2022',
    title: 'Secondary School',
    institution: 'Rukmini Devi Public School Affiliated by CBSE',
    details: 'Completed my secondary education with 92% marks.',
  },
  {
    id: 2,
    type: 'education',
    date: '2024',
    title: 'Senior Secondary School',
    institution: 'Rukmini Devi Public School Affiliated by CBSE',
    details:
      'Completed my senior secondary education with 82% marks.',
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
    title: 'Digital Marketing Intern',
    institution: 'Zing Enterprises',
    details:
      'Social media marketing for a company. Contributed to web and social media projects, focusing on branding and digital content creation.',
  },
  {
    id: 6,
    type: 'education',
    date: '2024 - Present',
    title: 'Pursuing (BCA)',
    institution: 'Maharishi Dayanand University',
    details:
      'I am currently pursuing my Bachelor of Computer Applications (BCA) degree at Maharishi Dayanand University, which is renowned university in India.',
  },
];

const TimelineItem = ({ item, isVisible, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2
      }
    }
  };

  const contentVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: 'auto', opacity: 1 }
  };

  return (
    <motion.div
      className={`timeline-item ${item.type} ${isVisible ? 'animate' : ''}`}
      variants={itemVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="timeline-content"
        animate={{
          y: isHovered ? -5 : 0,
          boxShadow: isHovered 
            ? '0 8px 40px rgba(var(--text-rgb), 0.15)' 
            : '0 4px 30px rgba(var(--text-rgb), 0.1)'
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.div 
          className="timeline-icon"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
            backgroundColor: isHovered ? 'var(--accent)' : 'var(--primary)'
          }}
          transition={{ duration: 0.4 }}
        >
          {item.type === 'education' ? <FaGraduationCap /> : <FaBriefcase />}
        </motion.div>
        <div className="timeline-info">
          <h3>{item.title}</h3>
          <p className="timeline-date">{item.date}</p>
          <p className="timeline-institution">{item.institution}</p>
          <AnimatePresence>
            {isExpanded && (
              <motion.p
                className="timeline-details"
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                transition={{ duration: 0.3 }}
              >
                {item.details}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <motion.button
          className="timeline-expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </motion.button>
      </motion.div>
    </motion.div>
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
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        My Work
      </motion.h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <TimelineItem 
            key={item.id} 
            item={item} 
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;
