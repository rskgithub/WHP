import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import config from './config'
import './components'

Vue.mixin({
	data: () => ({ config })
});

Vue.config.productionTip = false
new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
