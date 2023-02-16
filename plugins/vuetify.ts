import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        icons: {
            defaultSet: 'fa',
            aliases,
            sets: {
                fa,
            },
        },
        components,
        directives,
    })

    nuxtApp.vueApp.use(vuetify)
})