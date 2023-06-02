export default defineNuxtConfig({
    ssr: false,
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
    },
    modules: [],
    experimental: {
        writeEarlyHints: false,
    },
    runtimeConfig: {
        smtp: {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        },
        mysql: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            port: process.env.MYSQL_PORT
        },
        access: {
            group: process.env.ACCESS_GROUP
        }
    },
    routeRules: {
        "/": {
            redirect: {
                to: "/invoice",
                statusCode: 301,
            },
        },
    },
})

