/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Vue Router
 */
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Define some routes and route components( without .default() will give an error )
let routes = [
    { path: '/', component: require('./components/Dashboard.vue').default },
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/users', component: require('./components/Users.vue').default },
    { path: '/profile', component: require('./components/Profile.vue').default },
   // { path: '*', component: require('./components/NotFound.vue').default }
  ]

//Create the router instance and pass the `routes` option
const router = new VueRouter({
    //mode: 'history',
    routes // short for `routes: routes`
  })

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component(
  'not-found',
  require('./components/NotFound.vue').default
);

/**
 * V Form
 */
// Declaring global form messages
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

/**
 * Moment Js - Vue Filter
 */

import moment from 'moment';

Vue.filter('upText', function(text){
  return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){
  return moment(created).format('MMMM Do YYYY');
});
/**
 * Vue Progress Bar
 */
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
  })

/**
 * Sweet Alert
 */
import swal from 'sweetalert2'
window.Swal = swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.Toast = Toast;

/**
 * Laravel Vue Pagination
*/
Vue.component('pagination', require('laravel-vue-pagination'));

/**
 * Global Event Handler
 */
window.Event = new Vue();

/**
 * Vue Gate for authentication , window user gate is also added on master layout
 */
import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// add router in app instance
const app = new Vue({
    router
  }).$mount('#app')