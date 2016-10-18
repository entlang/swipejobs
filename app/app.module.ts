import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from './components/job';
import { JobService } from "./services/job";
import { DateFormat } from "./pipes/dateFormat";

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, DateFormat ],
  providers: [ JobService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
