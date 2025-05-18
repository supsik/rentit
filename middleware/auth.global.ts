export default defineNuxtRouteMiddleware((to, from) => {
  if (true && to.path != '/auth')
    return navigateTo('/auth')
})