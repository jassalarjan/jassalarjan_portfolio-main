import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { createContext, useContext, forwardRef, useRef, useEffect, useState, memo, Fragment, useCallback, useId, Suspense, useSyncExternalStore, lazy } from "react";
import { useReducedMotion, AnimatePresence, usePresence, useSpring, motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring as useSpring$1, animated } from "@react-spring/three";
import gsap from "gsap";
import throttle from "lodash/throttle.js";
import { Typography } from "@mui/material";
import * as THREE from "three";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { FaGraduationCap, FaBriefcase, FaChevronUp, FaChevronDown } from "react-icons/fa";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      signal: request.signal,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      }
    }
  );
  if (isBotRequest(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2";
const GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2";
const GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2";
const GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2";
const GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2";
const GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2";
const IPAGothic = "/assets/ipa-gothic-DimHCOud.woff2";
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum = (msString) => Number(msString.replace("ms", ""));
const numToMs = (num) => `${num}ms`;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  // Element-specific colors that remain consistent
  // Heading colors
  h1Color: "var(--h1Color)",
  // Use theme variable
  h2Color: "var(--h2Color)",
  // Use theme variable
  h3Color: "var(--h3Color)",
  // Use theme variable
  h4Color: "var(--h4Color)",
  // Use theme variable
  h5Color: "var(--h5Color)",
  // Use theme variable
  // Text colors
  paragraphColor: "var(--paragraphColor)",
  // Use theme variable
  linkColor: "var(--linkColor)",
  // Use theme variable
  linkHoverColor: "var(--linkHoverColor)",
  // Use theme variable
  accentColor: "var(--accent)",
  // Use theme variable
  secondaryTextColor: "var(--secondaryTextColor)",
  // Use theme variable
  // Special elements
  navTextColor: "var(--navTextColor)",
  // Use theme variable
  buttonTextColor: "var(--buttonTextColor)",
  // Use theme variable
  buttonBgColor: "var(--buttonBgColor)",
  // Use theme variable
  buttonHoverBgColor: "var(--buttonHoverBgColor)",
  // Use theme variable
  navButtonBgColor: "var(--navButtonBgColor)",
  // New variable for nav button background
  // Form elements
  inputTextColor: "var(--inputTextColor)",
  // Use theme variable
  inputBorderColor: "var(--inputBorderColor)",
  // Use theme variable
  inputFocusBorderColor: "var(--inputFocusBorderColor)",
  // Use theme variable
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  japaneseFontStack: "IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: "1.1",
  lineHeightBody: "1.6",
  maxWidthS: "540px",
  maxWidthM: "720px",
  maxWidthL: "1096px",
  maxWidthXL: "1680px",
  spaceOuter: "64px",
  spaceXS: "4px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22)
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14)
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "#1A1A1A",
  // Deep dark background
  backgroundLight: "#2D2D2D",
  // Slightly lighter dark for cards
  backgroundDark: "#121212",
  // Even darker background
  backgroundA: "rgba(26, 26, 26, 0.8)",
  // Semi-transparent background
  backgroundA50: "rgba(26, 26, 26, 0.5)",
  // 50% transparent background
  primary: "#FFE983",
  // Warm yellow for primary accent
  accent: "#FFE983",
  // Using same color for accent to ensure consistency
  error: "#FF6A00",
  // Fiery Orange for error states
  text: "#FFFFFF",
  // Pure white for text
  // Text colors
  colorTextTitle: "#FFFFFF",
  // White for titles
  colorTextBody: "#FFFFFF",
  // White for body text
  colorTextLight: "#FFFFFF",
  // White for light text
  // Border colors
  borderLight: "rgba(255, 255, 255, 0.1)",
  // Light border
  borderDark: "rgba(255, 255, 255, 0.2)",
  // Dark border
  // Heading colors - Gradient from warm yellow to white
  h1Color: "#FFE983",
  // Warm yellow for H1
  h2Color: "#FFE983",
  // Warm yellow for H2
  h3Color: "white",
  // Warm yellow for H3
  h4Color: "#FFE983",
  // Warm yellow for H4
  h5Color: "#FFE983",
  // Warm yellow for H5
  // Text colors
  paragraphColor: "#FFFFFF",
  // White for paragraphs (was black)
  linkColor: "#FFE983",
  // Warm yellow for links
  linkHoverColor: "#FFD700",
  // Slightly darker yellow for hover
  secondaryTextColor: "#CCCCCC",
  // Light gray for secondary text
  // Special elements
  navTextColor: "#FFFFFF",
  // White for navigation (was black)
  buttonTextColor: "#FFFFFF",
  // White for button text
  buttonBgColor: "#FFE983",
  // Warm yellow for button background
  buttonHoverBgColor: "#FFD700",
  // Slightly darker yellow for hover
  navButtonBgColor: "transparent",
  // Transparent for nav buttons
  // Form elements
  inputTextColor: "#FFFFFF",
  // White for input text (was black)
  inputBorderColor: "#404040",
  // Dark gray for input borders
  inputFocusBorderColor: "#FFE983"
  // Warm yellow for input focus
};
const light = {
  background: "#FFFFFF",
  backgroundLight: "#F8F9FA",
  backgroundDark: "#E2E8F0",
  backgroundA: "rgba(255, 255, 255, 0.8)",
  backgroundA50: "rgba(255, 255, 255, 0.5)",
  primary: "maroon",
  // Maroon for primary
  accent: "maroon",
  // Using same color for accent to ensure consistency
  error: "#FF6A00",
  text: "#000000",
  // Pure black for text
  // Text colors
  colorTextTitle: "#000000",
  // Black for titles
  colorTextBody: "#000000",
  // Black for body text
  colorTextLight: "#4A5568",
  // Dark gray for light text
  // Border colors
  borderLight: "rgba(0, 0, 0, 0.1)",
  // Light border
  borderDark: "rgba(0, 0, 0, 0.2)",
  // Dark border
  // Heading colors - Maroon gradient
  h1Color: "maroon",
  // Maroon for H1
  h2Color: "maroon",
  // Maroon for H2
  h3Color: "#303F9F",
  // Medium indigo for H3
  h4Color: "#3949AB",
  // Lighter indigo for H4
  h5Color: "#3F51B5",
  // Lightest indigo for H5
  // Text colors
  paragraphColor: "#000000",
  // Pure black for paragraphs
  linkColor: "maroon",
  // Maroon for links
  linkHoverColor: "#800000",
  // Darker maroon for hover
  secondaryTextColor: "#8892B0",
  // Muted blue-gray for secondary text
  // Special elements
  navTextColor: "#000000",
  // Pure black for navigation
  buttonTextColor: "#FFFFFF",
  // White for button text
  buttonBgColor: "maroon",
  // Maroon for button background
  buttonHoverBgColor: "#800000",
  // Darker maroon for hover
  navButtonBgColor: "transparent",
  // Transparent for nav buttons
  // Form elements
  inputTextColor: "#000000",
  // Pure black for input text
  inputBorderColor: "#E2E8F0",
  // Light gray for input borders
  inputFocusBorderColor: "maroon"
  // Maroon for input focus
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
  );
}
const layerStyles = squish(`
  @layer theme, base, components, layout;
`);
const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);
const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const notFoundPoster = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCABAAEADAREAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABAYDBQABBwL/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAA5V08yLHoDDYNgxJHRa8hFEklbmS9AoObTssxD6/KwqJ6VRg4APobRBbZj3O5QslX1GlT21TtokddVIHubc7rotmtg0vhhlBMtofQzWMe2qits4MULqvSbGlenLMibq3QhVZWsVXV6BHLM8lcqXKySlWe0besFLm6rgBirP8A/8QAJBAAAgICAgMBAAIDAAAAAAAAAgMAAQQFERIGITETFDIgIiP/2gAIAQEAAT8A2eWY49zPdbGl/hgl1dVzUt74dVEIqmWVzea2qximxTa3lUpdyllF4pFXyIxDptepoEF+NVcDD7B6mev+UsqqbTRf9ruVqxD7UHXK5jEgu+BmMpY8EU1D080NXUwMcWBVjD3YY43XaZO9pz+OZ1F+P2D7HA0LuIxWPLmbUixw4mHtmoZzRTxzzCl8Uwo/OY0vsE2du08c2Fc0DLmXjJbj9g4mH+aFl2nkmTTWlQwoDSD5cwfGGtP2MzPHLQn+sDVuSfYJh5TxDofMHHbkDdDN1rWJu7uovCY0vVQNI66/rMLZoAuPU2mWgkWVwtoi2WHqIpLq7DxMNqkD7nkmekyuvU0P4tZ7qGKgD0NTHYX6fZsmM/iX7v5GtMX37v7NLmECq7XLyLeF0E3K2U/3PGkXXu5lF/pP/8QAGxEAAwEBAAMAAAAAAAAAAAAAAAECERASICH/2gAIAQIBAT8AbG/WRiejXMFJhKKrCZQ5MMF2xs0Q0Io0pb2R8rrrBUJmjrDdMPEuBJokS0uCVghDKXIof0tYIR//xAAbEQADAQEBAQEAAAAAAAAAAAAAAQIREhAgMf/aAAgBAwEBPwCCV8MsRCwXumlkoVCo00Q0OWRJEHJhhnnJKwz5Xzpp0I06Js0ejbQrIKYxEswuNOcI/CvP/9k=";
const notFoundVideo = "/assets/notfound-Cfa33_DP.mp4";
const flatlinePoster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsRAAALEQF/ZF+RAAACnElEQVQ4y1VU4ZrbIAyzwc3dbft2P/f+T7lrAniS7dBb+xHaAJYly+ifX58uoqLa8GzSMHc1jC69dTGM1rCigm1Llk+ZPuScQy6Ohf9ribsLv/fH62mP3jHFafwnkMYCp46HdZWjmzwsQQCBoENsXPI1sB/jEoImyB0+fiGefRwHssLBJTFL8olgwEbwJj8Ok7eHBRiPngD4e/ZKJkdbZLd2eGK5gsHv93cZeH/NJWM66OYiZekYhzUE7wFymMWhc1hIyoTcybzJ1FkAmT3Z8L99fvyM4E+gfF0Th7ER2ZBBQ4YEMowHmHBEwngM7LnsiKR8aQAgpGhBMDhrEwye2NTPiaULS0PGGEWc2ZFR0ues+ZZ2CCNYe8jqGmbQqJ1vgGtOsTd7IBKlaXghyIiMMyipUjJuvAq0N0gTMiIY5IHHxAAkkKzhHJkTiEXveGe3rfSWJAb1zVqQJgGeI8kzU+rudEW5hsUOcLquSSTcshxi9DKznjNt1mqjxCEPoAGAwaJrnBXuWiVd2sVzoT6tMmbt7LzYNF7Fosak5tkWZbpVTBZkXBHo1VgsLIcU41U2Z3KUy87BjgTAymylFhSPSIzSpXXKetmWEnOOVlAB6tkrlI1MjPoy+6Tsm16MVDjrUiCRqd41k2g+BsvMpZyke7agXsG1Cnb3gNyWjH7IgCKvfYa+4DxVy3XZyemkPGteskTStdj/c5RWwBepuKe2a5g9xqq5uvlmay+becjQ6pJj0/Z2A2z77PtSv7Gk5lOzZxIsS89vApQYmaWyZ+JwAtUNy4Pq+8ZULdvyhq2iuGq1RlqYgBtA9AaSLUn7JpVX+qt0avLS+XaTfjeus5sna5DRwt7qL/3y3t61kapFywO7e7PPfFv4/k3zcPwDeTTjchlA+6QAAAAASUVORK5CYII=";
const flatlineVideo = "/assets/flatline-DaiGY3H4.mp4";
const icon$3 = "_icon_1tdl1_2";
const styles$r = {
  icon: icon$3
};
const sprites = "/assets/icons-CLenu7_4.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$r.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const text$5 = "_text_1bnf5_2";
const styles$q = {
  text: text$5
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$q.text, className),
      "data-align": align,
      "data-size": size,
      "data-weight": weight,
      "data-secondary": secondary,
      ...rest,
      children
    }
  );
};
const loader$4 = "_loader_1o1zt_2";
const text$4 = "_text_1o1zt_17";
const span = "_span_1o1zt_43";
const loaderSpan = "_loaderSpan_1o1zt_1";
const styles$p = {
  loader: loader$4,
  text: text$4,
  span,
  loaderSpan
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$p.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$p.loader, className),
        "data-center": center,
        style: cssProps({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$p.span })
      }
    );
  }
);
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
    TransitionContent,
    {
      enterTimeout,
      exitTimeout,
      in: show,
      initial,
      ...props,
      children
    }
  ) });
};
const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show
}) => {
  const [status, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show)
      return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show)
      return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible, status, nodeRef });
};
const button$4 = "_button_8clau_2";
const text$3 = "_text_8clau_134";
const loader$3 = "_loader_8clau_147";
const icon$2 = "_icon_8clau_160";
const styles$o = {
  button: button$4,
  text: text$3,
  loader: loader$3,
  icon: icon$2
};
function isExternalLink(href) {
  return href == null ? void 0 : href.includes("://");
}
const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
  }
  return /* @__PURE__ */ jsx(
    ButtonContent,
    {
      unstable_viewTransition: true,
      as: Link$1,
      prefetch: "intent",
      to: href,
      ref,
      ...rest
    }
  );
});
const ButtonContent = forwardRef(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon: icon2,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }, ref) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classes(styles$o.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon2,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$o.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$o.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$o.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
            Loader,
            {
              ref: nodeRef,
              className: styles$o.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible
            }
          ) })
        ]
      }
    );
  }
);
const hidden = "_hidden_1mhmf_2";
const styles$n = {
  hidden
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$n.hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text$2 = "_text_1v07c_2";
const glyph = "_glyph_1v07c_9";
const value = "_value_1v07c_16";
const styles$m = {
  text: text$2,
  glyph,
  value
};
const glyphs = [
  "ਅ",
  "ਆ",
  "ਇ",
  "ਈ",
  "ਉ",
  "ਊ",
  "ਏ",
  "ਐ",
  "ਓ",
  "ਔ",
  "ਕ",
  "ਖ",
  "ਗ",
  "ਘ",
  "ਙ",
  "ਚ",
  "ਛ",
  "ਜ",
  "ਝ",
  "ਞ",
  "ਟ",
  "ਠ",
  "ਡ",
  "ਢ",
  "ਣ",
  "ਤ",
  "ਥ",
  "ਦ",
  "ਧ",
  "ਨ",
  "ਪ",
  "ਫ",
  "ਬ",
  "ਭ",
  "ਮ",
  "ਯ",
  "ਰ",
  "ਲ",
  "ਵ",
  "ਸ਼",
  "ਸ",
  "ਹ",
  "ਲ਼",
  "ਖ਼",
  "ਗ਼",
  "ਜ਼",
  "ਫ਼",
  "ੰ",
  "ੱ",
  "ਂ"
];
const CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content2, output, position) {
  if (!output || output.length < content2.length) {
    output = content2.map(() => ({ type: CharType.Glyph, value: "" }));
  }
  return content2.map((value2, index2) => {
    if (index2 < position) {
      return { type: CharType.Value, value: value2 };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    if (!output[index2] || output[index2].value === void 0) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index2].value };
  });
}
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container2 = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    useEffect(() => {
      if (!container2.current)
        return;
      const containerInstance = container2.current;
      const content2 = text2.split("");
      output.current = content2.map(() => ({ type: CharType.Glyph, value: "" }));
      let animation;
      const renderOutput = () => {
        if (!containerInstance)
          return;
        try {
          const characterMap = output.current.map((item2) => {
            return `<span class="${styles$m[item2.type]}">${item2.value || ""}</span>`;
          });
          containerInstance.innerHTML = characterMap.join("");
        } catch (error) {
          console.error("Error rendering decoder text:", error);
        }
      };
      const unsubscribeSpring = decoderSpring.on("change", (value2) => {
        try {
          output.current = shuffle(content2, output.current, value2);
          renderOutput();
        } catch (error) {
          console.error("Error in decoder animation:", error);
        }
      });
      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content2.length);
      };
      if (start && !animation && !reduceMotion) {
        startSpring();
      }
      if (reduceMotion) {
        output.current = content2.map((value2, index2) => ({
          type: CharType.Value,
          value: content2[index2] || ""
        }));
        renderOutput();
      }
      return () => {
        unsubscribeSpring == null ? void 0 : unsubscribeSpring();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$m.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$m.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$m.content, ref: container2 })
    ] });
  }
);
const heading = "_heading_uf9bl_2";
const styles$l = {
  heading
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$l.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};
const page = "_page_1usxa_2";
const videoContainer = "_videoContainer_1usxa_22";
const video = "_video_1usxa_22";
const credit = "_credit_1usxa_78";
const details$2 = "_details_1usxa_102";
const text$1 = "_text_1usxa_115";
const title$5 = "_title_1usxa_122";
const titleFlatline = "_titleFlatline_1usxa_123";
const subheading = "_subheading_1usxa_155";
const description$4 = "_description_1usxa_185";
const button$3 = "_button_1usxa_204";
const styles$k = {
  page,
  videoContainer,
  video,
  credit,
  details: details$2,
  text: text$1,
  title: title$5,
  titleFlatline,
  subheading,
  description: description$4,
  button: button$3
};
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInterval(callback, delay2, reset) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay2 !== null) {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current))
      return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]);
  return intersect;
}
function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
function usePrevious(value2) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value2;
  }, [value2]);
  return ref.current;
}
function useScrollToHash() {
  const scrollTimeout = useRef();
  const location2 = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location2.pathname) {
            onDone == null ? void 0 : onDone();
            navigate(`${location2.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location2.pathname]
  );
  return scrollToHash;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error) {
      reject(`Error loading ${srcSet}: ${error}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob)
        throw new Error("Video thumbnail failed to load");
      const image2 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image$3 = "_image_1rksn_2";
const container$1 = "_container_1rksn_42";
const elementWrapper = "_elementWrapper_1rksn_49";
const placeholder = "_placeholder_1rksn_71";
const element = "_element_1rksn_49";
const button$2 = "_button_1rksn_104";
const styles$j = {
  image: image$3,
  container: container$1,
  elementWrapper,
  placeholder,
  element,
  button: button$2
};
const Image$1 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder: placeholder2,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$j.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder: placeholder2,
          ...rest
        }
      )
    }
  );
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc)
      return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted)
      return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$j.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
              className: styles$j.element,
              "data-loaded": loaded,
              "data-cover": cover,
              autoPlay: !reduceMotion,
              onLoadStart: onLoad,
              src: videoSrc,
              "aria-label": alt,
              ref: videoRef,
              ...rest
            }
          ),
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$j.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
          "img",
          {
            className: styles$j.element,
            "data-loaded": loaded,
            "data-cover": cover,
            onLoad,
            decoding: "async",
            src: showFullRes ? src : void 0,
            srcSet: showFullRes ? srcSet : void 0,
            width,
            height,
            alt,
            sizes,
            ...rest
          }
        ),
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$j.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
            decoding: "async",
            loading: "lazy",
            alt: "",
            role: "presentation"
          }
        )
      ]
    }
  );
};
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
const flatlineSkull = "/assets/error-flatline-Cq9GDXuU.svg";
function Error$1({ error }) {
  const flatlined = !error.status;
  const getMessage = () => {
    switch (error.status) {
      case 404:
        return {
          summary: "Error: redacted",
          message: "This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you."
        };
      case 405:
        return {
          summary: "Error: method denied",
          message: error.data
        };
      default:
        return {
          summary: "Error: anomaly",
          message: error.statusText || error.data || error.toString()
        };
    }
  };
  const { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsxs("section", { className: styles$k.page, children: [
    flatlined && /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: #4361EE;
              --accent: #4361EE;
            }
            [data-theme='light'] {
              --primary: #4361EE;
              --accent: #4361EE;
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsx(Transition, { in: true, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$k.details, children: /* @__PURE__ */ jsxs("div", { className: styles$k.text, children: [
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$k.title,
            "data-visible": visible,
            level: 0,
            weight: "bold",
            children: error.status
          }
        ),
        flatlined && /* @__PURE__ */ jsxs(
          Heading,
          {
            className: styles$k.titleFlatline,
            "data-visible": visible,
            level: 2,
            as: "h1",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx("use", { href: `${flatlineSkull}#skull` }) }),
              /* @__PURE__ */ jsx(DecoderText, { text: "Flatlined", start: visible, delay: 300 })
            ]
          }
        ),
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            "aria-hidden": true,
            className: styles$k.subheading,
            "data-visible": visible,
            as: "h2",
            level: 4,
            children: /* @__PURE__ */ jsx(DecoderText, { text: summary2, start: visible, delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: styles$k.description, "data-visible": visible, as: "p", children: message }),
        flatlined ? /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$k.button,
            "data-visible": visible,
            href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
            icon: "chevron-right",
            children: "Emotional support"
          }
        ) : /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$k.button,
            "data-visible": visible,
            href: "/",
            icon: "chevron-right",
            children: "Back to homepage"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$k.videoContainer, "data-visible": visible, children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            reveal: true,
            cover: true,
            noPauseButton: true,
            delay: 600,
            className: styles$k.video,
            src: flatlined ? flatlineVideo : notFoundVideo,
            placeholder: flatlined ? flatlinePoster : notFoundPoster
          }
        ),
        flatlined ? /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$k.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0318871/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Berserk (1997)"
          }
        ) : /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$k.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0113568/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Ghost in the Shell (1995)"
          }
        )
      ] })
    ] }) })
  ] });
}
const monogram = "_monogram_4z95r_2";
const highlight = "_highlight_4z95r_7";
const styles$i = {
  monogram,
  highlight
};
const Monogram = forwardRef(({ highlight: highlight2, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}-monogram-clip`;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      zoomAndPan: "magnify",
      viewBox: "0 0 900 899.99999",
      preserveAspectRatio: "xMidYMid meet",
      version: "1.0",
      className: classes(styles$i.monogram, className),
      width: "48",
      height: "29",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("clipPath", { id: clipId, children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "#000000",
              d: "M 738.640625 191.0625 L 665.171875 619.125 C 655.847656 673.515625 649.121094 708.476562 649.121094 724.28125 C 649.121094 753.746094 663.003906 768.59375 690.5625 768.59375 C 737.269531 768.59375 806.972656 717.09375 899.660156 614.34375 L 886.96875 679.5 C 784.695312 789.4375 692.710938 844.285156 611.269531 844.285156 C 543.488281 844.285156 509.476562 809.082031 509.476562 738.417969 C 509.476562 714.949219 514.980469 675.183594 526.238281 618.902344 L 560.738281 445.714844 C 555.507812 445.714844 392.484375 697.902344 357.140625 733.144531 C 282.882812 807.15625 213.179688 844.285156 148.03125 844.285156 C 49.339844 844.285156 0 782.488281 0 659.136719 C 0 522.835938 54.367188 389.664062 162.871094 259.121094 C 274.976562 123.789062 412.21875 56.25 574.152344 56.25 C 640.96875 56.25 710.910156 59.121094 783.972656 64.628906 C 745.410156 227.160156 640.035156 125.710938 442.164062 125.710938 C 356.894531 125.710938 288.867188 179.601562 237.847656 287.148438 C 177.976562 414.335938 148.03125 528.589844 148.03125 630.148438 C 148.03125 703.691406 169.589844 740.339844 212.699219 740.339844 C 252.941406 740.339844 310.679688 698.164062 386.347656 613.621094 C 461.792969 529.320312 579.183594 363.019531 636.1875 254.507812 L 738.644531 191.0625 Z M 738.640625 191.0625 ",
              fillOpacity: "1",
              fillRule: "nonzero"
            }
          ),
          " "
        ] }) }),
        /* @__PURE__ */ jsx("rect", { clipPath: `url(#${clipId})`, width: "100%", height: "100%" }),
        highlight2 && /* @__PURE__ */ jsx("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsx("rect", { className: styles$i.highlight, width: "100%", height: "100%" }) })
      ]
    }
  );
});
const toggle$1 = "_toggle_nug4b_2";
const inner = "_inner_nug4b_17";
const icon$1 = "_icon_nug4b_25";
const styles$h = {
  toggle: toggle$1,
  inner,
  icon: icon$1
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$h.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$h.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$h.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$h.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const toggle = "_toggle_sct3t_2";
const circle = "_circle_sct3t_30";
const mask = "_mask_sct3t_55";
const path = "_path_sct3t_73";
const styles$g = {
  toggle,
  circle,
  mask,
  path
};
const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$g.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": true, className: styles$g.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx("circle", { className: styles$g.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx("circle", { className: styles$g.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$g.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: styles$g.circle,
            mask: `url(#${maskId})`,
            cx: "19",
            cy: "19",
            r: "12"
          }
        )
      ] })
    }
  );
};
const name$2 = "Arjan Singh Jassal";
const role = "Developer";
const disciplines = [
  "Designer",
  "Video Editor",
  "Leader"
];
const url$1 = "https://arjansinghjassal.xyz";
const location = "New Delhi, India";
const timezone = "IST";
const bluesky = "arjansinghjassal.xyz";
const figma = "@Arjan";
const github = "jassalarjan";
const LinkedIn = "https://www.linkedin.com/in/arjan-singh-jassal-296b9a250/";
const phone = "+91 8447054647";
const email = "jassalarjansingh@gmail.com";
const repo = "https://github.com/HamishMW/portfolio";
const socialLinks$2 = {
  github: "https://github.com/jassalarjan",
  linkedin: "https://www.linkedin.com/in/arjan-singh-jassal-296b9a250/",
  twitter: "https://twitter.com/arjansingh"
};
const ascii = "__  __  __\n\\ \\ \\ \\ \\∕\n \\ \\∕\\ \\\n  \\∕  \\∕\n";
const config = {
  name: name$2,
  role,
  disciplines,
  url: url$1,
  location,
  timezone,
  bluesky,
  figma,
  github,
  LinkedIn,
  phone,
  email,
  repo,
  socialLinks: socialLinks$2,
  ascii
};
const navLinks = [
  {
    label: "About",
    pathname: "/#details"
  },
  {
    label: "Projects",
    pathname: "/projects"
  },
  {
    label: "Contact",
    pathname: "/contact"
  }
];
const socialLinks$1 = [
  // {
  //   label: 'Bluesky',
  //   url: `https://bsky.app/profile/${config.bluesky}`,
  //   icon: 'bluesky',
  // },
  {
    label: "Figma",
    url: `https://www.figma.com/${config.figma}`,
    icon: "figma"
  },
  {
    label: "Github",
    url: `https://github.com/${config.github}`,
    icon: "github"
  },
  {
    label: "LinkedIn",
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: "linkedin"
    // Ensure your icon library has this
  },
  {
    label: "Phone",
    url: `tel:${config.phone}`,
    icon: "phone"
    // Use a phone icon from your icon library
  },
  {
    label: "Email",
    url: `mailto:${config.email}`,
    icon: "envelope"
    // Some libraries use 'envelope' instead of 'gmail'
  }
];
const navbar = "_navbar_7ulfe_2";
const logo = "_logo_7ulfe_27";
const nav = "_nav_7ulfe_2";
const navList = "_navList_7ulfe_51";
const navLink = "_navLink_7ulfe_59";
const navIcons = "_navIcons_7ulfe_102";
const navIconLink = "_navIconLink_7ulfe_126";
const navIcon = "_navIcon_7ulfe_102";
const mobileNav = "_mobileNav_7ulfe_147";
const mobileNavLink = "_mobileNavLink_7ulfe_177";
const styles$f = {
  navbar,
  logo,
  nav,
  navList,
  navLink,
  navIcons,
  navIconLink,
  navIcon,
  mobileNav,
  mobileNavLink
};
const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location2 = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();
  useEffect(() => {
    setCurrent(`${location2.pathname}${location2.hash}`);
  }, [location2]);
  useEffect(() => {
    if (!target || location2.pathname !== "/")
      return;
    setCurrent(`${location2.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location2.pathname, scrollToHash, target]);
  useEffect(() => {
    const navItems = document.querySelectorAll("[data-navbar-item]");
    const inverseTheme = theme === "dark" ? "light" : "dark";
    const { innerHeight } = window;
    let inverseMeasurements = [];
    let navItemMeasurements = [];
    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };
    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = "";
      }
    };
    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );
      if (!invertedElements)
        return;
      inverseMeasurements = Array.from(invertedElements).map((item2) => ({
        element: item2,
        top: item2.offsetTop,
        bottom: item2.offsetTop + item2.offsetHeight
      }));
      const { scrollY } = window;
      resetNavTheme();
      for (const inverseMeasurement of inverseMeasurements) {
        if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
          continue;
        }
        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = "";
          }
        }
      }
    };
    if (theme === "light") {
      navItemMeasurements = Array.from(navItems).map((item2) => {
        const rect = item2.getBoundingClientRect();
        return {
          element: item2,
          top: rect.top,
          bottom: rect.bottom
        };
      });
      document.addEventListener("scroll", handleInversion);
      handleInversion();
    }
    return () => {
      document.removeEventListener("scroll", handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location2.key]);
  const getCurrent = (url2 = "") => {
    const nonTrailing = (current == null ? void 0 : current.endsWith("/")) ? current == null ? void 0 : current.slice(0, -1) : current;
    if (url2 === nonTrailing) {
      return "page";
    }
    return "";
  };
  const handleNavItemClick = (event) => {
    const hash = event.currentTarget.href.split("#")[1];
    setTarget(null);
    if (hash && location2.pathname === "/") {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = (event) => {
    handleNavItemClick(event);
    if (menuOpen)
      setMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: styles$f.navbar, ref: headerRef, children: [
    /* @__PURE__ */ jsx(
      Link$1,
      {
        unstable_viewTransition: true,
        prefetch: "intent",
        to: location2.pathname === "/" ? "/#intro" : "/",
        "data-navbar-item": true,
        className: styles$f.logo,
        "aria-label": `${config.name}, ${config.role}`,
        onClick: handleMobileNavClick,
        children: /* @__PURE__ */ jsx(Monogram, { highlight: true })
      }
    ),
    /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs("nav", { className: styles$f.nav, children: [
      /* @__PURE__ */ jsx("div", { className: styles$f.navList, children: navLinks.map(({ label: label2, pathname }) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          "data-navbar-item": true,
          className: styles$f.navLink,
          "aria-current": getCurrent(pathname),
          onClick: handleNavItemClick,
          children: label2
        },
        label2
      )) }),
      /* @__PURE__ */ jsx(NavbarIcons, { desktop: true })
    ] }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("nav", { className: styles$f.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(({ label: label2, pathname }, index2) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          className: styles$f.mobileNavLink,
          "data-visible": visible,
          "aria-current": getCurrent(pathname),
          onClick: handleMobileNavClick,
          style: cssProps({
            transitionDelay: numToMs(
              Number(msToNum(tokens.base.durationS)) + index2 * 50
            )
          }),
          children: label2
        },
        label2
      )),
      /* @__PURE__ */ jsx(NavbarIcons, {}),
      /* @__PURE__ */ jsx(ThemeToggle, { isMobile: true })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx(ThemeToggle, { "data-navbar-item": true })
  ] });
};
const NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx("div", { className: styles$f.navIcons, children: socialLinks$1.map(({ label: label2, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx(
  "a",
  {
    "data-navbar-item": desktop || void 0,
    className: styles$f.navIconLink,
    "aria-label": label2,
    href: url2,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ jsx(Icon, { className: styles$f.navIcon, icon: icon2 })
  },
  label2
)) });
const progress = "_progress_3typo_2";
const styles$e = {
  progress
};
function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);
  useEffect(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  useEffect(() => {
    if (!progressRef.current)
      return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(
      progressRef.current.getAnimations({ subtree: true }).map((animation) => animation.finished)
    ).then(() => {
      if (controller.signal.aborted)
        return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles$e.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}
const container = "_container_j3vhn_2";
const skip = "_skip_j3vhn_12";
const styles$d = {
  container,
  skip
};
const reset_module = {};
const global_module = {};
const links$1 = () => [
  {
    rel: "preload",
    href: GothamMedium,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: GothamBook,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "shortcut_icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
  { rel: "author", href: "/humans.txt", type: "text/plain" }
];
const loader$2 = async ({ request, context }) => {
  const { url: url2 } = request;
  const { pathname } = new URL(url2);
  const pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2;
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  const theme = session.get("theme") || "dark";
  return json(
    { canonicalUrl, theme },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
};
function App() {
  var _a;
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  if ((_a = fetcher.formData) == null ? void 0 : _a.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark" },
      { action: "/api/set-theme", method: "post" }
    );
  }
  useEffect(() => {
    console.info(
      `${config.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config.repo}

`
    );
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx(Progress, {}),
        /* @__PURE__ */ jsx(VisuallyHidden, { showOnFocus: true, as: "a", className: styles$d.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(
          "main",
          {
            id: "main-content",
            className: styles$d.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary$1() {
  const error = useRouteError();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": "light", children: [
      /* @__PURE__ */ jsx(Error$1, { error }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$1,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
const { name: name$1, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name$1,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name$1 },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name$1 },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}
const projects = [
  {
    id: 1,
    title: "Ferrous Crete",
    img: "/images/projects/1.jpg",
    url: "https://www.projects.arjansinghjassal.xyz/ferr/"
  },
  {
    id: 2,
    title: "Liberty Market (Template)",
    img: "/images/projects/2.jpg",
    url: "https://www.projects.arjansinghjassal.xyz/Liberty_Market/"
  },
  {
    id: 3,
    title: "The Digilogous 8.0",
    img: "/images/projects/3.jpg",
    url: "https://www.projects.arjansinghjassal.xyz/digi8/"
  },
  {
    id: 4,
    title: "The Digilogous 9.0",
    img: "/images/projects/4.jpg",
    url: "https://www.projects.arjansinghjassal.xyz/digi9/"
  },
  {
    id: 5,
    title: "The Digilogous 10.0",
    img: "/images/projects/5.jpg",
    url: "https://digilogous.rdpschool.edu.in/"
  },
  {
    id: 6,
    title: "Zing Enterprises",
    img: "/images/projects/6.jpg",
    url: "https://zingenterprises.com/"
  },
  {
    id: 7,
    title: "Safety & Quality Forum",
    img: "/images/projects/7.jpg",
    url: "https://sqfiei.in/"
  },
  {
    id: 8,
    title: "Safety Convention 2023",
    img: "/images/projects/8.jpg",
    url: "https://www.sqfiei.in/safety_convention_2023/index.php"
  },
  {
    id: 9,
    title: "AADHYA INTEGRATED SOLUTIONS (AIS)",
    img: "/images/projects/9.jpg",
    url: "https://www.arjanwebcraft.com/ais2024/"
  },
  {
    id: 10,
    title: "Arjan Web Craft",
    img: "/images/projects/10.jpg",
    url: "https://www.arjanwebcraft.com/"
  },
  {
    id: 11,
    title: "AWC Invoice",
    img: "/images/projects/11.jpg",
    url: "https://www.gurunanakdev.org/awcinvoice/"
  },
  {
    id: 12,
    title: "Perfect Zone",
    img: "/images/projects/12.jpg",
    url: "https://www.gurunanakdev.org/perfectzones/"
  },
  {
    id: 13,
    title: "CineGlobe Productions",
    img: "/images/projects/13.jpg",
    url: "https://www.arjanwebcraft.com/cineglobeproductions/"
  },
  {
    id: 14,
    title: "Institute of Engineers India Delhi State Centre (IEI)",
    img: "/images/projects/14.jpg",
    url: "https://ieidsc.in"
  },
  {
    id: 15,
    title: "Aakriti India",
    img: "/images/projects/15.jpg",
    url: "https://www.aakriti-india.com/"
  },
  {
    id: 16,
    title: "Softchip",
    img: "/images/projects/16.jpg",
    url: "https://softchip.org/"
  }
];
function ProjectImage({ position, project: project2, onClick, onHover }) {
  const [hovered, setHovered] = useState(false);
  const { scale } = useSpring$1({
    scale: hovered ? 1.3 : 1,
    config: { mass: 1, tension: 280, friction: 60 }
  });
  const handlePointerOver = () => {
    setHovered(true);
    onHover(project2);
  };
  const handlePointerOut = () => {
    setHovered(false);
    onHover(null);
  };
  const handleClick = () => {
    if (project2.url) {
      window.open(project2.url, "_blank", "noopener,noreferrer");
    }
  };
  return /* @__PURE__ */ jsxs(
    animated.mesh,
    {
      position,
      scale,
      onPointerOver: handlePointerOver,
      onPointerOut: handlePointerOut,
      onClick: handleClick,
      children: [
        /* @__PURE__ */ jsx("planeGeometry", { args: [3, 1.5] }),
        /* @__PURE__ */ jsx(
          "meshBasicMaterial",
          {
            map: new THREE.TextureLoader().load(project2.img),
            side: THREE.DoubleSide,
            transparent: true
          }
        )
      ]
    }
  );
}
function Scene({ onClick, onHover }) {
  const radius = useRef(10);
  const groupRef = useRef();
  const mouseYRef = useRef(0);
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        radius.current = 8;
      } else if (window.innerWidth < 1024) {
        radius.current = 9;
      } else {
        radius.current = 10;
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 1e-3;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouseYRef.current * 0.3, 0.05);
    }
  });
  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      mouseYRef.current = (e.clientY / window.innerHeight - 0.5) * 2;
    }, 100);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return /* @__PURE__ */ jsx("group", { ref: groupRef, children: projects.map((project2, index2) => {
    const angle = index2 / projects.length * Math.PI * 2;
    const position = [
      radius.current * Math.cos(angle),
      0,
      radius.current * Math.sin(angle)
    ];
    return /* @__PURE__ */ jsx(
      ProjectImage,
      {
        position,
        project: project2,
        onClick,
        onHover
      },
      project2.id
    );
  }) });
}
function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    setIsClient(true);
    gsap.from(".title-text", {
      opacity: 0,
      y: 30,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);
  const handleHover = (project2) => {
    setIsHovering(!!project2);
    setHoveredProject(project2);
  };
  if (!isClient) {
    return /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Typography, { variant: "h4", children: "Loading..." }) });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#ffffff"
      },
      onMouseLeave: () => {
        setIsHovering(false);
        setHoveredProject(null);
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "title-text",
            style: {
              position: "absolute",
              top: "5%",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#333",
              textAlign: "center",
              zIndex: 5,
              width: "100%",
              padding: "0 1rem",
              "@media (max-width: 768px)": {
                top: "3%"
              },
              "@media (max-width: 480px)": {
                top: "2%"
              }
            },
            children: /* @__PURE__ */ jsx(
              Typography,
              {
                variant: "h1",
                style: {
                  fontWeight: "bold",
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  letterSpacing: "0.1em",
                  color: "#333",
                  marginBottom: "clamp(-3rem, -5vw, -5rem)",
                  "@media (max-width: 768px)": {
                    marginBottom: "clamp(-2rem, -4vw, -3rem)"
                  }
                },
                children: "Projects"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(60vw, 700px)",
              height: "min(60vh, 300px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#333",
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              fontWeight: "bold",
              textAlign: "center",
              background: hoveredProject ? `url(${hoveredProject.img}) center/cover no-repeat` : "transparent",
              boxShadow: hoveredProject ? "0px 8px 30px rgba(0,0,0,0.1)" : "none",
              borderRadius: "2px",
              opacity: isHovering ? 0.9 : 1,
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 10,
              border: hoveredProject ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
              transform: isHovering ? "translate(-50%, -50%) scale(1.05)" : "translate(-50%, -50%)",
              filter: isHovering ? "brightness(1.1)" : "brightness(1)",
              pointerEvents: "none",
              "@media (max-width: 1200px)": {
                width: "min(70vw, 450px)",
                height: "min(70vh, 450px)"
              },
              "@media (max-width: 768px)": {
                width: "min(80vw, 400px)",
                height: "min(80vh, 400px)"
              },
              "@media (max-width: 480px)": {
                width: "min(90vw, 350px)",
                height: "min(90vh, 350px)"
              }
            },
            children: hoveredProject ? /* @__PURE__ */ jsx("div", { style: {
              position: "absolute",
              top: "-2.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 11,
              background: "rgba(255, 255, 255, 0.9)",
              padding: "0.5rem 1.5rem",
              borderRadius: "4px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              border: "1px solid rgba(0,0,0,0.1)",
              "@media (max-width: 768px)": {
                top: "-2rem",
                padding: "0.4rem 1.2rem"
              }
            }, children: /* @__PURE__ */ jsx(
              Typography,
              {
                variant: "h2",
                style: {
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  fontWeight: 600,
                  color: "#333",
                  letterSpacing: "0.05em",
                  opacity: 1,
                  fontFamily: "Gotham, sans-serif",
                  textAlign: "center",
                  margin: 0,
                  pointerEvents: "none",
                  "@media (max-width: 768px)": {
                    fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)"
                  }
                },
                children: hoveredProject.title
              }
            ) }) : /* @__PURE__ */ jsx(
              Typography,
              {
                variant: "h1",
                style: {
                  fontSize: "clamp(1.2rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "#333",
                  letterSpacing: "0.05em",
                  opacity: 0.8,
                  fontFamily: "Gotham, sans-serif",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  margin: "0 auto",
                  pointerEvents: "none",
                  "@media (max-width: 768px)": {
                    fontSize: "clamp(1rem, 2.5vw, 1.8rem)"
                  },
                  "@media (max-width: 480px)": {
                    fontSize: "clamp(0.8rem, 2vw, 1.5rem)"
                  }
                },
                children: /* @__PURE__ */ jsx(DecoderText, { text: "Arjan Singh Jassal", delay: 1500 })
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs(
          Canvas,
          {
            camera: { position: [0, 10, 15], fov: 50 },
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              "@media (max-width: 768px)": {
                height: "100vh"
              }
            },
            children: [
              /* @__PURE__ */ jsx("ambientLight", { intensity: 0.7 }),
              /* @__PURE__ */ jsx("spotLight", { position: [5, 5, 5], intensity: 1.2 }),
              /* @__PURE__ */ jsx(Scene, { onClick: () => {
              }, onHover: handleHover }),
              /* @__PURE__ */ jsx(
                OrbitControls,
                {
                  autoRotate: true,
                  autoRotateSpeed: 0.2,
                  enableZoom: false,
                  minPolarAngle: Math.PI / 3,
                  maxPolarAngle: Math.PI / 2,
                  enablePan: false,
                  minAzimuthAngle: -Math.PI / 2,
                  maxAzimuthAngle: Math.PI / 2
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const footer = "_footer_jl81o_1";
const bubbles = "_bubbles_jl81o_15";
const bubble = "_bubble_jl81o_15";
const content$2 = "_content_jl81o_40";
const image$2 = "_image_jl81o_79";
const craftedBy = "_craftedBy_jl81o_87";
const copyright = "_copyright_jl81o_96";
const styles$c = {
  footer,
  bubbles,
  bubble,
  "bubble-size": "_bubble-size_jl81o_1",
  "bubble-move": "_bubble-move_jl81o_1",
  content: content$2,
  image: image$2,
  craftedBy,
  copyright
};
const Footer = () => {
  const generateBubbles = (count = 10) => {
    return Array.from({ length: count }, (_, index2) => {
      const size = 2 + Math.random() * 3;
      const distance = 6 + Math.random() * 4;
      const position = Math.random() * 100;
      const time = 2 + Math.random() * 2;
      const delay2 = -Math.random() * 4;
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$c.bubble,
          style: {
            "--size": `${size}rem`,
            "--distance": `${distance}rem`,
            "--position": `${position}%`,
            "--time": `${time}s`,
            "--delay": `${delay2}s`
          }
        },
        index2
      );
    });
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs("footer", { className: styles$c.footer, children: [
      /* @__PURE__ */ jsx("div", { className: styles$c.bubbles, children: generateBubbles(15) }),
      /* @__PURE__ */ jsx("div", { className: styles$c.content, children: /* @__PURE__ */ jsxs("div", { className: styles$c.footerContent, children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$c.image,
            href: "https://github.com/jassalarjan",
            target: "_blank",
            rel: "noopener noreferrer",
            style: { backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")' }
          }
        ),
        /* @__PURE__ */ jsx(Link$1, { to: "/humans.txt", className: styles$c.craftedBy, children: "Crafted by yours truly" }),
        /* @__PURE__ */ jsxs("p", { className: styles$c.copyright, children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Arjan Singh Jassal"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("svg", { style: { position: "fixed", top: "100vh" }, children: /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("filter", { id: "blob", children: [
      /* @__PURE__ */ jsx("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "10", result: "blur" }),
      /* @__PURE__ */ jsx(
        "feColorMatrix",
        {
          in: "blur",
          mode: "matrix",
          values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
          result: "blob"
        }
      ),
      /* @__PURE__ */ jsx("feComposite", { in: "SourceGraphic", in2: "blob", operator: "atop" })
    ] }) }) })
  ] });
};
const meta$5 = () => {
  return baseMeta({
    title: "Projects",
    description: `Project portfolio of ${config.name} — showcasing web development and design work.`
  });
};
function Projects() {
  return /* @__PURE__ */ jsxs("div", { style: { height: "100%" }, children: [
    /* @__PURE__ */ jsx(ProjectShowcase, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Projects,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
async function action({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get("theme");
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  session.set("theme", theme);
  return json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action
}, Symbol.toStringTag, { value: "Module" }));
const section$2 = "_section_cvvm4_2";
const styles$b = {
  section: section$2
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$b.section, className), ref, ...rest, children })
);
function FloatingCube() {
  const { theme } = useTheme();
  const primaryColor = theme === "dark" ? "#a29bfe" : "#4834d4";
  const secondaryColor = theme === "dark" ? "#6c5ce7" : "#3867d6";
  const tertiaryColor = theme === "dark" ? "#74b9ff" : "#0097e6";
  const group = useRef();
  const cube1 = useRef();
  const cube2 = useRef();
  const cube3 = useRef();
  const cube4 = useRef();
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
    }
    if (cube1.current) {
      cube1.current.rotation.x += delta * 0.5;
      cube1.current.rotation.z += delta * 0.3;
      cube1.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
    if (cube2.current) {
      cube2.current.rotation.x += delta * 0.4;
      cube2.current.rotation.z -= delta * 0.4;
      cube2.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + 2) * 0.5;
    }
    if (cube3.current) {
      cube3.current.rotation.x -= delta * 0.3;
      cube3.current.rotation.z += delta * 0.5;
      cube3.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + 4) * 0.5;
    }
    if (cube4.current) {
      cube4.current.rotation.x += delta * 0.2;
      cube4.current.rotation.y += delta * 0.4;
      cube4.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + 3) * 0.5;
      cube4.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });
  const darkModeOpacity = theme === "dark" ? 0.9 : 0.8;
  const secondaryOpacity = theme === "dark" ? 0.8 : 0.7;
  const tertiaryOpacity = theme === "dark" ? 0.7 : 0.6;
  return /* @__PURE__ */ jsxs("group", { ref: group, children: [
    /* @__PURE__ */ jsxs(
      "mesh",
      {
        ref: cube1,
        position: [0, 0, 0],
        children: [
          /* @__PURE__ */ jsx("boxGeometry", { args: [1.5, 1.5, 1.5] }),
          /* @__PURE__ */ jsx(
            "meshStandardMaterial",
            {
              color: primaryColor,
              roughness: 0.2,
              metalness: 0.8,
              transparent: true,
              opacity: darkModeOpacity,
              emissive: theme === "dark" ? primaryColor : "#000000",
              emissiveIntensity: theme === "dark" ? 0.3 : 0
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "mesh",
      {
        ref: cube2,
        position: [2, 1, -1],
        scale: 0.8,
        children: [
          /* @__PURE__ */ jsx("boxGeometry", { args: [1, 1, 1] }),
          /* @__PURE__ */ jsx(
            "meshStandardMaterial",
            {
              color: secondaryColor,
              roughness: 0.4,
              metalness: 0.6,
              transparent: true,
              opacity: secondaryOpacity,
              emissive: theme === "dark" ? secondaryColor : "#000000",
              emissiveIntensity: theme === "dark" ? 0.2 : 0
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "mesh",
      {
        ref: cube3,
        position: [-2, -1, -2],
        scale: 0.6,
        children: [
          /* @__PURE__ */ jsx("boxGeometry", { args: [1, 1, 1] }),
          /* @__PURE__ */ jsx(
            "meshStandardMaterial",
            {
              color: primaryColor,
              roughness: 0.3,
              metalness: 0.7,
              transparent: true,
              opacity: tertiaryOpacity,
              emissive: theme === "dark" ? primaryColor : "#000000",
              emissiveIntensity: theme === "dark" ? 0.2 : 0
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "mesh",
      {
        ref: cube4,
        position: [-1.5, 1.5, -1],
        scale: 0.5,
        children: [
          /* @__PURE__ */ jsx("boxGeometry", { args: [1, 1, 1] }),
          /* @__PURE__ */ jsx(
            "meshStandardMaterial",
            {
              color: tertiaryColor,
              roughness: 0.3,
              metalness: 0.7,
              transparent: true,
              opacity: tertiaryOpacity,
              emissive: theme === "dark" ? tertiaryColor : "#000000",
              emissiveIntensity: theme === "dark" ? 0.3 : 0
            }
          )
        ]
      }
    )
  ] });
}
const contact = "_contact_1ezp2_2";
const canvasContainer = "_canvasContainer_1ezp2_12";
const contactSection = "_contactSection_1ezp2_27";
const contactContent = "_contactContent_1ezp2_38";
const title$4 = "_title_1ezp2_58";
const description$3 = "_description_1ezp2_72";
const contactGrid = "_contactGrid_1ezp2_77";
const contactInfo = "_contactInfo_1ezp2_87";
const socialLinks = "_socialLinks_1ezp2_87";
const subtitle = "_subtitle_1ezp2_93";
const contactItem = "_contactItem_1ezp2_103";
const iconWrapper = "_iconWrapper_1ezp2_115";
const icon = "_icon_1ezp2_115";
const label = "_label_1ezp2_142";
const socialGrid = "_socialGrid_1ezp2_147";
const socialLink = "_socialLink_1ezp2_87";
const socialIcon = "_socialIcon_1ezp2_189";
const officeHours = "_officeHours_1ezp2_200";
const officeTitle = "_officeTitle_1ezp2_217";
const officeTime = "_officeTime_1ezp2_222";
const styles$a = {
  contact,
  canvasContainer,
  contactSection,
  contactContent,
  title: title$4,
  description: description$3,
  contactGrid,
  contactInfo,
  socialLinks,
  subtitle,
  contactItem,
  iconWrapper,
  icon,
  label,
  socialGrid,
  socialLink,
  socialIcon,
  officeHours,
  officeTitle,
  officeTime
};
const meta$4 = () => {
  return baseMeta({
    title: "Contact",
    description: "Get in touch with me for any inquiries or collaboration opportunities."
  });
};
const Contact = () => {
  var _a, _b, _c;
  const { theme } = useTheme();
  return /* @__PURE__ */ jsxs("div", { className: styles$a.contact, children: [
    /* @__PURE__ */ jsx("div", { className: styles$a.canvasContainer, children: /* @__PURE__ */ jsxs(Canvas, { camera: { position: [0, 0, 5] }, children: [
      /* @__PURE__ */ jsx("ambientLight", { intensity: theme === "dark" ? 0.8 : 0.5 }),
      /* @__PURE__ */ jsx("pointLight", { position: [10, 10, 10], intensity: theme === "dark" ? 1.5 : 1, color: theme === "dark" ? "#ffffff" : "#4834d4" }),
      /* @__PURE__ */ jsx("pointLight", { position: [-10, -10, -10], intensity: theme === "dark" ? 0.8 : 0.5, color: theme === "dark" ? "#a29bfe" : "#3867d6" }),
      /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(FloatingCube, {}) }),
      /* @__PURE__ */ jsx(OrbitControls, { enableZoom: false, autoRotate: true, autoRotateSpeed: 0.5 })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { className: styles$a.contactSection, children: /* @__PURE__ */ jsxs("div", { className: styles$a.contactContent, children: [
      /* @__PURE__ */ jsx(Heading, { level: 2, weight: "bold", className: styles$a.title, children: "Let's Connect" }),
      /* @__PURE__ */ jsx(Text, { size: "5", className: styles$a.description, children: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions." }),
      /* @__PURE__ */ jsxs("div", { className: styles$a.contactGrid, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$a.contactInfo, children: [
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx(Heading, { level: 4, weight: "medium", className: styles$a.subtitle, children: "Contact Information" }),
          /* @__PURE__ */ jsxs("div", { className: styles$a.contactItem, children: [
            /* @__PURE__ */ jsx("div", { className: styles$a.iconWrapper, children: /* @__PURE__ */ jsx(Mail, { className: styles$a.icon }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Text, { size: "s", className: styles$a.label, children: "Email: " }),
              /* @__PURE__ */ jsx(Text, { size: "m", children: config.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$a.contactItem, children: [
            /* @__PURE__ */ jsx("div", { className: styles$a.iconWrapper, children: /* @__PURE__ */ jsx(Phone, { className: styles$a.icon }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Text, { size: "s", className: styles$a.label, children: "Phone: " }),
              /* @__PURE__ */ jsx(Text, { size: "m", children: config.phone })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$a.contactItem, children: [
            /* @__PURE__ */ jsx("div", { className: styles$a.iconWrapper, children: /* @__PURE__ */ jsx(MapPin, { className: styles$a.icon }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Text, { size: "s", className: styles$a.label, children: "Location: " }),
              /* @__PURE__ */ jsx(Text, { size: "m", children: config.location })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$a.socialLinks, children: [
          /* @__PURE__ */ jsx(Heading, { level: 3, weight: "medium", className: styles$a.subtitle, children: "Connect With Me" }),
          /* @__PURE__ */ jsxs("div", { className: styles$a.socialGrid, children: [
            ((_a = config.socialLinks) == null ? void 0 : _a.github) && /* @__PURE__ */ jsxs("a", { href: config.socialLinks.github, className: styles$a.socialLink, target: "_blank", rel: "noreferrer", children: [
              /* @__PURE__ */ jsx(Github, { className: styles$a.socialIcon }),
              /* @__PURE__ */ jsx(Text, { size: "s", children: "GitHub" })
            ] }),
            ((_b = config.socialLinks) == null ? void 0 : _b.linkedin) && /* @__PURE__ */ jsxs("a", { href: config.socialLinks.linkedin, className: styles$a.socialLink, target: "_blank", rel: "noreferrer", children: [
              /* @__PURE__ */ jsx(Linkedin, { className: styles$a.socialIcon }),
              /* @__PURE__ */ jsx(Text, { size: "s", children: "LinkedIn" })
            ] }),
            ((_c = config.socialLinks) == null ? void 0 : _c.twitter) && /* @__PURE__ */ jsxs("a", { href: config.socialLinks.twitter, className: styles$a.socialLink, target: "_blank", rel: "noreferrer", children: [
              /* @__PURE__ */ jsx(Twitter, { className: styles$a.socialIcon }),
              /* @__PURE__ */ jsx(Text, { size: "s", children: "Twitter" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$a.officeHours, children: [
            /* @__PURE__ */ jsx(Heading, { level: 5, className: styles$a.officeTitle, children: "Available Hours" }),
            /* @__PURE__ */ jsx(Text, { size: "m", className: styles$a.officeTime, children: "Monday - Friday" }),
            /* @__PURE__ */ jsxs(Text, { size: "m", className: styles$a.officeTime, children: [
              "9:00 AM - 5:00 PM ",
              config.timezone
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const profileImg = "/assets/profile-Di5wgZQ0.jpg";
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
const intro = "_intro_3kkdt_1";
const text = "_text_3kkdt_9";
const name = "_name_3kkdt_36";
const title$3 = "_title_3kkdt_74";
const row$1 = "_row_3kkdt_78";
const word = "_word_3kkdt_107";
const introTextReveal = "_introTextReveal_3kkdt_1";
const line$1 = "_line_3kkdt_183";
const introLine = "_introLine_3kkdt_1";
const scrollIndicator = "_scrollIndicator_3kkdt_232";
const introScrollIndicator = "_introScrollIndicator_3kkdt_1";
const mobileScrollIndicator = "_mobileScrollIndicator_3kkdt_298";
const introMobileScrollIndicator = "_introMobileScrollIndicator_3kkdt_1";
const styles$9 = {
  intro,
  text,
  name,
  title: title$3,
  row: row$1,
  word,
  introTextReveal,
  line: line$1,
  introLine,
  scrollIndicator,
  introScrollIndicator,
  mobileScrollIndicator,
  introMobileScrollIndicator
};
const DisplacementSphere = lazy(
  () => import("./displacement-sphere-C2WKpZbQ.js").then((module) => ({ default: module.DisplacementSphere }))
);
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines: disciplines2 } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines2.slice(0, -1).join(", "), disciplines2.slice(-1)[0]].join(
    ", and "
  );
  const currentDiscipline = disciplines2.find((item2, index2) => index2 === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  useInterval(
    () => {
      const index2 = (disciplineIndex + 1) % disciplines2.length;
      setDisciplineIndex(index2);
    },
    5e3,
    theme
  );
  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);
  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$9.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx(Transition, { in: true, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        isHydrated && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(DisplacementSphere, {}) }),
        /* @__PURE__ */ jsxs("header", { className: styles$9.text, children: [
          /* @__PURE__ */ jsx("h1", { className: styles$9.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx(
            DecoderText,
            {
              text: config.name,
              delay: 500
            }
          ) }),
          /* @__PURE__ */ jsxs(Heading, { level: 0, as: "h2", className: styles$9.title, children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$9.label, children: `${config.role} + ${introLabel}` }),
            /* @__PURE__ */ jsxs("span", { "aria-hidden": true, className: styles$9.row, children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: styles$9.word,
                  "data-status": status,
                  style: cssProps({ delay: tokens.base.durationXS }),
                  children: config.role
                }
              ),
              /* @__PURE__ */ jsx("span", { className: styles$9.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx("div", { className: styles$9.row, children: disciplines2.map((item2) => /* @__PURE__ */ jsx(
              Transition,
              {
                unmount: true,
                in: item2 === currentDiscipline,
                timeout: { enter: 3e3, exit: 2e3 },
                children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    ref: nodeRef,
                    className: styles$9.word,
                    "data-plus": true,
                    "data-status": status2,
                    style: cssProps({ delay: tokens.base.durationL }),
                    children: item2
                  }
                )
              },
              item2
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            to: "/#project-1",
            className: styles$9.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Link$1,
          {
            to: "/#project-1",
            className: styles$9.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}
const divider = "_divider_ucnqf_2";
const line = "_line_ucnqf_8";
const notch = "_notch_ucnqf_30";
const styles$8 = {
  divider,
  line,
  notch
};
const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: classes(styles$8.divider, className),
    style: cssProps(
      {
        lineWidth,
        lineHeight,
        notchWidth,
        notchHeight,
        collapseDelay: numToMs(collapseDelay)
      },
      style
    ),
    ...rest,
    children: [
      /* @__PURE__ */ jsx("div", { className: styles$8.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$8.notch,
          "data-collapsed": collapsed,
          style: cssProps({ collapseDelay: numToMs(collapseDelay + 160) })
        }
      )
    ]
  }
);
Divider.defaultProps = {
  lineWidth: "100%",
  lineHeight: "2px",
  notchWidth: "90px",
  notchHeight: "10px",
  collapsed: false,
  collapseDelay: 0
};
const link = "_link_131ei_2";
const styles$7 = {
  link
};
const VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href == null ? void 0 : href.split(".").pop());
  return (href == null ? void 0 : href.includes("://")) || (href == null ? void 0 : href[0]) === "#" || isValidExtension;
}
const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href == null ? void 0 : href.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
    const targetValue = target || (isExternal ? "_blank" : void 0);
    const linkProps = {
      className: classes(styles$7.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    if (isAnchor(href)) {
      return /* @__PURE__ */ jsx("a", { ...linkProps, href, children });
    }
    return /* @__PURE__ */ jsx(Link$1, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children });
  }
);
const arjan = "/assets/arjan-DR-bVyLd.svg";
const profile = "_profile_s38cy_1";
const content$1 = "_content_s38cy_37";
const column = "_column_s38cy_50";
const title$2 = "_title_s38cy_59";
const description$2 = "_description_s38cy_70";
const tag = "_tag_s38cy_80";
const tagText = "_tagText_s38cy_93";
const image$1 = "_image_s38cy_114";
const svg$1 = "_svg_s38cy_119";
const button$1 = "_button_s38cy_135";
const styles$6 = {
  profile,
  content: content$1,
  column,
  title: title$2,
  description: description$2,
  tag,
  tagText,
  image: image$1,
  svg: svg$1,
  button: button$1
};
const ProfileText = ({ visible, titleId }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Heading, { className: styles$6.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "Hi there", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsxs(Text, { className: styles$6.description, "data-visible": visible, size: "l", as: "p", children: [
    "I'm Arjan, currently I live in Delhi, India working as a senior full stack developer at ",
    "",
    /* @__PURE__ */ jsx(Link, { href: "https://www.arjanwebcraft.com", children: "Arjan Web Craft" }),
    ". My projects include websites, PWA's and Canva Designs. Being comfortable with code allows me to rapidly prototype and validate experiences."
  ] }),
  /* @__PURE__ */ jsx(Text, { className: styles$6.description, "data-visible": visible, size: "l", as: "p", children: "I am an ambitious full-stack developer with a foundation in web development, Python, and digital content creation. Seeking a role to apply my technical and creative skills in digital transformation, user experience, and data insights, while expanding expertise in web technologies and analytics." })
] });
const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$6.profile,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$6.content, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$6.column, children: [
          /* @__PURE__ */ jsx(ProfileText, { visible: visible2, titleId }),
          /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              className: styles$6.button,
              "data-visible": visible2,
              href: "/contact",
              icon: "send",
              children: "Contact me"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$6.column, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$6.tag, "aria-hidden": true, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles$6.tagText, "data-visible": visible2, children: "About me" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$6.image, children: [
            /* @__PURE__ */ jsx(
              Image$1,
              {
                reveal: true,
                delay: 100,
                placeholder: profileImg,
                src: profileImg,
                width: 960,
                height: 1280,
                sizes: `(max-width: ${media.mobile}px) 100vw, 480px`,
                alt: "Me making a pose for official pic"
              }
            ),
            /* @__PURE__ */ jsx("svg", { className: styles$6.svg, "data-visible": visible2, viewBox: "0 0 136 766", children: /* @__PURE__ */ jsx("use", { href: `${arjan}#arjan-profile` }) })
          ] })
        ] })
      ] }) })
    }
  );
};
const iphone11 = "/assets/iphone-11-DGIHa_Ph.glb";
const macbookPro = "/assets/macbook-pro-DZn-FKKF.glb";
const ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open"
};
const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen
  }
};
const summary = "_summary_18fi6_1";
const content = "_content_18fi6_35";
const details$1 = "_details_18fi6_66";
const preview = "_preview_18fi6_93";
const model = "_model_18fi6_108";
const loader$1 = "_loader_18fi6_162";
const svg = "_svg_18fi6_171";
const index = "_index_18fi6_212";
const indexNumber = "_indexNumber_18fi6_221";
const title$1 = "_title_18fi6_242";
const description$1 = "_description_18fi6_261";
const button = "_button_18fi6_280";
const styles$5 = {
  summary,
  content,
  details: details$1,
  preview,
  model,
  loader: loader$1,
  svg,
  index,
  indexNumber,
  title: title$1,
  description: description$1,
  button
};
const Model = lazy(
  () => import("./index-D-XJX1dy.js").then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  model: model2,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === "light" ? 0.7 : 1;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  useEffect(() => {
    if (sectionVisible) {
      const timer = setTimeout(() => {
        setModelLoaded(true);
      }, 1e3);
      return () => clearTimeout(timer);
    }
  }, [sectionVisible]);
  function handleModelLoad() {
    setModelLoaded(true);
  }
  function renderarjan(device, visible) {
    return /* @__PURE__ */ jsx(
      "svg",
      {
        type: "project",
        "data-visible": visible && modelLoaded,
        "data-light": theme === "light",
        style: cssProps({ opacity: svgOpacity }),
        className: styles$5.svg,
        "data-device": device,
        viewBox: "0 0 751 136",
        children: /* @__PURE__ */ jsx("use", { href: `${arjan}#arjan-project` })
      }
    );
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: styles$5.details,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        children: [
          /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$5.index, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("span", { className: styles$5.indexNumber, "data-visible": visible, children: indexText })
          ] }),
          /* @__PURE__ */ jsx(
            Heading,
            {
              level: 3,
              as: "h2",
              className: styles$5.title,
              "data-visible": visible,
              id: titleId,
              children: title2
            }
          ),
          /* @__PURE__ */ jsx(Text, { className: styles$5.description, "data-visible": visible, as: "p", children: description2 }),
          /* @__PURE__ */ jsx("div", { className: styles$5.button, "data-visible": visible, children: /* @__PURE__ */ jsx(
            Button,
            {
              iconHoverShift: true,
              href: buttonLink,
              iconEnd: "arrow-right",
              style: {
                transform: isHovered ? "translateX(10px)" : "translateX(0)",
                transition: "transform 0.3s ease"
              },
              children: buttonText
            }
          ) })
        ]
      }
    );
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: styles$5.preview,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        children: [
          model2.type === "laptop" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
            renderarjan("laptop", visible),
            /* @__PURE__ */ jsxs("div", { className: styles$5.model, "data-device": "laptop", children: [
              !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$5.loader, "data-visible": visible }),
              isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
                Model,
                {
                  alt: model2.alt,
                  cameraPosition: { x: 0, y: 0, z: 8 },
                  showDelay: 700,
                  onLoad: handleModelLoad,
                  show: visible,
                  models: [
                    {
                      ...deviceModels.laptop,
                      texture: {
                        ...model2.textures[0],
                        sizes: laptopSizes
                      }
                    }
                  ]
                }
              ) })
            ] })
          ] }),
          model2.type === "phone" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
            renderarjan("phone", visible),
            /* @__PURE__ */ jsxs("div", { className: styles$5.model, "data-device": "phone", children: [
              !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$5.loader, "data-visible": visible }),
              isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
                Model,
                {
                  alt: model2.alt,
                  cameraPosition: { x: 0, y: 0, z: 8 },
                  showDelay: 700,
                  onLoad: handleModelLoad,
                  show: visible,
                  models: [
                    {
                      ...deviceModels.phone,
                      texture: {
                        ...model2.textures[0],
                        sizes: phoneSizes
                      }
                    },
                    {
                      ...deviceModels.phone,
                      texture: {
                        ...model2.textures[1],
                        sizes: phoneSizes
                      }
                    }
                  ]
                }
              ) })
            ] })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$5.summary,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles$5.content, children: /* @__PURE__ */ jsx(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails(visible),
          renderPreview(visible)
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderPreview(visible),
          renderDetails(visible)
        ] })
      ] }) }) })
    }
  );
}
const home = "_home_p5cxy_1";
const styles$4 = {
  home
};
const skills = [
  { name: "HTML5", level: 100 },
  { name: "CSS3", level: 100 },
  { name: "JavaScript", level: 95 },
  { name: "PHP", level: 95 },
  { name: "React", level: 90 },
  { name: "JSON", level: 75 },
  { name: "JQUERY", level: 70 },
  { name: "GIT & GITHUB", level: 85 },
  { name: "PWA", level: 85 },
  { name: "WORDPRESS & WIX", level: 80 },
  { name: "Python", level: 90 },
  { name: "DJANGO", level: 65 },
  { name: "FLASK", level: 50 }
];
const SkillBadge = ({ name: name2, level, isVisible }) => /* @__PURE__ */ jsx("div", { className: "skill-badge", children: /* @__PURE__ */ jsxs("div", { className: "skill-info", children: [
  /* @__PURE__ */ jsx("span", { className: "skill-name", children: name2 }),
  /* @__PURE__ */ jsx("br", {}),
  /* @__PURE__ */ jsx("div", { className: "skill-bar", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `skill-level ${isVisible ? "animate" : ""}`,
      style: { "--skill-level": `${level}%` }
    }
  ) })
] }) });
function Skill() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry2]) => {
        if (entry2.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry2.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
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
  return /* @__PURE__ */ jsx("section", { className: "skills-technologies", ref: sectionRef, children: /* @__PURE__ */ jsxs("div", { className: "contet", children: [
    /* @__PURE__ */ jsx("h2", { children: "Skills & Technologies" }),
    /* @__PURE__ */ jsx("p", { style: { lineHeight: "1.5", padding: "1rem" }, children: "With over 5 years of experience in web development, I specialize in creating robust and scalable websites using cutting-edge technologies." }),
    /* @__PURE__ */ jsx("div", { className: "skills-grid", children: skills.map((skill, index2) => /* @__PURE__ */ jsx(SkillBadge, { ...skill, isVisible }, index2)) })
  ] }) });
}
const timelineData = [
  {
    id: 1,
    type: "education",
    date: "2022",
    title: "Secondary School",
    institution: "Rukmini Devi Public School Affiliated by CBSE",
    details: "Completed my secondary education with 92% marks."
  },
  {
    id: 2,
    type: "education",
    date: "2024",
    title: "Senior Secondary School",
    institution: "Rukmini Devi Public School Affiliated by CBSE",
    details: "Completed my senior secondary education with 82% marks."
  },
  {
    id: 3,
    type: "work",
    date: "2024",
    title: "Web Developer Intern",
    institution: "Zap Infotech",
    details: "Focused on advanced topics in html, css, js and php. Made a project in php."
  },
  {
    id: 4,
    type: "education",
    date: "2024",
    title: "Full Stack Web Development Course",
    institution: " TGC Institute",
    details: "Focused on advanced topics in machine learning, big data analytics, and statistical modeling. Completed a project on predictive analytics for e-commerce platforms."
  },
  {
    id: 5,
    type: "work",
    date: "2024 October - Present",
    title: "Digital Marketing Intern",
    institution: "Zing Enterprises",
    details: "Social media marketing for a company. Contributed to web and social media projects, focusing on branding and digital content creation."
  },
  {
    id: 6,
    type: "education",
    date: "2024 - Present",
    title: "Pursuing (BCA)",
    institution: "Maharishi Dayanand University",
    details: "I am currently pursuing my Bachelor of Computer Applications (BCA) degree at Maharishi Dayanand University, which is renowned university in India."
  }
];
const TimelineItem = ({ item: item2, isVisible, index: index2 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index2 * 0.2
      }
    }
  };
  const contentVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1 }
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: `timeline-item ${item2.type} ${isVisible ? "animate" : ""}`,
      variants: itemVariants,
      initial: "hidden",
      animate: isVisible ? "visible" : "hidden",
      onHoverStart: () => setIsHovered(true),
      onHoverEnd: () => setIsHovered(false),
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "timeline-content",
          animate: {
            y: isHovered ? -5 : 0,
            boxShadow: isHovered ? "0 8px 40px rgba(var(--text-rgb), 0.15)" : "0 4px 30px rgba(var(--text-rgb), 0.1)"
          },
          transition: { duration: 0.4 },
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "timeline-icon",
                animate: {
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0,
                  backgroundColor: isHovered ? "var(--accent)" : "var(--primary)"
                },
                transition: { duration: 0.4 },
                children: item2.type === "education" ? /* @__PURE__ */ jsx(FaGraduationCap, {}) : /* @__PURE__ */ jsx(FaBriefcase, {})
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "timeline-info", children: [
              /* @__PURE__ */ jsx("h3", { children: item2.title }),
              /* @__PURE__ */ jsx("p", { className: "timeline-date", children: item2.date }),
              /* @__PURE__ */ jsx("p", { className: "timeline-institution", children: item2.institution }),
              /* @__PURE__ */ jsx(AnimatePresence, { children: isExpanded && /* @__PURE__ */ jsx(
                motion.p,
                {
                  className: "timeline-details",
                  variants: contentVariants,
                  initial: "collapsed",
                  animate: "expanded",
                  exit: "collapsed",
                  transition: { duration: 0.3 },
                  children: item2.details
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx(
              motion.button,
              {
                className: "timeline-expand-btn",
                onClick: () => setIsExpanded(!isExpanded),
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.95 },
                children: isExpanded ? /* @__PURE__ */ jsx(FaChevronUp, {}) : /* @__PURE__ */ jsx(FaChevronDown, {})
              }
            )
          ]
        }
      )
    }
  );
};
const CareerTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry2]) => {
        if (entry2.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
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
  return /* @__PURE__ */ jsxs("section", { className: "career-timeline", ref: timelineRef, children: [
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        children: "My Work"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "timeline", children: timelineData.map((item2, index2) => /* @__PURE__ */ jsx(
      TimelineItem,
      {
        item: item2,
        isVisible,
        index: index2
      },
      item2.id
    )) })
  ] });
};
const CareerTimeline$1 = CareerTimeline;
const sprImage = "/assets/slice-app-large-DCQ_Riuo.jpg";
const gamestackLoginImage = "/assets/gamestack-login-7l-e1wPG.jpg";
const gamestackListImage = "/assets/gamestack-list-fQ3EsShG.jpg";
const sliceAppImage = "/assets/slice-app-BC2t3P_9.jpg";
const links = () => {
  return [
    {
      rel: "prefetch",
      href: "/draco/draco_wasm_wrapper.js",
      as: "script",
      type: "text/javascript",
      importance: "low"
    },
    {
      rel: "prefetch",
      href: "/draco/draco_decoder.wasm",
      as: "fetch",
      type: "application/wasm",
      importance: "low"
    }
  ];
};
const meta$3 = () => {
  return baseMeta({
    title: "Designer + Developer",
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`
  });
};
const Home = ({ visible: sectionVisible }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro2 = useRef();
  useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details2 = useRef();
  useEffect(() => {
    const sections = [intro2, details2, projectOne, projectTwo, projectThree];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2))
              return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    sections.forEach((section2) => {
      sectionObserver.observe(section2.current);
    });
    indicatorObserver.observe(intro2.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("div", { className: styles$4.home, children: [
    /* @__PURE__ */ jsx(
      Intro,
      {
        id: "intro",
        sectionRef: intro2,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx(
      Profile,
      {
        sectionRef: details2,
        visible: visibleSections.includes(details2.current),
        id: "details"
      }
    ),
    /* @__PURE__ */ jsx(CareerTimeline$1, { id: "career" }),
    /* @__PURE__ */ jsx(Skill, { id: "skill" }),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-1",
        sectionRef: projectOne,
        visible: visibleSections.includes(projectOne.current),
        index: 1,
        title: /* @__PURE__ */ jsx(DecoderText, { text: "Designing the future of Audits with Zing", delay: 1500 }),
        description: "Designing a platform to deliver better audits",
        buttonText: "View project",
        buttonLink: "https://www.zingenterprises.co.in/",
        model: {
          type: "laptop",
          alt: "Zing Enterprises",
          key: "project-1-model",
          textures: [
            {
              src: sprImage,
              placeholder: sprImage
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-2",
        alternate: true,
        sectionRef: projectTwo,
        visible: visibleSections.includes(projectTwo.current),
        index: 2,
        title: /* @__PURE__ */ jsx(DecoderText, { text: "Shubham Polybags (SPM)", delay: 1500 }),
        description: "Design and development for a video game tracking app built in React Native",
        buttonText: "View website",
        buttonLink: "https://shubhambags.com/",
        model: {
          type: "phone",
          alt: "App login screen",
          key: "project-2-model",
          textures: [
            {
              src: gamestackLoginImage,
              placeholder: gamestackLoginImage
            },
            {
              src: gamestackListImage,
              placeholder: gamestackListImage
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-3",
        sectionRef: projectThree,
        visible: visibleSections.includes(projectThree.current),
        index: 3,
        title: /* @__PURE__ */ jsx(DecoderText, { text: "Safety Convention 2023", delay: 1500 }),
        buttonText: "View project",
        buttonLink: "https://www.sqfiei.in/safety_convention_2023/index.php",
        description: 'Safety Convention was organized to arrange a platform to collaborate with industries, organizations, corporates and individuals with focus on the most important "thing" required these days; that is relearning and re-emphasizing the basics.',
        model: {
          type: "laptop",
          alt: "Annotating a biomedical image in the Slice app",
          key: "project-3-model",
          textures: [
            {
              src: sliceAppImage,
              placeholder: sliceAppImage
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  links,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const usesBackgroundPlaceholder = "/assets/uses-background-placeholder-ppC4yTdE.jpg";
const usesBackground = "/assets/uses-background-DVBwh5G1.mp4";
const list = "_list_1ecfb_2";
const item = "_item_1ecfb_15";
const styles$3 = {
  list,
  item
};
const List = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsx(Element, { className: classes(styles$3.list, className), ...rest, children });
};
const ListItem = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx("li", { className: styles$3.item, ...rest, children });
};
const table = "_table_1ajow_2";
const row = "_row_1ajow_7";
const head = "_head_1ajow_16";
const headCell = "_headCell_1ajow_21";
const cell = "_cell_1ajow_26";
const styles$2 = {
  table,
  row,
  head,
  headCell,
  cell
};
const Table = ({ children }) => /* @__PURE__ */ jsx("table", { className: styles$2.table, children });
const TableRow = ({ children }) => /* @__PURE__ */ jsx("tr", { className: styles$2.row, children });
const TableBody = ({ children }) => /* @__PURE__ */ jsx("tbody", { className: styles$2.body, children });
const TableHeadCell = ({ children }) => /* @__PURE__ */ jsx("th", { className: styles$2.headCell, children });
const TableCell = ({ children }) => /* @__PURE__ */ jsx("td", { className: styles$2.cell, children });
const project = "_project_7xwsz_20";
const section$1 = "_section_7xwsz_29";
const sectionInner = "_sectionInner_7xwsz_44";
const sectionBackground = "_sectionBackground_7xwsz_89";
const backgroundImage = "_backgroundImage_7xwsz_138";
const backgroundImageElement = "_backgroundImageElement_7xwsz_157";
const backgroundScrim = "_backgroundScrim_7xwsz_176";
const header = "_header_7xwsz_192";
const headerContent = "_headerContent_7xwsz_212";
const details = "_details_7xwsz_250";
const title = "_title_7xwsz_262";
const projectFadeSlide = "_projectFadeSlide_7xwsz_1";
const description = "_description_7xwsz_272";
const linkButton = "_linkButton_7xwsz_282";
const meta$2 = "_meta_7xwsz_292";
const metaItem = "_metaItem_7xwsz_307";
const image = "_image_7xwsz_327";
const sectionContent = "_sectionContent_7xwsz_335";
const sectionHeading = "_sectionHeading_7xwsz_358";
const sectionText = "_sectionText_7xwsz_362";
const textRow = "_textRow_7xwsz_369";
const sectionColumns = "_sectionColumns_7xwsz_425";
const styles$1 = {
  project,
  section: section$1,
  sectionInner,
  sectionBackground,
  backgroundImage,
  backgroundImageElement,
  backgroundScrim,
  header,
  headerContent,
  details,
  title,
  projectFadeSlide,
  description,
  linkButton,
  meta: meta$2,
  metaItem,
  image,
  sectionContent,
  sectionHeading,
  sectionText,
  textRow,
  sectionColumns
};
const initDelay = 300;
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles,
  className
}) {
  return /* @__PURE__ */ jsx(Section, { className: classes(styles$1.header, className), as: "section", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$1.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$1.details, children: [
          /* @__PURE__ */ jsx(Heading, { className: styles$1.title, level: 2, as: "h1", children: title2 }),
          /* @__PURE__ */ jsx(Text, { className: styles$1.description, size: "xl", as: "p", children: description2 }),
          !!url2 && /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              iconHoverShift: true,
              className: styles$1.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!(roles == null ? void 0 : roles.length) && /* @__PURE__ */ jsx("ul", { className: styles$1.meta, children: roles == null ? void 0 : roles.map((role2, index2) => /* @__PURE__ */ jsx(
          "li",
          {
            className: styles$1.metaItem,
            style: cssProps({ delay: numToMs(initDelay + 300 + index2 * 140) }),
            children: /* @__PURE__ */ jsx(Text, { secondary: true, children: role2 })
          },
          role2
        )) })
      ]
    }
  ) });
}
const ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx("article", { className: classes(styles$1.project, className), ...rest });
const ProjectSection = forwardRef(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs(
    "section",
    {
      className: classes(styles$1.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$1.sectionBackground,
            style: cssProps({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx(Section, { className: styles$1.sectionInner, "data-padding": padding, children })
      ]
    }
  )
);
const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();
  useParallax(0.6, (value2) => {
    if (!imageRef.current)
      return;
    imageRef.current.style.setProperty("--offset", `${value2}px`);
  });
  return /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$1.backgroundImage, className),
      "data-visible": visible,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx(Image$1, { cover: true, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx("div", { className: styles$1.backgroundScrim, style: cssProps({ opacity }) })
      ]
    }
  ) });
};
const ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$1.sectionContent, className),
    "data-width": width,
    ...rest
  }
);
const ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx(
  Heading,
  {
    className: classes(styles$1.sectionHeading, className),
    as,
    level,
    align: "auto",
    ...rest
  }
);
const ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx(Text, { className: classes(styles$1.sectionText, className), size: "l", as: "p", ...rest });
const ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$1.textRow, className),
    "data-center": center,
    "data-stretch": stretch,
    "data-center-mobile": centerMobile,
    "data-no-margin": noMargin,
    "data-width": width,
    "data-justify": justify,
    ...rest
  }
);
const uses = "_uses_7vfxj_1";
const section = "_section_7vfxj_5";
const styles = {
  uses,
  section
};
const meta$1 = () => {
  return baseMeta({
    title: "Uses",
    description: "A list of hardware and software I use to do my thing"
  });
};
const Uses = () => {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles.uses, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: usesBackground,
          placeholder: usesBackgroundPlaceholder,
          opacity: 0.7
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: "Uses",
          description: "A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Design" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            /* @__PURE__ */ jsx(Link, { href: "https://www.figma.com", children: "Figma" }),
            " is my primary tool for UI design these days. Made the switch from Sketch in 2020 and haven’t looked back. I’ve also created",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.figma.com/@hamish", children: "a few plugins" }),
            " that you can install."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "Any motion graphics I create are created in Adobe After Effects. So far I haven’t found a non-Adobe product that’s as good. If anyone has suggestions please ",
            /* @__PURE__ */ jsx(Link, { href: "/contact", children: "message me" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For any 3D models and video editing I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.blender.org/", children: "Blender" }),
            ". Since 2.8 it’s become way simpler to use and in a lot of ways better than expensive paid tools like 3DS Max or Maya."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Development" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I use ",
            /* @__PURE__ */ jsx(Link, { href: "https://vscodium.com/", children: "VSCodium" }),
            " as my text editor, with the Tokyo Night theme and Operator Mono as my typeface of choice."
          ] }),
          /* @__PURE__ */ jsx(ListItem, { children: "Firefox is my main browser for both development and general use." }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            /* @__PURE__ */ jsx(Link, { href: "https://reactjs.org/", children: "React" }),
            " is my front end Javascript library of choice. The component-centric mental model is the first thing that truly made sense to me as a designer."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For 3D effects and image shaders I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://threejs.org/", children: "three.js" }),
            ". It has a bit of a learning curve but you can do some really powerful stuff with it."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For CSS I’ve used a myriad pre-processors and css-in-js solutions like styled-components, but these days I’m using vanilla CSS with",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://postcss.org/", children: "PostCSS" }),
            " to get upcoming CSS features today."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For Javascript animations I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.framer.com/motion/", children: "Framer Motion" }),
            ", it’s a great way to add spring animations to React and three.js."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For building and testing UI components in isolation I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://storybook.js.org/", children: "Storybook" }),
            ". Check out the",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://storybook.hamishw.com", children: "storybook for this website" }),
            "."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { stretch: true, width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "System" }),
        /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TableBody, { children: [
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Desktop" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Custom built" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Operating system" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Arch Linux (by the way)" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Browser" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Zen Browser" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Monitor" }),
            /* @__PURE__ */ jsx(TableCell, { children: "1440p IPS 144hz LG 27GL850" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Keyboard" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Tofu65" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Mouse" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Logitech G403" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Laptop" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Macbook Pro 14″" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Headphones" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Audio Technica ATH-M50x/Apple Airpods" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Microphone" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Blue Yeti" })
          ] })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uses,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
const meta = () => {
  return [{ title: "404 | Redacted" }];
};
function ErrorBoundary() {
  const error = useRouteError();
  return /* @__PURE__ */ jsx(Error$1, { error });
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-6et6TcbY.js?client-route=1", "imports": ["/assets/components-BUzCadR4.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-OWD4aQ-A.js?client-route=1", "imports": ["/assets/components-BUzCadR4.js", "/assets/style-ub7q8joN.js", "/assets/heading-DrFkACAp.js", "/assets/use-reduced-motion-COWaI8BS.js", "/assets/image-DoYYkU5A.js", "/assets/decoder-text-CwvgDaym.js", "/assets/error-BgIoBpg4.js", "/assets/useWindowSize-KpERjLL2.js", "/assets/config-BVk7xxKa.js"], "css": ["/assets/heading-b70io4en.css", "/assets/image-BEfSh9fQ.css", "/assets/decoder-text-CdS84zvp.css", "/assets/error-DnAlOZum.css", "/assets/root-Dlv_r0hJ.css"] }, "routes/projects._index": { "id": "routes/projects._index", "parentId": "root", "path": "projects", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/projects._index-CCdDI1Lj.js?client-route=1", "imports": ["/assets/config-BVk7xxKa.js", "/assets/components-BUzCadR4.js", "/assets/three.module-usBSO18_.js", "/assets/style-ub7q8joN.js", "/assets/use-reduced-motion-COWaI8BS.js", "/assets/footer-bKDkjF43.js", "/assets/OrbitControls-CzkKav4s.js", "/assets/decoder-text-CwvgDaym.js"], "css": ["/assets/footer-DPpN5Uo8.css", "/assets/decoder-text-CdS84zvp.css"] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-l0sNRNKZ.js?client-route=1", "imports": [], "css": [] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Ct1Bb_s3.js?client-route=1", "imports": ["/assets/components-BUzCadR4.js", "/assets/three.module-usBSO18_.js", "/assets/style-ub7q8joN.js", "/assets/config-BVk7xxKa.js", "/assets/OrbitControls-CzkKav4s.js", "/assets/section-BKNxybaW.js", "/assets/heading-DrFkACAp.js", "/assets/footer-bKDkjF43.js"], "css": ["/assets/section-w-yx8eGG.css", "/assets/heading-b70io4en.css", "/assets/footer-DPpN5Uo8.css", "/assets/route-jH5mI-mV.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Bnl2nq8e.js?client-route=1", "imports": ["/assets/config-BVk7xxKa.js", "/assets/components-BUzCadR4.js", "/assets/style-ub7q8joN.js", "/assets/use-reduced-motion-COWaI8BS.js", "/assets/heading-DrFkACAp.js", "/assets/footer-bKDkjF43.js", "/assets/decoder-text-CwvgDaym.js", "/assets/section-BKNxybaW.js", "/assets/image-DoYYkU5A.js", "/assets/useWindowSize-KpERjLL2.js", "/assets/link-mnOC4JC9.js", "/assets/route-DD604Vix.js"], "css": ["/assets/footer-DPpN5Uo8.css", "/assets/decoder-text-CdS84zvp.css", "/assets/heading-b70io4en.css", "/assets/section-w-yx8eGG.css", "/assets/image-BEfSh9fQ.css", "/assets/link-CD-V8yFX.css", "/assets/route-B0N-VR6s.css"] }, "routes/uses": { "id": "routes/uses", "parentId": "root", "path": "uses", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BaRjaGLi.js?client-route=1", "imports": ["/assets/config-BVk7xxKa.js", "/assets/components-BUzCadR4.js", "/assets/style-ub7q8joN.js", "/assets/heading-DrFkACAp.js", "/assets/use-reduced-motion-COWaI8BS.js", "/assets/footer-bKDkjF43.js", "/assets/link-mnOC4JC9.js", "/assets/image-DoYYkU5A.js", "/assets/section-BKNxybaW.js"], "css": ["/assets/footer-DPpN5Uo8.css", "/assets/link-CD-V8yFX.css", "/assets/heading-b70io4en.css", "/assets/image-BEfSh9fQ.css", "/assets/section-w-yx8eGG.css", "/assets/route-BYg2y_W8.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_-D8ktxSOc.js?client-route=1", "imports": ["/assets/components-BUzCadR4.js", "/assets/style-ub7q8joN.js", "/assets/heading-DrFkACAp.js", "/assets/use-reduced-motion-COWaI8BS.js", "/assets/image-DoYYkU5A.js", "/assets/decoder-text-CwvgDaym.js", "/assets/error-BgIoBpg4.js"], "css": ["/assets/heading-b70io4en.css", "/assets/image-BEfSh9fQ.css", "/assets/decoder-text-CdS84zvp.css", "/assets/error-DnAlOZum.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Bnl2nq8e.js?client-route=1", "imports": ["/assets/config-BVk7xxKa.js", "/assets/components-BUzCadR4.js", "/assets/style-ub7q8joN.js", "/assets/use-reduced-motion-COWaI8BS.js", "/assets/heading-DrFkACAp.js", "/assets/footer-bKDkjF43.js", "/assets/decoder-text-CwvgDaym.js", "/assets/section-BKNxybaW.js", "/assets/image-DoYYkU5A.js", "/assets/useWindowSize-KpERjLL2.js", "/assets/link-mnOC4JC9.js", "/assets/route-DD604Vix.js"], "css": ["/assets/footer-DPpN5Uo8.css", "/assets/decoder-text-CdS84zvp.css", "/assets/heading-b70io4en.css", "/assets/section-w-yx8eGG.css", "/assets/image-BEfSh9fQ.css", "/assets/link-CD-V8yFX.css", "/assets/route-B0N-VR6s.css"] } }, "url": "/assets/manifest-bb03a1d9.js", "version": "bb03a1d9" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/projects._index": {
    id: "routes/projects._index",
    parentId: "root",
    path: "projects",
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/uses": {
    id: "routes/uses",
    parentId: "root",
    path: "uses",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/home/route": {
    id: "routes/home/route",
    parentId: "root",
    path: "/",
    index: true,
    caseSensitive: void 0,
    module: route7
  }
};
export {
  ModelAnimationType as M,
  Transition as T,
  useInViewport as a,
  useWindowSize as b,
  classes as c,
  cssProps as d,
  mode as e,
  assetsBuildDirectory as f,
  basename as g,
  future as h,
  isSpaMode as i,
  entry as j,
  media as m,
  numToMs as n,
  publicPath as p,
  routes as r,
  serverManifest as s,
  useTheme as u
};
