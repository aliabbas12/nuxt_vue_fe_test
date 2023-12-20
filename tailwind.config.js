/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        success: "#99ffcc",
        error: "#FF6666",
      },
      backgroundColor: {
        "primary-bg": "#f3f3f3",
        "secondary-bg": "#ffffff",
        "success-500": "#99ffcc",
        "success-400": "#99ffcc",
        success: "#99ffcc",
        error: "#FF6666",
      },
      textColor: {
        primary: "#000000",
        secondary: "#999999",
        success: "#99ffcc",
        error: "#FF6666",
      },
      container: {
        center: true,
      },
      fontSize: {
        normal: "15px",
      },
      boxShadow: {
        card: "1px 1px 0px 1px #ccc;",
      },
    },
  },
  plugins: [],
};
