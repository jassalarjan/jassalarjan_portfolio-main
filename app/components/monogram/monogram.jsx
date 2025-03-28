// import { forwardRef, useId } from 'react';
// import { classes } from '~/utils/style';
// import styles from './monogram.module.css';

// export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
//   const id = useId();
//   const clipId = `${id}monogram-clip`;

//   return (
//     <svg
//       aria-hidden
//       className={classes(styles.monogram, className)}
//       width="48"
//       height="29"
//       viewBox="0 0 48 29"
//       ref={ref}
//       {...props}
//     >
//       <defs>
//         <clipPath id={clipId}>
//           <path d="M0 0h6.5a6 6 0 0 1 5.2 3.1L19.4 17l4-9L19 0h6.5a6 6 0 0 1 5.2 3.1L39.5 19 35 29 24.5 10 16 29 0 0Zm46.7 2.8A2 2 0 0 0 45 0h-7l5.5 10 3.2-7.2Z" />
//         </clipPath>
//       </defs>
//       <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
//       {highlight && (
//         <g clipPath={`url(#${clipId})`}>
//           <rect className={styles.highlight} width="100%" height="100%" />
//         </g>
//       )}
//     </svg>
//   );
// });
import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}-monogram-clip`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      zoomAndPan="magnify"
      viewBox="0 0 900 899.99999"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      className={classes(styles.monogram, className)}
      // width="48" 
      // height="48"
      width="48"
      height="29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path
            fill="#000000"
            d="M 738.640625 191.0625 L 665.171875 619.125 C 655.847656 673.515625 649.121094 708.476562 649.121094 724.28125 C 649.121094 753.746094 663.003906 768.59375 690.5625 768.59375 C 737.269531 768.59375 806.972656 717.09375 899.660156 614.34375 L 886.96875 679.5 C 784.695312 789.4375 692.710938 844.285156 611.269531 844.285156 C 543.488281 844.285156 509.476562 809.082031 509.476562 738.417969 C 509.476562 714.949219 514.980469 675.183594 526.238281 618.902344 L 560.738281 445.714844 C 555.507812 445.714844 392.484375 697.902344 357.140625 733.144531 C 282.882812 807.15625 213.179688 844.285156 148.03125 844.285156 C 49.339844 844.285156 0 782.488281 0 659.136719 C 0 522.835938 54.367188 389.664062 162.871094 259.121094 C 274.976562 123.789062 412.21875 56.25 574.152344 56.25 C 640.96875 56.25 710.910156 59.121094 783.972656 64.628906 C 745.410156 227.160156 640.035156 125.710938 442.164062 125.710938 C 356.894531 125.710938 288.867188 179.601562 237.847656 287.148438 C 177.976562 414.335938 148.03125 528.589844 148.03125 630.148438 C 148.03125 703.691406 169.589844 740.339844 212.699219 740.339844 C 252.941406 740.339844 310.679688 698.164062 386.347656 613.621094 C 461.792969 529.320312 579.183594 363.019531 636.1875 254.507812 L 738.644531 191.0625 Z M 738.640625 191.0625 "
            fill-opacity="1"
            fill-rule="nonzero"
          />{' '}
        </clipPath>
      </defs>
      {/* Logo shape */}
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
