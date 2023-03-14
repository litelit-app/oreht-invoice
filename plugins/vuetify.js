import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'myCustomTheme',
            themes: {
                myCustomTheme: {
                    dark: false,
                    colors: {
                        surface: '#FFFFFF',
                        primary: '#259238',
                        secondary: '#1E6D74',
                        error: '#A60C00',
                        info: '#A64E00',
                        success: '#00C322',
                        warning: '#FF7800',
                    }
                }
            }
        },
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