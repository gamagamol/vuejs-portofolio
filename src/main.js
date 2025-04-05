import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faArrowLeft, faArrowRight, faCircle, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
library.add(faUpRightAndDownLeftFromCenter,faCircle, faArrowLeft, faArrowRight)
const app = createApp(App)

app.
mount('#app')

