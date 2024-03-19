// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    ssr: false,
    app: {
        baseURL: '/ana-i-ivan/',
        buildAssetsDir: 'assets',
        head: {
            title: 'Ана и Иван',
            meta: [
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
                {
                    innerHTML: 'JavaScript is required'
                }
            ]
        },
    },
    modules: [
        'nuxt-lodash'
    ],
    css: ['~/assets/scss/main.scss']
});
