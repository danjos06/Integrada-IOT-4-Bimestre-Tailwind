// rodar sem node: .\tailwindcss.exe -i .\styles\style.css -o .\styles\output.css --watch

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

