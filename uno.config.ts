import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets:[
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetAttributify(),
  ]
})
