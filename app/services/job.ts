import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Job} from "../models/job";

@Injectable()
export class JobService {
	constructor(private http: Http) {  }

	getJob():Promise<Job>{
		return this.http.get("/app/json/mockjob.json").toPromise()
            .then(response => response.json()).catch( error => {
            	console.log("getJob error",error);
            });
	}

}