import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Murat Çileli",
  description: "Atari 800 XL ile başlayıp; 8086/286/386 PC, Amiga 500 ve 486 PC ile devam eden tutkumu, bugün de aynı heyecanla sürdürüyorum.",
  appearance: false,
  lang: 'tr',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    outline: false,
    sidebar: false,
    aside: false,
    returnToTopLabel: 'Başa dön',

    srcExclude: ['/en/'],
    
    docFooter: {
      prev: false,
      next: false
    },

    nav: [
      { text: 'Hakkımda', link: '/' },
      { text: 'Neler Yaptım?', link: '/neler-yaptim' },
      { text: 'Basında Projelerim', link: '/basinda-projelerim' }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/murat-cileli/' },
      { icon: 'github', link: 'https://github.com/murat-cileli' },
      { icon: 'instagram', link: 'https://www.instagram.com/murat.cileli/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@murat.cileli' }
    ],

  }
})
