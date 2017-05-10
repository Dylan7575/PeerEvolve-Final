import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  fullImagePath: String;
  private user = JSON.parse(localStorage.getItem("user"));
  private class= localStorage.getItem("class");

  isCollapsed = true;
  constructor(private ref: ChangeDetectorRef) {
    this.fullImagePath='./assets/face.png';
    setInterval(() => {
      this.ref.detectChanges();
      this.user = JSON.parse(localStorage.getItem("user"));
    }, 1000);
  }

  ngOnInit() {
  }
  public get menuIcon():string{
    return this.isCollapsed ? '☰' : '✖';
  }
}

