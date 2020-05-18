import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';

const customerRoutes : Routes = [
	{ path : 'customer', component : HomeComponent }
]

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(customerRoutes)
	]
})
export class CustomerModule { }
