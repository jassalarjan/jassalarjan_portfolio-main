import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { deviceModels } from '~/components/model/device-models';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { Loader } from '~/components/loader';
import { useWindowSize } from '~/hooks';
import { Suspense, lazy, useState, useEffect } from 'react';
import { cssProps, media } from '~/utils/style';
import { useHydrated } from '~/hooks/useHydrated';
import arjan from './arjan.svg';
import styles from './project-summary.module.css';

const Model = lazy(() =>
  import('~/components/model').then(module => ({ default: module.Model }))
);

export function ProjectShowcase({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title,
  description,
  model,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === 'light' ? 0.7 : 1;
  const indexText = index < 10 ? `0${index}` : index;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

  function handleModelLoad() {
    console.log('Model Loaded');
    setModelLoaded(true);
  }

  useEffect(() => {
    console.log('Component Mounted, Hydration:', isHydrated);
  }, [isHydrated]);

  function renderarjan(device, visible) {
    return (
      <svg
        type="project"
        data-visible={visible && modelLoaded}
        data-light={theme === 'light'}
        style={cssProps({ opacity: svgOpacity })}
        className={styles.svg}
        data-device={device}
        viewBox="0 0 751 136"
      >
        <use href={`${arjan}#arjan-project`} />
      </svg>
    );
  }

  function renderDetails(visible) {
    return (
      <div className={styles.details}>
        <div aria-hidden className={styles.index}>
          <Divider
            notchWidth="64px"
            notchHeight="8px"
            collapsed={!visible}
            collapseDelay={1000}
          />
          <span className={styles.indexNumber} data-visible={visible}>
            {indexText}
          </span>
        </div>
        <Heading
          level={3}
          as="h2"
          className={styles.title}
          data-visible={visible}
          id={titleId}
        >
          {title}
        </Heading>
        <Text className={styles.description} data-visible={visible} as="p">
          {description}
        </Text>
        <div className={styles.button} data-visible={visible}>
          <Button iconHoverShift href={buttonLink} iconEnd="arrow-right">
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }

  function renderPreview(visible) {
    const modelTypes = ['laptop', 'phone', 'tablet'];

    return (
      <div className={styles.preview}>
        {modelTypes.map((deviceType, index) => {
          const deviceModel = deviceModels[deviceType];

          if (!deviceModel) {
            console.error(`Model not found for type: ${deviceType}`);
            return null;
          }

          return (
            <div key={deviceType} className={styles.model} data-device={deviceType}>
              {renderarjan(deviceType, visible)}
              {!modelLoaded && <Loader center className={styles.loader} data-visible={visible} />}
              {isHydrated && visible && (
                <Suspense fallback={<Loader center />}>
                  <Model
                    alt={`${deviceType} preview`}
                    cameraPosition={{
                      x: 0,
                      y: 0,
                      z: deviceType === 'laptop' ? 8 : deviceType === 'phone' ? 11.5 : 10,
                    }}
                    showDelay={300 + index * 200}
                    onLoad={handleModelLoad}
                    show={visible}
                    models={[
                      {
                        ...deviceModel,
                        position: { x: index * 0.8 - 0.8, y: index * 0.5 - 0.5, z: 0 },
                        texture: {
                          ...model.textures[index] || {},
                          sizes: deviceType === 'laptop' ? laptopSizes : phoneSizes,
                        },
                      },
                    ]}
                  />
                </Suspense>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <Section
      className={styles.summary}
      data-alternate={alternate}
      data-first={index === 1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className={styles.content}>
        <Transition in={sectionVisible || focused}>
          {({ visible }) => (
            <>
              {!alternate && !isMobile && (
                <>
                  {renderDetails(visible)}
                  {renderPreview(visible)}
                </>
              )}
              {(alternate || isMobile) && (
                <>
                  {renderPreview(visible)}
                  {renderDetails(visible)}
                </>
              )}
            </>
          )}
        </Transition>
      </div>
    </Section>
  );
}
