import { Component, OnInit } from '@angular/core';
import { ApiTestService } from '../service/api-test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
public employeeDetails:any [] =[];
private employeeDetailsClone: any [] = [];
private isSorting: boolean;
  constructor(private apiservice:ApiTestService) { }

  ngOnInit(): void {
   this.getEmployeeDeatils();

  }

  getEmployeeDeatils()
  {
     this.apiservice.getData().subscribe(data=>{
      this.employeeDetails = data.data;
      this.employeeDetailsClone =this.employeeDetails;
     })
}
 
sortByEmployeeName(data)
{
  if(this.isSorting){
    this.employeeDetails.sort((x,y) => x.employee_name.localeCompare(y.employee_name));   
  }
  else{
    this.employeeDetails.sort((x,y) => y.employee_name.localeCompare(x.employee_name));   
  }
  this.isSorting = !this.isSorting;   
}
onfilterdata(data:any)
{
  let str = data.target.value;
  if (str != undefined && str !=null)
  {
    let str1 = str.trim().toLowerCase();
     let filter = this.employeeDetailsClone.filter(s=> this.FilterMapdata(str1,s));
     this.employeeDetails = filter;
  }
  else
  {
    this.employeeDetails = this.employeeDetailsClone;
  }
}
FilterMapdata(s:string, data:any):boolean{
  return data.id.toString().toLowerCase().includes(s) || data.employee_name.toString().toLowerCase().includes(s) || data.employee_salary.toString().toLowerCase().includes(s)
}

}
