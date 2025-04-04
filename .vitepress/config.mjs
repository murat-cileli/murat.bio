import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Murat Çileli",
  description: "Atari 800 XL ile başlayıp; 8086/286/386 PC, Amiga 500 ve 486 PC ile devam eden tutkumu, bugün de aynı heyecanla sürdürüyorum.",
  appearance: false,
  lang: 'tr',
  head: [['link', { rel: 'icon', type:"image/ico", href: '/favicon.ico' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    outline: false,
    sidebar: false,
    aside: false,
    returnToTopLabel: 'Başa dön',
    docFooter: {
      prev: false,
      next: false
    },

    footer: {
      message: '<a href="https://vitepress.dev/" target="_blank">Vitepress</a>\'e teşekkürler.',
      copyright: '9:1jnjçççfu 8:4cld rlv elhh rgpukd 8:2cşopuvşyvofkş nişşvnfn rfıd 6:4gngşc fcnsg hpö',
    },

    nav: [
      { text: 'Hakkımda', link: '/' },
      { text: 'Neler Yaptım?', link: '/neler-yaptim' },
      { text: 'Basında Projelerim', link: '/basinda-projelerim' }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/murat-cileli/' },
      { icon: 'github', link: 'https://github.com/murat-cileli' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256L55.37 56.42A4.33 4.33 0 0 0 48 59.49M345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32ZM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95ZM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50"/></svg>'
        },
        link: 'https://play.google.com/store/apps/details?id=bio.murat.icindekiler&hl=tr',
        ariaLabel: 'Play Store'
      },
      { icon: 'instagram', link: 'https://www.instagram.com/murat.cileli/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@murat.cileli' },
    ],

  }
})
