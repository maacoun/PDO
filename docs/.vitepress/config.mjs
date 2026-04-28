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
      { text: 'Než začneš', link: '/nez-zacnes' },
      { text: 'Postupy', link: '/postupy' },
    ],

    sidebar: [
      {
        text: 'Než začneš',
        items: [
          { text: 'Přehled aplikace', link: '/nez-zacnes' },
          { text: 'Typy inzerátů', link: '/nez-zacnes#typy-inzeratu' },
          { text: 'Stavy inzerátu', link: '/nez-zacnes#stavy-inzeratu' },
          { text: 'Systém hodnocení', link: '/nez-zacnes#system-hodnoceni-uzivatelu' },
          { text: 'Bezpečné obchodování', link: '/nez-zacnes#bezpecne-obchodovani' },
        ],
      },
      {
        text: 'Postupy',
        items: [
          { text: 'Přihlášení do aplikace', link: '/postupy#_1-prihlaseni-do-aplikace' },
          { text: 'Vytvoření inzerátu', link: '/postupy#_2-vytvoreni-inzeratu' },
          { text: 'Vyhledávání a filtrování', link: '/postupy#_3-vyhledavani-a-filtrovani-zbozi' },
          { text: 'Kontaktování prodejce', link: '/postupy#_4-kontaktovani-prodejce' },
          { text: 'Předání a dokončení', link: '/postupy#_5-predani-zbozi-a-dokonceni-transakce' },
          { text: 'Hodnocení protistrany', link: '/postupy#_6-hodnoceni-protistrany' },
          { text: 'Úprava a smazání', link: '/postupy#_7-uprava-a-smazani-inzeratu' },
          { text: 'Oblíbené inzeráty', link: '/postupy#_8-oblibene-inzeraty' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maacoun/PDO' },
    ],
  },
})
