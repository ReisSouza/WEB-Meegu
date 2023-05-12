import { globalCss } from '@ionext-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
  },
  body: {
    backgroundColor: '$background',
    color: '$text',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: '$default',

    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },

  'ul, ol': {
    listStyle: 'none',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  button: {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    padding: 0,
    margin: 0,
  },
  'input, textarea, select': {
    border: 0,
    outline: 'none',
    fontFamily: 'inherit',
  },
})
