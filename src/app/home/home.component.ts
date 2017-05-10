import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {ajaxGet} from "rxjs/observable/dom/AjaxObservable";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private data;
  private us;
  private activeNum;
  private showing;
  headers =new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  constructor(private http:Http,private router: Router,private ref:ChangeDetectorRef) {
    setInterval(() => {
      this.ref.detectChanges();
      this.getData();
    }, 1000);

  }
  ngOnInit() {

    this.getData();

  }
  change(event) {
    this.showing=event;
  }
  getData() {
    // this.http.get("http://localhost/untitledfolder/getUserName.php").subscribe(res=>this.us=res.json());
    this.http.post('http://localhost/PHP/untitledfolder/GetClasses.php',JSON.stringify(localStorage.getItem("user"))).
    subscribe(res=>this.data=res.json());
    //   console.log(this.data);
    // this.http.post('http://localhost/untitledfolder/classStats.php',JSON.stringify(localStorage.getItem("class"))).
    // subscribe(res=>this.activeNum=res.json());

  }
  setClass(toClass){
    localStorage.setItem("class",toClass);
    this.router.navigateByUrl("groups");
  }
  show() {
    this.showing=true;
  }
  /*
   getData(){
   this.http.post('http://localhost/untitledfolder/admin.php',JSON.stringify(this.data))
   .subscribe(res=>this.data=res.json());

   }*/

}

