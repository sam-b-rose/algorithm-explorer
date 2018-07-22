import Vue from 'vue';

import App from './App.vue';
import XParticles from 'x-particles';

// Font Awesome Setup
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';

// Icons
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp';
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle';
import faKeyboard from '@fortawesome/fontawesome-free-solid/faKeyboard';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';

fontawesome.library.add(
  faChevronDown,
  faChevronUp,
  faInfoCircle,
  faKeyboard,
  faLink
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Global Styles
import '@/assets/style.scss';

Vue.use(XParticles);
Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
