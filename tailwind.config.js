const defaultTheme = require('tailwindcss/defaultTheme')
const customFlexBasisUtil = require('./tailwindcss/config.js')
const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  // purge: [],
  // 關於 target , tailwindcss 使用了很多新的 css 功能 ( 例如 css custom properties )
  // 為了兼容 IE11 需要下 'ie11', 預設為 relaxed , 鑑於官方 document 相關解釋較少 , 下方貼上討論串
  // 相關討論串：https://github.com/tailwindlabs/tailwindcss/discussions/1656#ie-11-target-mode
  target: 'ie11',
  prefix: '',
  important: false,
  separator: ':',
  presets: [],
  theme: {
    ...defaultTheme,
    extend: {
      // breakpoints
      screens: {
        xs: '360px',
        sm: '1024px',
        md: '1280px',
        lg: '1680px'
      },
      spacing: {
        px: '1px',
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        13: '52px',
        14: '56px',
        15: '60px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        white: '#ffffff',
        black: '#292929',
        red: '#ea475b',
        yellow: '##fefbd3',
        green: '#70be20',
        pink: '#ffe9ec',
        primary: '#00afb8',
        secondary: '#eeeeee',
        success: '#70be20',
        info: '#1654b9',
        warning: '#ff843f',
        danger: '##ea475b',
        gray: {
          100: '#f3f3f3',
          200: '#eeeeee',
          400: '#dddddd',
          600: '#a9a9a9',
          800: '#7e7e7e'
        },
        blue: {
          normal: '#1654b9',
          vivid: '#4e91ff',
          turquoise: '#00afb8',
          lake: '#39c8d0',
          eastern: '#028b95',
          egg: '#e6f9fa'
        },
        purple: {
          normal: '#78269f',
          lilac: '#a386d5'
        },
        orange: {
          normal: '#ffab31',
          desert: '#ff843f'
        }
      },
      // border 系列
      borderWidth: {
        1: '1px',
        3: '3px'
      },
      borderRadius: {
        circle: '50%',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px'
      },
      // box-shadow
      boxShadow: {
        border: '0 0 0 1px #292929',
        tooltips: '0 0 4px 0 #d0d0d0'
      },
      // 文本控制系列
      fontFamily: {
        default: ['PingFangTC', '"Microsoft JhengHei"', '微軟正黑體', 'Helvetica', 'Arial', 'Verdana', 'sans-serif']
      },
      fontSize: {
        0: '0px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        28: '28px',
        40: '40px'
      },
      lineHeight: {
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        28: '28px',
        32: '32px',
        38: '38px',
        52: '52px'
      },
      // positoin 系列
      inset: {
        '1/2': '50%'
      },
      // max 系列
      maxHeight: {
        0: '0px',
        auto: 'auto'
      },
      maxWidth: (theme) => ({
        auto: 'auto',
        ...theme('spacing')
      }),
      zIndex: {
        default: 'auto',
        0: '0',
        1: '1',
        2: '2',
        3: '3'
      }
    }

  },
  variants: {
    appearance: []
  },

  // 白名單傳入 [] , 黑名單傳入 {}
  // 白名單 ex: ['margin' , 'padding']
  // 黑名單 ex: { container: false, animation: false}
  corePlugins: {
    container: false,
    animation: false,
    transform: false
  },

  // 可以自己撰寫 plugins 來擴充 variant utilities components etc...
  // 相關文件參考 https://tailwindcss.com/docs/plugins
  // addUtilities https://tailwindcss.com/docs/plugins#adding-utilities
  // addComponents https://tailwindcss.com/docs/plugins#adding-components
  plugins: [
    plugin(function flexBasisUtil ({ addUtilities }) {
      addUtilities(customFlexBasisUtil, [])
    })
  ]
}
