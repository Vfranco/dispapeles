import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	route: string = '';
	constructor(private router: Router) { }

	ngOnInit() {
		this.router.events.subscribe(event => {
			if(event instanceof NavigationEnd)
			{
				this.route = event.url;
				console.log(this.route);
			}
		})
	}

}
