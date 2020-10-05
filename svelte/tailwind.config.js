module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.PURGE_CSS === 'true',
    content: ["./src/**/*.svelte", "./src/**/*.html"]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
