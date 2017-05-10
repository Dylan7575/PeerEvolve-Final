import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  data;
  classID = localStorage.getItem("class");
  showing = false;

  constructor(private ref: ChangeDetectorRef, public http: Http) {

    setInterval(() => {
      this.ref.detectChanges();
      this.getData();
    }, 1000);
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.post('https://www.cefns.nau.edu/eecs/peerevolve/getCourseGroups.php', JSON.stringify(this.classID))
      .subscribe(res => this.data = res.json());
  }

  show() {
    this.showing = true;
  }

  change(event) {
    this.showing = event;
  }

  saveID(studentID, GroupID) {
    localStorage.setItem("student", studentID);
    localStorage.setItem("group", GroupID);
  }
}

