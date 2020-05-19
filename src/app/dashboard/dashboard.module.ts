import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { MainComponent } from './main/main.component';

const dashboardRoute: Routes = [
	{
		path: 'dashboard/dispapeles/:uid',
		component: MainComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule)
			},
			{
				path: '',
				loadChildren: () => import('./adviser/adviser.module').then(m => m.AdviserModule)
			},
			{
				path: '',
				loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
			}
		]
	}
]

@NgModule({
	declarations: [MainComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(dashboardRoute),
		SharedModule,
		ComponentsModule
	]
})
export class DashboardModule { }
