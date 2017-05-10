
import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Http} from "@angular/http";
import {RouterModule, Router} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  private student=localStorage.getItem("student");
  private group =localStorage.getItem("group");
  private course = localStorage.getItem("class");
  private data;
  @Input() currClass;
  constructor(public fb:FormBuilder,public http:Http,public router:Router) {
  }
  private studedit =this.fb.group({
    Stud : ["", Validators.compose([Validators.required])],
    Group : ["", Validators.compose([Validators.required])],

  });
  ngOnInit() {
    this.http.post('http://localhost/PHP/untitledfolder/getCourseGroups.php', JSON.stringify(this.course))
      .subscribe(res => this.data = res.json());

  }
  changeStatus(){
    let yes =document.getElementsByTagName("option")[0].value;
    console.log(yes);
    if(yes=='yees'){
      document.getElementsByTagName("option")[0].disabled=true;
    }
  }
  update(){

    let stud = this.studedit.value['Stud'];
    let group=this.studedit.value['Group'];
    let list: string[] = [stud,group,this.student,this.group,this.course];
    console.log(JSON.stringify(list));
    this.http.post('http://localhost/PHP/untitledfolder/studentEdit.php',JSON.stringify(list))
      .subscribe(res=>this.data=res.json());
    alert("User Successfully Changed");
    this.router.navigateByUrl("/students");
  }
  deleter(){
    let list:string[]=[this.student,this.group,this.course];
    console.log(list);
    this.http.post('http://localhost/PHP/untitledfolder/deleteUser.php',JSON.stringify(list))
      .subscribe(res=>this.data=res.json());
    alert("User Successfully Deleted");
    this.router.navigateByUrl("/students");




  }

}
