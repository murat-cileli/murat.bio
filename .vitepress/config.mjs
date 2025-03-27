import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Murat Çileli",
  description: "Desc",
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    lang: 'tr-TR',
    outline: false,
    sidebar: false,
    aside: false,
    returnToTopLabel: 'Başa dön',
    
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
