import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './TestimonialCardCarousel.css';
import profileImage from '~/assets/profile.jpg';
const testimonials = [
  {
    id: 1,
    name: 'Praveen Singh',
    position: 'Director,Safety and Quality Forum,IEI',
    content:
      'It is my utmost pleasure to confirm the testimonial for Mr. Arjan Singh Jassal. Over the past three years of my interaction with him, he has consistently demonstrated exceptional skills and unwavering dedication in the field of IT. His strong problem-solving abilities, innovative mindset, and commitment to excellence set him apart. Arjan is an energetic and reliable professional who approaches every challenge with enthusiasm and determination. His passion for technology and continuous learning makes him a valuable asset to any team or organization.',
    avatar: profileImage,
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'CTO, Digital Solutions Inc.',
    content:
      'I was impressed by the clean, efficient code and the ability to solve complex problems. This developer is a valuable asset to any team.',
    avatar: profileImage,
  },
  {
    id: 3,
    name: 'Alex Johnson',
    position: 'Project Manager, InnovateTech',
    content:
      'The level of communication and project management skills displayed by this developer made our collaboration smooth and productive.',
    avatar: profileImage,
  },
  {
    id: 4,
    name: 'Emily Brown',
    position: 'Lead Designer, Creative Minds',
    content:
      'Their ability to translate design concepts into functional, beautiful websites is remarkable. A true professional who delivers outstanding results.',
    avatar: profileImage,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <div className="testimonial-content">
      <FaQuoteRight className="quote-icon" aria-hidden="true" />
      <p>{testimonial.content}</p>
    </div>
    <div className="testimonial-author">
      <img
        src={testimonial.avatar}
        alt=""
        className="author-avatar"
      />
      <div className="author-info">
        <h4>{testimonial.name}</h4>
        <p>{testimonial.position}</p>
      </div>
    </div>
  </div>
);

const TestimonialCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const nextTestimonial = useCallback(() => {
    setDirection('right');
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection('left');
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const variants = {
    enter: direction => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: direction => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="testimonial-carousel">
      <h2>Testimonials</h2>
      <div className="carousel-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'tween', duration: 0.3 }}
            className="carousel-slide"
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>
        <button
          className="nav-button prev"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        <button
          className="nav-button next"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="carousel-indicators" role="tablist">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > currentIndex ? 'right' : 'left');
              setCurrentIndex(index);
            }}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-selected={index === currentIndex}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCardCarousel;
