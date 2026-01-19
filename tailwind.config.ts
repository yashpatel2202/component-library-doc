import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "pre": { 
              backgroundColor: "transparent", 
              color: "inherit", 
              fontSize: "inherit",
              padding: 0, 
              margin: 0,
              fontWeight: "inherit"
            },
            "pre code": { 
              backgroundColor: "transparent", 
              color: "inherit", 
              fontSize: "inherit", 
              fontWeight: "inherit" 
            },
            "code": {
              color: "inherit",
              fontWeight: "inherit",
              backgroundColor: "transparent"
            }
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
