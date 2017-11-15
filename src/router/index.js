import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Photo from '@/components/Photo.vue'
import Form from '@/components/Form.vue'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
  ]
})
