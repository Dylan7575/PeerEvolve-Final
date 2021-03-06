import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import {Http} from "@angular/http";


import {errorHandler} from "@angular/platform-browser/src/browser";
import {ifError} from "assert";


@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit {
  data;
  classID= localStorage.getItem("class");
  options;
  fail = localStorage.getItem("class");
  bool = false;
  @Output() test = new EventEmitter();
  @Input() currClass:any;
  studentEnter = this.fb.group({
    StudentID : ["", Validators.compose([Validators.required])],
    Group : ["", Validators.compose([Validators.required])],
  });
  constructor(private http:Http, public fb: FormBuilder) {

  }

  ngOnInit() {
    this.http.post('https://www.cefns.nau.edu/eecs/peerevolve/getCourseGroups.php',JSON.stringify(this.classID))
      .subscribe(res=>this.options=res.json());

  }
  changeStatus(event){
    document.getElementsByTagName("option")[0].disabled=true;


  }
  doLogin($event) {
    let b=this.studentEnter.value;
    let cd = b['StudentID'];
    let od = b['Group'];
    let dd= localStorage.getItem("class");
    let list: string[] = [cd,od,dd];

    this.http.post('https://www.cefns.nau.edu/eecs/peerevolve/singleStudent.php',JSON.stringify(list))
      .subscribe(res=>this.data=res.json());
    this.studentEnter.reset();
    this.test.emit(false);


  }

}
