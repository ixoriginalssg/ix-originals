import 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'data-delay'?: string
    'data-target'?: string
    'data-suffix'?: string
    'data-text'?: string
  }
}
