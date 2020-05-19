import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';
import { SalesComponent } from './sales/sales.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
	declarations: [HeaderComponent, BreadcumbComponent, SalesComponent, ChartsComponent],
	imports: [
		CommonModule
	],
	exports: [HeaderComponent, BreadcumbComponent, SalesComponent, ChartsComponent]
})
export class ComponentsModule { }
