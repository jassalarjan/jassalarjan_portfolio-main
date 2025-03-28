import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

// export const Footer = ({ className }) => (
//   <footer className={classes(styles.footer, className)}>
//     <Text size="s" align="center">
//       <span className={styles.date}>
//         {`© ${new Date().getFullYear()} ${config.name}.`}
//       </span>
//       <Link secondary className={styles.link} href="/humans.txt" target="_self">
//         Crafted by yours truly
//       </Link>
//     </Text>
//   </footer>
// );


export const Footer = ({ className }) => {
  const bubbles = Array.from({ length: 128 }, (_, i) => ({
    size: 2 + Math.random() * 4,
    distance: 6 + Math.random() * 4,
    position: Math.random() * 100,
    time: 2 + Math.random() * 2,
    delay: -Math.random() * 2,
  }));

  return (
    <div className="bubble-foot">
      <div className="foot">
        <div className="bubbles">
          {bubbles.map((bubble, index) => (
            <div
              key={index}
              className="bubble"
              style={{
                '--size': `${bubble.size}rem`,
                '--distance': `${bubble.distance}rem`,
                '--position': `${bubble.position}%`,
                '--time': `${bubble.time}s`,
                '--delay': `${bubble.delay}s`,
              }}
            />
          ))}
        </div>
        <div className="content">
          <footer className={classes(styles.footer, className)}>
            <Text size="s" align="center">
              <span className={styles.date}>
                {`© ${new Date().getFullYear()} ${config.name}.`}
              </span>
              <Link secondary className={styles.link} href="/humans.txt" target="_self">
                Crafted by yours truly
              </Link>
            </Text>
          </footer>
        </div>
      </div>
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
          </filter>
        </defs>
      </svg>
    </div>
  );
};

// export default Footer;
