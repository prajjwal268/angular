import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Id="";
  Name="";
  Salary="";
  Dept="";
  Id1="";
  Name1="";
  Salary1="";
  Dept1="";
  msg:string="";
  employee:any[]=[{
    id:1001,name:'Rahul',salary:9000,department:'Java' },
    {
      id:1002,name:'Sachin',salary:19000,department:'OraApps' },
      {
        id:1003,name:'Vikash',salary:29000,department:'Bl' }];
  addemp()
  {
    this.employee.push({id:this.Id,name:this.Name,salary:this.Salary,department:this.Dept});
    this.msg="Data Inserted";
  }
  delemp(id)
  {
    this.employee.splice(this.employee.findIndex(item=>item.id===id),1);
    this.msg="Data Deleted";
  }
  upemp(i,n,s,d)
  {
    this.Id1=i;
    this.Name1=n;
    this.Salary1=s;
    this.Dept1=d;
    // this.employee.splice(this.employee.findIndex(item=>item.id===i));
    }
updateemp(i,n,s,d)
{
  let obj = {id:i,name:n,salary:s,department:d}
   this.employee.splice(this.employee.findIndex(item=>item.id===i),1,obj);
 this.msg="Data Updated"
 
  

}
}
