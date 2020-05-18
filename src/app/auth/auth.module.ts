import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ResetComponent } from './reset/reset.component';

const authRoutes : Routes = [
	{ path : '', component : LoginComponent },
	{ path : 'register', component : RegisterComponent },
	{ path : 'recovery', component : RecoveryComponent },
	{ path : 'reset', component : ResetComponent }
]

@NgModule({
	declarations: [
		LoginComponent, 
		RegisterComponent, 
		RecoveryComponent, 
		ResetComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(authRoutes)
	],
	exports: [
		LoginComponent, 
		RegisterComponent, 
		RecoveryComponent, 
		ResetComponent
	]
})
export class AuthModule { }
