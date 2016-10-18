export class Job {
    jobId: number;
    title: string;
    company: Company;
    wagePerHourInCents: number;
    shifts: Shift[];
 }

 class Company{
    address:string;
    logo:string;
    name:string;
    reportTo:string;
 }

 class Shift{
    startDate:Date;
    endDate:Date;
 }
