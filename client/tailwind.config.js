/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandLightest: "#F5F8F6",
        brandLight: "#E5EDE8",
        brandMain: "#BFD3C5",
        primaryMain: "#D14532",
        primaryLight: "#E8A298",
        secondaryMain: "#212121",
        borderMain: "#ACBEB1",
        neutralGreyLight: "#DDDDDD",
        backgroundDark: "#454545",
        backgroundDarker: "#212121",
        textPrimary: "#212121",
        textSecondary: "#6B6B6B",
        successMain: "#287D3C",
      },
      fontFamily: {
        body: ["Montserrat"],
        poppins: ["'Poppins', sans-serif"],
        sans2: ["roboto"],
        robotoserif: ["'Roboto Serif', serif"],
      },
      fontSize: {
        xxxs: ["0.5rem", { lineHeight: "0.7rem" }],
        xxs: ["0.625rem", { lineHeight: "0.9375rem" }],
        sme: ["0.875em", { lineHeight: "1.25em" }],
        "3.5xl": ["2rem", { lineHeight: "2rem" }],
        "1.5xl": ["1.3125rem", { lineHeight: "1.75rem" }],
        "6.5xl": ["4rem", { lineHeight: "6rem" }],
      },
      boxShadow: {
        card: "0px 4px 10px 5px rgba(230, 230, 230, 0.5)",
        bigCard: "0px 4px 10px 5px rgba(219, 219, 219, 0.25)",
        cardShadow:
          "rgb(0 0 0 / 16%) 0px 6px 12px 0px, rgb(202 202 202 / 26%) 0px 0px 6px 0px, rgb(202 202 202 / 16%) 0px -1px 4px 0px",
      },
      borderRadius: {
        primary: "1.875rem",
        secondary: "50%",
        lgx: "0.625rem",
        third: "0.3125rem",
      },
      inset: {
        primary: "-4.5rem",
      },
      spacing: {
        1.3: "0.3rem",
        1.4: "0.3125",
        2.3: "0.60rem",
        2.7: "0.677rem",
        3.1: "0.75em",
        3.2: "0.9375",
        7.2: "1.8rem",
        13: "3.25rem",
        90: "22rem",
        100: "27rem",
        120: "31.25rem",
        spinner: "42.333333%",
      },
      zIndex: {
        1: "1",
      },
      flex: {
        2: "2 1 0%",
        3: "3 1 0%",
        4: "4 1 0%",
        5: "5 1 0%",
        6: "2 1 0%",
        7: "7 1 0%",
        8: "8 1 0%",
        9: "9 1 0%",
        10: "10 1 0%",
      },
      width: {
        primary: "18%",
        secondary: "60%",
        third: "24%",
        fourth: "48%",
        fifth: "15vw",
        sixth: "4.375rem",
        seventh: "23%",
        eight: "45%",
        ninth: "75vw",
        tenth: "95%",
        eleventh: "30%",
        twelfth: "40vw",
        thirteenth: "25vw",
      },
      height: {
        primary: "29.375rem",
        secondary: "80vh",
      },
      minHeight: {
        primary: "41.5rem",
      },
      objectPosition: {
        primary: "28% 0",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        "3a": "repeat(3, minmax(0, auto))",
        "4a": "repeat(4, minmax(0, auto))",
        "6a": "repeat(6, minmax(0, auto))",
        "7a": "repeat(7, minmax(0, auto))",
        "6s": "repeat(6, 1fr)",
        "8s": "repeat(8, 1fr)",
        "10s": "repeat(10, 1fr)",
        "13s": "repeat(13, 1fr)",
        "14s": "repeat(14, 1fr)",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
    },
  },
  plugins: [],
};
