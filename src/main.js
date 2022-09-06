import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vue2Filters from 'vue2-filters';
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCaretDown, faCaretUp)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(Vue2Filters);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
