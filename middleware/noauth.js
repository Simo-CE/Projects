import { auth } from '@mvault/auth'

export default defineNuxtRouteMiddleware(async () => {
  if (await auth.isAuthenticated() == true) {
    return navigateTo('/')
  }
})