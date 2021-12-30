import * as CSS from 'csstype'

declare module 'csstype' {
  interface Properties {
    ['--accent-color']?: CSS.Property.Color
  }
}
