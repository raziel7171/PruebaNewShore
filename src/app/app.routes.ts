import {RouterModule, Routes} from '@angular/router'
import {DashboardComponent} from './dashboard/dashboard.component'
import {HouseComponent} from './house/house.component'
import { from } from 'rxjs'

const APP_ROUTES: Routes = [
    {path: 'dashboard', component: DashboardComponent}, 
    {path: 'house/:house', component: HouseComponent},      
    {path: '**', pathMatch: 'full', redirectTo: 'dashboard'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);