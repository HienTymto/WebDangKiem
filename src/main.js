/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from './router'

//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import Button from 'primevue/button'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Listbox from 'primevue/listbox'
import InputText from 'primevue/inputtext'
import PanelMenu from 'primevue/panelmenu'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional

// Explicitly import IconsPlugin separately
import PrimeVue from 'primevue/config'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
// eslint-disable-next-line vue/no-reserved-component-names
app.component('Button', Button)
app.component('Splitter', Splitter)
app.component('SplitterPanel', SplitterPanel)
app.component('Listbox', Listbox)
app.component('InputText', InputText)
app.component('PanelMenu', PanelMenu)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
