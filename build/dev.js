"use strict"

import Vue from 'vue'
import Notify from '../src/notify'

// Use Notify
Vue.use(Notify)

/* eslint-disable no-new */
new Vue({
  template: '<div><h3>Trigger notification:</h3>' +
  '<button class="btn btn-info mr-1" @click="info">Info</button>' +
  '<button class="btn btn-success mr-1" @click="success">Success</button>' +
  '<button class="btn btn-warning mr-1" @click="warning">Warning</button>' +
  '<button class="btn btn-danger mr-1" @click="error">Error</button>' +
  '</div>',
  methods: {
    error () {
      this.$notify('This is an error message', 'error')
    },
    info () {
      this.$notify('This is an informational message', 'info')
    },
    warning () {
      this.$notify('This is a warning message', 'warning')
    },
    success () {
      this.$notify('This is a success message', 'success')
    }
  }
}).$mount('#app')