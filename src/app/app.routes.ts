import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { MaterialtableComponent } from './components/materialtable/materialtable.component';

export const routes: Routes = [
    {
        path: '',
       component: MainPageComponent
        // component: MaterialtableComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
