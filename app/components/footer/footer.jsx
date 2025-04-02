import React from 'react';
import { Link } from '@remix-run/react';
import styles from './footer.module.css';

export const Footer = () => {
  // Function to generate random bubbles
  const generateBubbles = (count = 10) => {
    return Array.from({ length: count }, (_, index) => {
      const size = 2 + Math.random() * 3; // Random size between 2-5rem
      const distance = 6 + Math.random() * 4; // Random distance between 6-10rem
      const position = Math.random() * 100; // Random position between 0-100%
      const time = 2 + Math.random() * 2; // Random animation time between 2-4s
      const delay = -Math.random() * 4; // Random delay between 0-4s

      return (
        <div
          key={index}
          className={styles.bubble}
          style={{
            '--size': `${size}rem`,
            '--distance': `${distance}rem`,
            '--position': `${position}%`,
            '--time': `${time}s`,
            '--delay': `${delay}s`
          }}
        />
      );
    });
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.bubbles}>
          {generateBubbles(15)}
        </div>
        <div className={styles.content}>
          <div className={styles.footerContent}>
            <a 
              className={styles.image} 
              href="https://github.com/jassalarjan" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")' }} 
            />
            <Link to="/humans.txt" className={styles.craftedBy}>
              Crafted by 
            </Link>
            <p className={styles.copyright}>© {new Date().getFullYear()} Arjan Singh Jassal</p>
          </div>
        </div>
      </footer>
      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
            <feComposite in="SourceGraphic" in2="blob" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Footer;

								                            
