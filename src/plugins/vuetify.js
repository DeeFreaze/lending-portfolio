import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: '#ffd700', // #E53935
        secondary: '#bb00ff', // #FFCDD2
        accent: '#04fdd8', // #3F51B5
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        // background: '#000000',
        // tertiary: colors.pink.base,
      },
    },
    dark: true
  },
});
