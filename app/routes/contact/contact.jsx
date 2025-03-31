import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { baseMeta } from '~/utils/meta';
import { useTheme } from '~/components/theme-provider';
import config from '~/config.json';
import FloatingCube from './FloatingCube';
import styles from './contact.module.css';
import { Footer } from '~/components/footer';
export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: 'Get in touch with me for any inquiries or collaboration opportunities.',
  });
};

export const Contact = () => {
  const { theme } = useTheme();
  
  return (
    <div className={styles.contact}>
      {/* 3D Canvas Background */}
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={theme === 'dark' ? 0.8 : 0.5} />
          <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1.5 : 1} color={theme === 'dark' ? '#ffffff' : '#4834d4'} />
          <pointLight position={[-10, -10, -10]} intensity={theme === 'dark' ? 0.8 : 0.5} color={theme === 'dark' ? '#a29bfe' : '#3867d6'} />
          <Suspense fallback={null}>
            <FloatingCube />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <Section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <Heading level={2} weight="bold" className={styles.title}>
            Let's Connect
          </Heading>
          <Text size="5" className={styles.description}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </Text>

          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <br />
              <Heading level={4} weight="medium" className={styles.subtitle}>
                Contact Information
              </Heading>
              
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Mail className={styles.icon} />
                </div>
                <div>
                  <Text size="s" className={styles.label}>Email: </Text>
                  <Text size="m">{config.email || 'jassalarjansingh@gmail.com'}</Text>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Phone className={styles.icon} />
                </div>
                <div> 
                  <Text size="s" className={styles.label}>Phone: </Text>
                  <Text size="m">{config.phone || '+91 8447054647'}</Text>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <MapPin className={styles.icon} />
                </div>
                <div>
                  <Text size="s" className={styles.label}>Location: </Text>
                  <Text size="m">{config.location || 'New Delhi, India'}</Text>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              <Heading level={3} weight="medium" className={styles.subtitle}>
                Connect With Me
              </Heading>
              <div className={styles.socialGrid}>
                {config.socialLinks?.github && (
                  <a href={config.socialLinks.github} className={styles.socialLink} target="_blank" rel="noreferrer">
                    <Github className={styles.socialIcon} />
                    <Text size="s">GitHub</Text>
                  </a>
                )}
                {config.socialLinks?.linkedin && (
                  <a href={config.socialLinks.linkedin} className={styles.socialLink} target="_blank" rel="noreferrer">
                    <Linkedin className={styles.socialIcon} />
                    <Text size="s">LinkedIn</Text>
                  </a>
                )}
                {config.socialLinks?.twitter && (
                  <a href={config.socialLinks.twitter} className={styles.socialLink} target="_blank" rel="noreferrer">
                    <Twitter className={styles.socialIcon} />
                    <Text size="s">Twitter</Text>
                  </a>
                )}
              </div>

              <div className={styles.officeHours}>
                <Heading level={5}  className={styles.officeTitle}>
                  Available Hours
                </Heading>
                <Text size="m" className={styles.officeTime}>
                  Monday - Friday
                </Text>
                <Text size="m" className={styles.officeTime}>
                  9:00 AM - 5:00 PM {config.timezone || 'PST'}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <br /><br /><br />
      <Footer />
    </div>
  );
};
