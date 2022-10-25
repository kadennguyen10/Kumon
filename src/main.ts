import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';     
import Dialog from 'primevue/dialog';
import FileUpload from 'primevue/fileupload';
import RadioButton from 'primevue/radiobutton';
import Toolbar from 'primevue/toolbar';

import 'primeflex/primeflex.scss';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App)

// app.use(router)
app.use(PrimeVue);
app.use(ToastService);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Dialog', Dialog);
app.component('FileUpload', FileUpload);
app.component('RadioButton', RadioButton);
app.component('Toolbar', Toolbar);

app.mount('#app')
