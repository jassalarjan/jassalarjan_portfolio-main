import profileImg from '~/assets/profile.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import Skill from './skill';
import CareerTimeline from './CareerTimeline';
import { DecoderText } from '~/components/decoder-text';

// Import project images
import sprImage from '~/assets/slice-app-large.jpg';
import gamestackLoginImage from '~/assets/gamestack-login.jpg';
import gamestackListImage from '~/assets/gamestack-list.jpg';
import sliceAppImage from '~/assets/slice-app.jpg';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = ({ visible: sectionVisible }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const skill = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, details, projectOne, projectTwo, projectThree];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      {/* <ProjectShowcase /> */}
      <CareerTimeline id="career" />
      <Skill id="skill" />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title={
          <DecoderText text="Designing the future of Audits with Zing" delay={1500} />
        }
        description="Designing a platform to deliver better audits"
        buttonText="View project"
        buttonLink="https://www.zingenterprises.co.in/"
        model={{
          type: 'laptop',
          alt: 'Zing Enterprises',
          key: 'project-1-model',
          textures: [
            {
              src: sprImage,
              placeholder: sprImage,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title={<DecoderText text="Shubham Polybags (SPM)" delay={1500} />}
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View website"
        buttonLink="https://shubhambags.com/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          key: 'project-2-model',
          textures: [
            {
              src: gamestackLoginImage,
              placeholder: gamestackLoginImage,
            },
            {
              src: gamestackListImage,
              placeholder: gamestackListImage,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title={<DecoderText text="Safety Convention 2023" delay={1500} />}
        buttonText="View project"
        buttonLink="https://www.sqfiei.in/safety_convention_2023/index.php"
        description='Safety Convention was organized to arrange a platform to collaborate with industries, organizations, corporates and individuals with focus on the most important "thing" required these days; that is relearning and re-emphasizing the basics.'
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          key: 'project-3-model',
          textures: [
            {
              src: sliceAppImage,
              placeholder: sliceAppImage,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
