import { Component, OnInit } from '@angular/core';

import {JobService} from "/app/services/job";
import {Job} from "/app/models/job";
import { DateFormat } from "/app/pipes/dateFormat";

@Component({
    selector: 'my-app',
    templateUrl: './app/components/job.html'
})

export class AppComponent implements OnInit{ 
	private jobData:Job:

	constructor(private jobService: JobService){}

	ngOnInit(){
		this.jobService.getJob().then(response => {
			this.jobData = response;
		});
	}
}
