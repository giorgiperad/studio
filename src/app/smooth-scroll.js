// Smooth scroll for anchor links
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href')
        if (href && href.startsWith('#')) {
          const target = document.querySelector(href)
          if (target) {
            e.preventDefault()
            target.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
    })
  })
}
