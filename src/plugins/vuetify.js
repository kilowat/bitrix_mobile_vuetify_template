import Vue from 'vue';
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);

const vuetifySettings = {
  icons: {
    iconfont: 'mdiSvg', // default - only for display purposes
  },
  theme: {
    dark: false,
    options: {
      customProperties: true,
    },
    themes: {
      ligth: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#FFFFFF',
      },
    },
  },
};


export default new Vuetify(vuetifySettings);
