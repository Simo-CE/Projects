// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        baseURL: "",
        url: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000',
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_colors.scss" as *;'
                }
            }
        }
    }

})
