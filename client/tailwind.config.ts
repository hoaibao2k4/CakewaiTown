import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#664545",

        secondary: "#CDB0A9",
        third: "#93BB9E",
        fourth: "#E68E8E",
        fifth: "#E8E1E1",
      },
    },
  },
  plugins: [],
} satisfies Config;
