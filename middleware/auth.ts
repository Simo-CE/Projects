import { auth } from '@mvault/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (!await auth.isAuthenticated()) {
        return navigateTo('/login')
    }
})
