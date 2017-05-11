import {Component, OnInit, OnChanges, DoCheck, AfterContentInit, ChangeDetectorRef} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-curvals',
  templateUrl: './curvals.component.html',
  styleUrls: ['./curvals.component.css']
})
export class CurvalsComponent implements OnInit {
  public data;
  private showing=false;
  currentClass= JSON.stringify(localStorage.getItem("class"));
  constructor(private ref: ChangeDetectorRef,public http:Http) {
    setInterval(() => {
      this.ref.detectChanges();
      this.getData();
    }, 1000);
  }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.http.post('https://www.cefns.nau.edu/eecs/peerevolve/GetVals.php',this.currentClass)
      .subscribe(res=>this.data=res.json());
    console.log(JSON.stringify(this.data));
  }
  change(event){
    this.showing=event;
  }
  show(){
    this.showing=true;
  }
  public  saveID(toStore){
    localStorage.setItem("evalID",toStore);
  }

}

