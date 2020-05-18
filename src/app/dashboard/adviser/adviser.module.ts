import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';

const adviserRoutes : Routes = [
	{ path : 'adviser', component : HomeComponent }
]

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(adviserRoutes)
	]
})
export class AdviserModule { }
