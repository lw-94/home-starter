// uno.config.ts
import { defineConfig, presetUno, transformerDirectives, presetIcons } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  rules: [
    // background linear
    [
      /bgl-\[(.+)\]/,
      ([, linearColor]) => ({
        background: linearColor
      })
    ],
    // text linear
    [
      /tl-\[(.+)\]/,
      ([, linearColor]) => ({
        background: linearColor,
        '-webkit-background-clip': 'text',
        color: 'transparent'
      })
    ],
    //border linear
    [
      /bdl-\[(.+)\]/,
      ([, linearColor]) => ({
        border: '2px solid',
        'border-image': `${linearColor} 30`,
        'clip-path': 'inset(0 round 2px)'
      })
    ],
    // border
    [
      /bd-\[(.+)\]-?([tblr])?/,
      ([, color, direction]) => {
        const val = `1px solid ${color}`
        if (!direction) {
          return {
            border: val
          }
        }
        const cssPropMap = {
          t: 'border-top',
          b: 'border-bottom',
          l: 'border-left',
          r: 'border-right'
        }
        return {
          [cssPropMap[direction]]: val
        }
      }
    ]
  ],
  shortcuts: {
    'text-e': 'overflow-hidden text-ellipsis whitespace-nowrap'
  },
  theme: {
    colors: {}
    // breakpoints: {
    //   lg: '1440px'
    // }
  },
  presets: [
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/'
    })
  ],
  transformers: [transformerDirectives()]
})
