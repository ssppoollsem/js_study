import Vue from 'vue'
import AppComponent from './components/AppComponent'

new Vue ({
    render: h => h(AppComponent)
}).$mount('#app')