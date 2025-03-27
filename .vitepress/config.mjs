import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Murat Çileli",
  description: "Teknolojiyle yolculuğum, Atari 800 XL ve Amiga 500 günlerinden beri devam ediyor. 8086’dan 486’ya kadar uzanan dönemi bizzat yaşayarak, bilgisayar dünyasının evrimini yakından takip ettim. Hala her gün yeni şeyler öğrenmenin heyecanını yaşıyorum.",
  appearance: false,
  lang: 'tr-TR',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],

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
