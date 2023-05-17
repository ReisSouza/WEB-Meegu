export const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL

export const WEB_TITLE = process.env.NEXT_PUBLIC_WEB_TITLE

export const ALLOWED_ROUTES = ['/auth']

export const ROUTES = [
  {
    label: 'Inicio',
    icon: 'home',
    href: '/',
  },
  {
    label: 'Usuários',
    icon: 'users',
    href: '/users',
  },
]
