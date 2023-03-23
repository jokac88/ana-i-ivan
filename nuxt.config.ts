// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Ана и Иван',
            meta: [
                // <meta name="description" content="My amazing site">
                {
                    name: 'description',
                    content: 'Ана и Иван'
                },
                {
                    name: 'keywords',
                    content: 'Ана, Иван'
                },
                {
                    name: 'theme-color',
                    content: '#577567'
                }
            ],
            link: [
                {
                    rel: "preconnect",
                    href:
                        "https://fonts.googleapis.com"
                },
                {
                    rel: "preconnect",
                    href:
                        "https://fonts.gstatic.com"
                },
                {
                    rel: "stylesheet",
                    href:
                        "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Roboto+Slab:wght@400;500;700&display=swap"
                }
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                { children: 'JavaScript is required' }
            ]
        },
    },
    modules: ['@vite-pwa/nuxt'],
    pwa: {
        /* your pwa options */
    },
    css: ['@/assets/scss/main.scss']
})
