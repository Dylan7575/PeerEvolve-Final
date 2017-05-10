import {Component, OnInit, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-doer-bar',
  templateUrl: './doer-bar.component.html',
  styleUrls: ['./doer-bar.component.css']
})
export class DoerBarComponent implements OnInit {
  private currentClass = this.currentClass;
  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.ref.detectChanges();
      this.currentClass =localStorage.getItem("class");
    }, 500);
  }

  ngOnInit() {
  }

}
