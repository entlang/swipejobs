import { Component, OnInit } from '@angular/core';

import {JobService} from "../services/job";
import { Job } from "../models/job";
import { DateFormat } from "../pipes/dateFormat";

@Component({
    selector: 'my-app',
    templateUrl: './app/components/job.html'
})

export class AppComponent implements OnInit{ 
	private jobData:Job;

	constructor(private jobService: JobService){}

	ngOnInit(){
		this.jobService.getJob().then(response => {
			this.jobData = response;
		});
	}
}
