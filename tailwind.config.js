module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
    plugins: [require('daisyui')],
    daisyui: {
        themes: ["dark"],
        prefix: "daisy-"
      },
};