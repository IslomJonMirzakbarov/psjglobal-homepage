module.exports = {
  locales: ['en', 'kr'],
  defaultLocale: 'en',
  loadLocaleFrom: (lang, ns) =>
    import(`locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    '*': ['common']
  },
  localeDetection: false
}
