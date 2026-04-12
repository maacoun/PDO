import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TULmarket',
  description: 'Uživatelská příručka mobilní aplikace TULmarket – univerzitního bazárku TUL.',
  base: '/PDO/',
  vite: {
    assetsInclude: ['**/*.PNG']
  },
  themeConfig: {
    nav: [
      { text: 'Úvod', link: '/' },
      { text: 'Koncepty', link: '/koncepty' },
      { text: 'Postupy', link: '/postupy' },
    ],

    sidebar: [
      {
        text: 'Koncepty',
        items: [
          { text: 'Přehled aplikace', link: '/koncepty' },
          { text: 'Typy inzerátů', link: '/koncepty#typy-inzerátu' },
          { text: 'Stavy inzerátu', link: '/koncepty#stavy-inzerátu' },
          { text: 'Systém hodnocení', link: '/koncepty#systém-hodnocení-uživatelů' },
          { text: 'Bezpečné obchodování', link: '/koncepty#bezpečné-obchodování' },
        ],
      },
      {
        text: 'Postupy',
        items: [
          { text: 'Přihlášení do aplikace', link: '/postupy#_1-přihlášení-do-aplikace' },
          { text: 'Vytvoření inzerátu', link: '/postupy#_2-vytvoření-inzerátu' },
          { text: 'Vyhledávání a filtrování', link: '/postupy#_3-vyhledávání-a-filtrování-zboží' },
          { text: 'Kontaktování prodejce', link: '/postupy#_4-kontaktování-prodejce' },
          { text: 'Předání a dokončení', link: '/postupy#_5-předání-zboží-a-dokončení-transakce' },
          { text: 'Hodnocení protistrany', link: '/postupy#_6-hodnocení-protistrany' },
          { text: 'Úprava a smazání', link: '/postupy#_7-úprava-a-smazání-inzerátu' },
          { text: 'Oblíbené inzeráty', link: '/postupy#_8-oblíbené-inzeráty' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maacoun/PDO' },
    ],
  },
})
