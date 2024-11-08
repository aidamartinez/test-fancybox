export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  rollupOptions: {
	input: {
	  main: 'index.html',
	  html: 'html.html'
	}
  }
}
