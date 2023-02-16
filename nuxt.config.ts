export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
    },
    modules:     [
        '@pinia/nuxt',
    ],
    experimental: {
        writeEarlyHints: false,
    },
    runtimeConfig: {
        mysql: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        },
        access: {
            group: process.env.ACCESS_GROUP
        }
    }
})

