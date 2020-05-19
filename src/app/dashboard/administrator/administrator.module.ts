import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { SellsComponent } from './sells/sells.component';

const adminRoutes : Routes = [
	{ path : 'admin/dashboard', component : HomeComponent },
	{ path : 'admin/store', component : StoreComponent },
	{ path : 'admin/sells', component : SellsComponent }
]

@NgModule({
	declarations: [HomeComponent, StoreComponent, SellsComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(adminRoutes),
		ComponentsModule
	]
})
export class AdministratorModule { }
