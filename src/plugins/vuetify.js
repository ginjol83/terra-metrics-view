// filepath: c:\Users\andres\Documents\repositories\terra-metrics-view\src\plugins\vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Importa los estilos de MDI


export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})