const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
import { Config } from "tailwindcss"

type ThemeType = Config["theme"]
const AceternityUIAnimations:ThemeType  = {
  first: "moveVertical 30s ease infinite",
  second: "moveInCircle 20s reverse infinite",
  third: "moveInCircle 40s linear infinite",
  fourth: "moveHorizontal 40s ease infinite",
  fifth: "moveInCircle 20s ease infinite",
  spotlight: "spotlight 2s ease .75s 1 forwards",
  gradient: "gradient 15s infinite linear",
}

const AceternityUIKeyframe:ThemeType = {
  moveHorizontal: {
    "0%": {
      transform: "translateX(-50%) translateY(-10%)",
    },
    "50%": {
      transform: "translateX(50%) translateY(10%)",
    },
    "100%": {
      transform: "translateX(-50%) translateY(-10%)",
    },
  },
  moveInCircle: {
    "0%": {
      transform: "rotate(0deg)",
    },
    "50%": {
      transform: "rotate(180deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  moveVertical: {
    "0%": {
      transform: "translateY(-50%)",
    },
    "50%": {
      transform: "translateY(50%)",
    },
    "100%": {
      transform: "translateY(-50%)",
    },
  },
  spotlight: {
    "0%": {
      opacity: 0,
      transform: "translate(-72%, -62%) scale(0.5)",
    },
    "100%": {
      opacity: 1,
      transform: "translate(-50%,-40%) scale(1)",
    },
    gradient: {
      "0%":{
        backgroundPosition: "0% 0%",
      },
      "100%":{
        backgroundPosition: "100% 100%",
      },
    }
  }
}


const Configes: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: AceternityUIAnimations,
      keyframes: AceternityUIKeyframe
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default Configes;
