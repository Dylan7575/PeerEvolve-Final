
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
  student=localStorage.getItem("student");
  group =localStorage.getItem("group");
  course = localStorage.getItem("class");
  data;
  studedit =this.fb.group({
  Stud : ["", Validators.compose([Validators.required])],
  Group : ["", Validators.compose([Validators.required])],

});
  @Input() currClass;
  constructor(public fb:FormBuilder,public http:Http,public router:Router) {
  }

  ngOnInit() {
    this.http.post('https://www.cefns.nau.edu/eecs/peerevolve/getCourseGroups.php', JSON.stringify(this.course))
      .subscribe(res => this.data = res.json());

  }
  changeStatus(event){
    let yes =document.getElementsByTagName("option")[0].value;
    console.log(yes);
    if(yes=='yees'){
      document.getElementsByTagName("option")[0].disabled=true;
    }
  }
  update(event){

    let stud = this.studedit.value['Stud'];
    let group=this.studedit.value['Group'];
    let list: string[] = [stud,group,this.student,this.group,this.course];
    console.log(JSON.stringify(list));
    this.http.post('https://www.cefns.nau.edu/eecs/peerevolve/studentEdit.php',JSON.stringify(list))
      .subscribe(res=>this.data=res.json());
    alert("User Successfully Changed");
    this.router.navigateByUrl("/students");
  }
  deleter(event){
    let list:string[]=[this.student,this.group,this.course];
    console.log(list);
    this.http.post('https://www.cefns.nau.edu/eecs/peerevolve/deleteUser.php',JSON.stringify(list))
      .subscribe(res=>this.data=res.json());
    alert("User Successfully Deleted");
    this.router.navigateByUrl("/students");




  }

}
