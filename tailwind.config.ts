import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'skm2-orange': '#F4A52D',
        'skm2-dark-orange': '#DE962A',
        'skm2-blue': '#196DBA',
      },
    },
    fontFamily: {
      'body': ['"Open Sans"']
    }
  },
  plugins: [],
};
export default config;
