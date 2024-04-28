// tailwind.config.js

module.exports = {
  content: ["./node_modules/flowbite/**/*.js"], // Define the content for PurgeCSS
  theme: {
    extend: {
      colors: {
        // Your regular color palette
        primary: '#3490dc',
        secondary: '#6574cd',
        // Add your dark mode colors
        dark: {
          primary: '#2b6cb0',
          secondary: '#6b7280',
          // Add other dark mode colors as needed
        },
      },
    },
  },
  variants: {
    extend: {
      // Enable dark mode variants for relevant utilities
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
      // Add more utility variants as needed
    },
  },
  plugins: [
    // Enable the dark mode variant plugin
    require('tailwindcss-dark-mode')(),
    // Include Flowbite plugin
    require('flowbite/plugin'),
    // Add more Tailwind plugins if necessary
  ],
};

